from flask import Flask, abort

app = Flask(__name__)

@app.route('/')
def index():
    return 'Index'

@app.route('/status_401')
def status_401():
    return 'This is the response for /status_401', 401

@app.route('/doesnt_exist')
def doesnt_exist():
    abort(404)

@app.route('/status_500')
def status_500():
    return 'This is the response for /status_500', 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
