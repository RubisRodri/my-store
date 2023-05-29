const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const products = [];
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      email: faker.internet.email(),
      sex: faker.person.sexType(),
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filtering');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'chocolate',
    price: '1000',
  });
});

module.exports = router;
