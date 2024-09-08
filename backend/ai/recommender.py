import pandas as pd

# Load product data
products_df = pd.read_csv('../ai/data/products.csv')

def recommend_products(user_preferences, top_n=5):
    # A simple recommendation system (random for now)
    recommended_products = products_df.sample(n=top_n)
    return recommended_products.to_dict(orient='records')
