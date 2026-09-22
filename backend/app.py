from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)

CORS(app)

# Load trained ML model
model = joblib.load("water_quality_model.pkl")


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "HydroGuard AI Water Quality Prediction API is running"
    })


@app.route("/predict", methods=["POST"])
def predict():

    try:
        data = request.json

        ph = float(data["ph"])
        turbidity = float(data["turbidity"])
        dissolved_oxygen = float(data["dissolvedOxygen"])
        conductivity = float(data["conductivity"])
        nitrate = float(data["nitrate"])

        features = np.array([
            ph,
            turbidity,
            dissolved_oxygen,
            conductivity,
            nitrate
        ]).reshape(1, -1)

        prediction = model.predict(features)[0]

        if prediction == 1:
            quality = "Contaminated"
            alert = "Unsafe"
        else:
            quality = "Safe"
            alert = "Safe"

        return jsonify({
            "quality": quality,
            "alert": alert
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 400


if __name__ == "__main__":
    import os

    port = int(os.environ.get("PORT", 5000))

    app.run(
        host="0.0.0.0",
        port=port,
        debug=False
    )