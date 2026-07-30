from flask import Flask, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    """API health check."""
    return jsonify(
        {
            "message": "Brent Oil Dashboard API running"
        }
    )


# Historical Brent oil prices
@app.route("/api/prices")
def prices():

    with open("data/prices.json") as file:
        data = json.load(file)

    return jsonify(data)


# Major geopolitical and economic events
@app.route("/api/events")
def events():

    with open("data/events.json") as file:
        data = json.load(file)

    return jsonify(data)


# Bayesian change point analysis results
@app.route("/api/changepoints")
def changepoints():

    with open("data/changepoints.json") as file:
        data = json.load(file)

    return jsonify(data)


# Dashboard metrics
@app.route("/api/metrics")
def metrics():

    with open("data/metrics.json") as file:
        data = json.load(file)

    return jsonify(data)


if __name__ == "__main__":
    app.run(
        debug=True,
        port=5000
    )