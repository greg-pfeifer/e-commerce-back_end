const router = require('express').Router();
const { Category, Product } = require('../../models');

// ENDPOINT: api/categories

// Find all categories, include associated products
router.get('/', async (req, res) => {
  const categories = await Category.findAll({
    include: Product
  })
  res.send(categories)
});

// Find one category by `id` value, include associated Products
router.get('/:id', async (req, res) => {
  const categories = await Category.findOne({
    where: {id: req.params.id},
    include: Product
  })
  res.send(categories)
});

// Create a new category
router.post('/', async (req, res) => {
  const category_data = req.body
  const new_category = await Category.create(category_data)
  res.send(new_category)
});

// Update a category by its `id` value
router.put('/:id', async (req, res) => {
  await Category.update(req.body, {
    where: {
      id: req.params.id
    }    
  })
  res.send('Category ID has been updated')
});

// Delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  await Category.destroy({
    where: {
      id: req.params.id
    }
  })
  res.send('Category has been deleted')
});

module.exports = router;
