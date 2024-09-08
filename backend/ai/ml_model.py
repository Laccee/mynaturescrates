import pandas as pd
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import StandardScaler

class ProductRecommender:
    def __init__(self):
        self.df = pd.read_csv('data/products.csv')
        self.model = None
        self.scaler = StandardScaler()

    def train_model(self):
        features = self.df[['price', 'rating']].values
        features = self.scaler.fit_transform(features)
        self.model = NearestNeighbors(n_neighbors=3, algorithm='auto')
        self.model.fit(features)

    def recommend(self, product_id):
        if self.model is None:
            self.train_model()

        product = self.df[self.df['product_id'] == product_id]
        if product.empty:
            return []

        features = self.scaler.transform(product[['price', 'rating']].values)
        distances, indices = self.model.kneighbors(features)
        
        recommendations = self.df.iloc[indices[0]]
        return recommendations.to_dict(orient='records')

recommender = ProductRecommender()
