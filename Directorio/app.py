from flask import Flask, render_template, g, redirect, url_for

app = Flask(__name__)
app.secret_key = 'greenjellybananainamicrowave'

@app.errorhandler(404)
def page_not_found(e):
    return redirect(url_for('home'))

@app.route('/')
def home():
    return render_template('home.html')

if __name__ == '__main__':
    app.run(debug = True)