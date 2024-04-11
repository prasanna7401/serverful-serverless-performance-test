from flask import Flask, request
from werkzeug.utils import secure_filename
import os
import argparse
import pytesseract
from PIL import Image, ImageEnhance
import re

app = Flask(__name__)

pytesseract.pytesseract.tesseract_cmd = r'/usr/bin/tesseract'

def extract_text_from_image(image_path):
    try:
        image = Image.open(image_path)
        image = image.resize((image.width * 2, image.height * 2))
        image = image.convert("L")
        extracted_text = pytesseract.image_to_string(image, lang='eng', config='--psm 6')
        return extracted_text.strip()
    
    except Exception as e:
        print(f"Error: {e}")
        return None

@app.route('/extract_text', methods=['POST'])
def extract_text_route():
    if 'file' not in request.files:
        return 'No file part'
    file = request.files['file']
    filename = secure_filename(file.filename)
    file.save(os.path.join('/tmp', filename))
    extracted_text = extract_text_from_image(os.path.join('/tmp', filename))
    return extracted_text

@app.route('/health', methods=['GET'])
def health_check():
    return 'OK', 200

if __name__ == "__main__":
    app.run(host='0.0.0.0')

