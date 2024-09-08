import random

def predict_delivery_time(destination):
    """
    Predict delivery time based on destination.
    Currently, this is a placeholder using random values.
    
    :param destination: str, the destination location
    :return: int, predicted delivery time in days
    """
    return random.randint(2, 7)  # Predict delivery in 2 to 7 days


class DeliveryTimePredictor:
    """
    Predict delivery time based on price and distance.
    Delivery time is returned in minutes.
    """
    def __init__(self):
        pass  # Initialization code, if any

    def predict(self, price, distance):
        """
        Predict delivery time based on price and distance.
        
        :param price: float, price of the product
        :param distance: float, distance in kilometers
        :return: float, predicted delivery time in minutes
        """
        base_time = 30  # Base delivery time in minutes
        time = base_time + (distance * 0.5) - (price * 0.1)
        return max(time, 15)  # Ensure minimum delivery time of 15 minutes
