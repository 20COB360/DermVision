
from flask import Flask, request, jsonify
from PIL import Image
from my_predictor import predict_with_model

app = Flask(__name__)

@app.route('/')
def index():
    return "F-"

@app.route('/process_image', methods=['POST'])
def process_image():
    try:
        # Get the uploaded image
        image_file = request.files['image']
        image = Image.open(image_file)
        img_name = 'predict.jpg'
        image.save(img_name)

        
        prediction = "Happened!"
        prediction = predict_with_model(img_name)
        print(prediction)

        return jsonify({"message": str(prediction)})
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
