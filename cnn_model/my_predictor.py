import tensorflow as tf
import numpy as np


def predict_with_model(image):

    model = tf.keras.models.load_model('./Models')

    

    image = tf.io.read_file(image)
    image = tf.image.decode_png(image, channels=3)
    image = tf.image.convert_image_dtype(image, dtype=tf.float32)
    image = tf.image.resize(image, [60,60]) #shape = (60,60,3)
    image = tf.expand_dims(image, axis=0) #shape = (1,60,60,3)

    predictions = model.predict(image) #will get a list of probablities for each class like [0.001, 0.003, 97.01, 0.1, ...]
    predictions = np.argmax(predictions) #this will give me 2
    
    return predictions



if __name__ == "__main__":

    img_path = "predict.jpg"
    model = tf.keras.models.load_model('./Models')

    prediction = predict_with_model(img_path)

    print(f"prediction = {prediction}")
    