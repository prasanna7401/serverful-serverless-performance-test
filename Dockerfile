# Use an official Python runtime as a parent image
FROM python:3.8-slim-buster

# Set the working directory in the container to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

RUN apt-get update && apt-get install -y \
    tesseract-ocr \
    libtesseract-dev

# open port 5000
EXPOSE 5000

# Run app.py when the container launches
CMD ["python", "app.py"]

