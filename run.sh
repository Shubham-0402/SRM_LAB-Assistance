#!/bin/bash

echo "🚀 Starting SRM Lab Assistant Environment..."

# Ensure we are in the correct directory (the directory where this script is located)
cd "$(dirname "$0")"

# Setup virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python3 -m venv venv
fi

# Activate virtual environment and install dependencies
source venv/bin/activate
echo "📦 Installing Python dependencies (Flask, Flask-CORS, reportlab, matplotlib, numpy)..."
pip install flask flask-cors reportlab matplotlib numpy --quiet

# Start the Flask backend in the background
echo "⚙️ Starting Flask Processing API on port 5001..."
python app.py &
FLASK_PID=$!

# Give Flask a second to boot up
sleep 2

# Open the frontend in the default web browser (macOS uses 'open')
echo "🌐 Opening SRM Lab Assistant in your browser..."
open http://127.0.0.1:5001/

echo "✅ Environment is live!"
echo "Press [CTRL+C] to stop the server and close the app."

# Keep the script running to hold the background process, and kill it on exit
trap "echo '🛑 Stopping Flask server...'; kill $FLASK_PID; exit" INT TERM
wait $FLASK_PID
