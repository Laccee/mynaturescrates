import pandas as pd
from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS
from ml_model import ProductRecommender  # Import the recommendation model
from delivery_model import DeliveryTimePredictor, predict_delivery_time  # Import from delivery_model
from firebase_config import db  # Import Firebase configuration

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:8080"}})  # Configure CORS

# Initialize the recommendation and prediction models
recommender = ProductRecommender()
delivery_predictor = DeliveryTimePredictor()

# Load product data
def load_product_data():
    return pd.read_csv('data/products.csv')

# Basic product recommendation function
def recommend_products(min_rating=4.0, max_price=20.0):
    df = load_product_data()
    filtered_df = df[(df['rating'] >= min_rating) & (df['price'] <= max_price)]
    recommendations = filtered_df.to_dict(orient='records')
    return recommendations

# Home route
@app.route('/')
def home():
    return jsonify({"message": "Welcome to Trust AI for Nature's Crates!"})

# Basic recommendations route
@app.route('/recommendations', methods=['GET'])
def get_basic_recommendations():
    min_rating = float(request.args.get('min_rating', 4.0))
    max_price = float(request.args.get('max_price', 20.0))
    recommendations = recommend_products(min_rating, max_price)
    return jsonify(recommendations)

# Advanced recommendations route based on product ID
@app.route('/recommendations/<int:product_id>', methods=['GET'])
def get_advanced_recommendations(product_id):
    recommendations = recommender.recommend(product_id)
    return jsonify(recommendations)

# Delivery time prediction route
@app.route('/delivery_time', methods=['GET'])
def predict_delivery_time_route():
    price = float(request.args.get('price', 0))
    distance = float(request.args.get('distance', 0))
    delivery_mode = request.args.get('mode', 'short')  # Default mode is 'short'

    if delivery_mode == 'long':
        destination = request.args.get('destination', 'default_destination')
        prediction = predict_delivery_time(destination)
        return jsonify({"predicted_delivery_time_in_days": prediction})
    else:
        prediction = delivery_predictor.predict(price, distance)
        return jsonify({"predicted_delivery_time_in_minutes": prediction})

# User feedback storage route
@app.route('/user_feedback', methods=['POST'])
def store_user_feedback():
    user_id = request.json.get('user_id')
    feedback = request.json.get('feedback')
    db.collection('feedback').add({'user_id': user_id, 'feedback': feedback})
    return jsonify({"status": "Feedback received!"})

# User data retrieval route
@app.route('/user_data/<string:user_id>', methods=['GET'])
def get_user_data(user_id):
    feedback_ref = db.collection('feedback').where('user_id', '==', user_id).stream()
    feedback_data = [doc.to_dict() for doc in feedback_ref]
    return jsonify(feedback_data)

if __name__ == "__main__":
    app.run(debug=True)
