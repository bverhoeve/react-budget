from flask import Flask, jsonify

app = Flask(__name__)

BASE_TRANSACTION_DATA = [
    {
        'user': {
            'name': 'Yorben'
        },
        'amount': 200,
        'date': "2021-07-01T12:32:04.534Z",
        'place': { 'id': 4, 'name': 'hogent', 'rating': 1 },
    }, 
    {
        'user': 'Benjamin',
        'amount': 1500,
        'date': '2021-06-30T10:09:22.534Z',
        'place': { 'id': 1, 'name': 'home', 'rating': 5 },
    }
]

transactions = BASE_TRANSACTION_DATA

@app.route('/api/transactions')
def get_transactions():
    return jsonify(transactions)

