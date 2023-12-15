from flask import Flask, render_template, request

app = Flask(__name__)  # Use __name__ as the name of the Flask application

# Define the isSafeMessage function
def isSafeMessage(message):
    # Define a list of offensive words
    offensive_words = ["fuck"]  # Add more words as needed

    # Convert the message to lowercase for case-insensitive matching
    message = message.lower()

    # Check if the message contains any offensive words
    for word in offensive_words:
        if word in message:
            return False  # Unsafe message

    return True  # Safe message

# Define a route to display an HTML form
@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        message = request.form["message"]
        if isSafeMessage(message):
            return "Message is safe and can be sent."
        else:
            return "Message is offensive and should be rejected."
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
