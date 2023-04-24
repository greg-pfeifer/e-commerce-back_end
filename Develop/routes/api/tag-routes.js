const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// ENDPOINT: api/tags

// Find all tags, include associated products
router.get('/', async (req, res) => {
  const tags = await Tag.findAll({
    include: [
      {model: Product, through: ProductTag}
    ] 
  })
  res.send(tags)
});

// Find one tag by `id` value, include associated Products
router.get('/:id', async (req, res) => {
  const tags = await Tag.findOne({
    include: Product
  })
  res.send(tags)
});

// Create a new tag
router.post('/', async (req, res) => {
  const tag_data = req.body
  const new_tag = await Tag.create(tag_data)
  res.send(new_tag)
});

// Update a tag by its 'id' value
router.put('/:id', async (req, res) => {
  await Tag.update(req.body, {
    where: {
      id: req.params.id
    }    
  })
  res.send('Tag ID has been updated')
});

// Delete a tag by its 'id' value
router.delete('/:id', async (req, res) => {
  await Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  res.send('Tag has been deleted')
});

module.exports = router;
