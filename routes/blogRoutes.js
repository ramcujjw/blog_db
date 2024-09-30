const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const blogModel = require('../model/blogData');

// GET operation
router.get('/', async (req, res) => {
  try {
    const data = await blogModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send('Data not found');
  }
});

// POST operation
router.post('/addblog', async (req, res) => {
  try {
    var item = req.body;
    const data1 = new blogModel(item);
    const saveData = await data1.save();
    res.status(200).send('Post successful');
  } catch (error) {
    res.status(404).send('Post unsuccessful');
  }
});

// PUT operation
router.put('/edit/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await blogModel.findByIdAndUpdate(id, req.body);
    res.status(200).send('Update successful');
  } catch (error) {
    res.status(404).send('Update unsuccessful');
  }
});

// DELETE operation
router.delete('/remove/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data2 = await blogModel.findByIdAndDelete(id);
    res.status(200).send('Delete successful');
  } catch (error) {
    res.status(404).send('Delete unsuccessful');
  }
});

module.exports = router;
