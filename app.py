from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

content = {
    "id": 1,
    "text": "This is some default content."
}


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Flask API is running 🚀",
        "available_routes": [
            "/get-content",
            "/update-content",
            "/update-section"
        ]
    })

@app.route("/get-content", methods=["GET"])
def get_content():
    return jsonify(content)

@app.route("/update-content", methods=["POST"])
def update_content():
    data = request.get_json()
    content["text"] = data.get("text", content["text"])
    return jsonify(content)


@app.route("/update-section", methods=["POST"])
def log_edit():
    try:
        data = request.get_json()
        component = data.get("component")
        field = data.get("field")
        new_value = data.get("value")

        print("\nFRONTEND EDIT DETECTED")
        print(f"Component: {component}")
        print(f"Field: {field}")
        print("New Value:")
        print(new_value)
        print("-" * 50)

        return jsonify({"message": "Edit logged successfully"}), 200
    except Exception as e:
        print("Error logging edit:", str(e))
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
