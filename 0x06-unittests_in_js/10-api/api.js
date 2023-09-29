const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7865;

app.use(bodyParser.json()); // Enable JSON body parsing

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const cartId = req.params.id;
  res.status(200).send(`Payment methods for cart ${cartId}`);
});

// New endpoint for /available_payments
app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
    credit_cards: true,
    paypal: false,
    },
  });
});
  
// New endpoint for POST /login
app.post('/login', (req, res) => {
  const  userName  = req.body.userName;
  if (userName) {
	res.status(200).send(`Welcome ${userName}`);
    } else {
	res.status(404).send();
    }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
