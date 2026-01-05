const db = require('./db');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

//const products = require('./data/products');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Express backend is running');
});

app.get('/api/products', async (req, res) => {
  try {
    const [products] = await db.query(`
      SELECT 
        p.id,
        p.name,
        p.price,
        p.description,
        i.image_url
      FROM products p
      LEFT JOIN product_images i 
        ON p.id = i.product_id 
        AND i.is_primary = 1
      WHERE p.status = 'available'
    `);

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/api/products/:id', async (req, res) => {
  const { id } = req.params;

  try {
    // ambil data produk
    const [products] = await db.query(
      `SELECT * FROM products WHERE id = ? LIMIT 1`,
      [id]
    );

    if (products.length === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // ambil semua gambar produk
    const [images] = await db.query(
      `SELECT image_url, is_primary 
       FROM product_images 
       WHERE product_id = ?
       ORDER BY is_primary DESC`,
      [id]
    );

    res.json({
      ...products[0],
      images
    });

  } catch (error) {
    console.error('Error fetching product detail:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

const path = require('path');

app.use('/images', express.static(
  path.join(__dirname, '../images')
));

/*app.get('/api/products', (req, res) => {
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
});*/

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

/*app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});*/

