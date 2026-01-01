const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const products = require('./data/products');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Express backend is running');
});

app.get('/api/products', (req, res) => {
  let result = [...products];

  // random=true
  if (req.query.random === 'true') {
    result.sort(() => 0.5 - Math.random());
  }

  // limit=6
  if (req.query.limit) {
    const limit = parseInt(req.query.limit);
    result = result.slice(0, limit);
  }

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

