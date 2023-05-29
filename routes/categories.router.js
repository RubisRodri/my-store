const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  res.json([
    {
      categories: 'primiun',
    },
  ]);
});

router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json([
    {
      categories: 'premiun',
      categoryId,
    },
  ]);
});

module.exports = router;
