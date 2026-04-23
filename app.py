import os
import sys
import re
from flask import Flask, request, jsonify, send_file, render_template
from flask_cors import CORS
import json
import io

from calculations.calculation1 import exp1_bp
from calculations.calculation2 import exp2_bp
from calculations.calculation3 import exp3_bp
from calculations.calculation4 import exp4_bp
from calculations.calculation5 import exp5_bp
from calculations.calculation6 import exp6_bp
from calculations.calculation7 import exp7_bp

app = Flask(__name__)
CORS(app)

# Register the original blueprints so PDF endpoints work perfectly
app.register_blueprint(exp1_bp, url_prefix="/exp1")
app.register_blueprint(exp2_bp, url_prefix="/exp2")
app.register_blueprint(exp3_bp, url_prefix="/exp3")
app.register_blueprint(exp4_bp, url_prefix="/exp4")
app.register_blueprint(exp5_bp, url_prefix="/exp5")
app.register_blueprint(exp6_bp, url_prefix="/exp6")
app.register_blueprint(exp7_bp, url_prefix="/exp7")

TEMPLATE_MAP = {
    1: 'exp1/index.html',
    2: 'exp2/index.html',
    3: 'exp3/ph_meter.html',
    4: 'exp4/conductometry.html',
    5: 'exp6/potentiometry.html',
    6: 'exp5/mixture_conductometry.html',
    7: 'exp7/index.html'
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/experiment/<int:exp_id>', methods=['GET'])
def get_experiment_ui(exp_id):
    if exp_id not in TEMPLATE_MAP:
        return jsonify({"html": f"<p>Experiment {exp_id} not mapped yet.</p>"})
        
    template_path = os.path.join(app.root_path, 'templates', TEMPLATE_MAP[exp_id])
    html_content = ""
    script_content = ""
    
    if os.path.exists(template_path):
        with open(template_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Extract everything inside <body> but before <script>
            if '<body>' in content and '<script>' in content:
                body_content = content.split('<body>')[1].split('<script>')[0]
            elif '<div class="container">' in content and '<script>' in content:
                body_content = '<div class="container">' + content.split('<div class="container">')[1].split('<script>')[0]
            else:
                body_content = content
                
            # Clean up headers, back links, and titles so it fits the new UI
            body_content = re.sub(r'{% include.*?%}', '', body_content)
            body_content = re.sub(r'<a href="/calculations".*?</a>', '', body_content)
            body_content = re.sub(r'<h1>.*?</h1>', '', body_content)
            
            # Form submissions point to our Flask server explicitly
            body_content = re.sub(r'action="/exp(\d+)/download_pdf"', r'action="/exp\1/download_pdf"', body_content)
            
            html_content = body_content
                
            # Extract all script contents
            script_matches = re.findall(r'<script>(.*?)</script>', content, re.DOTALL)
            if script_matches:
                for script_inner in script_matches:
                    script_content += f"<script>{script_inner}</script>"
    else:
        html_content = f"<p>Error: Could not find template file at {template_path}</p>"

    style_content = """
    <style>
      .titration-table { width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 20px; }
      .titration-table th, .titration-table td { border: 1px solid rgba(100,160,255,0.3); padding: 8px; text-align: center; }
      .titration-table th { background: rgba(100,160,255,0.1); color: #64a0ff; font-family: 'Share Tech Mono'; }
      .experiment-section { margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 20px; }
      .experiment-section h2 { font-size: 1.2rem; color: #a0c8ff; margin-bottom: 15px; font-family: 'Share Tech Mono'; }
      .form-group { margin-bottom: 15px; }
      .form-group label { display: block; margin-bottom: 5px; color: #ccc; }
      .form-group input { background: rgba(0,0,0,0.3); border: 1px solid rgba(100,160,255,0.3); color: white; padding: 8px; border-radius: 4px; width: 100%; max-width: 200px; }
      .calc-cell { color: #00e5a0; font-weight: bold; }
      .result-box { margin-bottom: 15px; padding: 15px; background: rgba(0,0,0,0.2); border-left: 4px solid #64a0ff; }
      .final-result { border-left-color: #00e5a0; background: rgba(0,229,160,0.1); }
      .graph-container { background: white; margin-bottom: 20px; padding: 10px; border-radius: 8px; }
      .btn { padding: 10px 20px; font-family: 'Share Tech Mono'; border-radius: 4px; cursor: pointer; border: none; font-size: 1rem; margin-right: 10px; }
      .btn-primary { background: #1a73e8; color: white; }
      .btn-secondary { background: #5f6368; color: white; }
    </style>
    """

    html = style_content + html_content + script_content
    return jsonify({"html": html})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
