import firebase_admin
from firebase_admin import credentials, firestore

# Path to your Firebase service account key JSON file
firebase_cred_path = 'firebase-adminsdk.json'

# Initialize Firebase app
cred = credentials.Certificate(firebase_cred_path)
firebase_admin.initialize_app(cred)

# Initialize Firestore database
db = firestore.client()

# Example function to add a document to Firestore (optional usage example)
def add_feedback(user_id, feedback):
    feedback_ref = db.collection('feedback').add({
        'user_id': user_id,
        'feedback': feedback
    })
    return feedback_ref.id
