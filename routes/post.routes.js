const router = require('express').Router();

const Post = require("../models/post");


router.post('/add', async (req, res) => {
  try {
    const {text, title, imgUrl} = req.body
    const post = await Post.create({text, title, imgUrl})
    res.send({data: post});
  } catch (e) {
    console.log(e)
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.send({data: posts});
  } catch (e) {
    console.log(e)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.send(post);
  } catch (e) {
    console.log('1111')
    console.log(e)
  }
});

router.delete('/remove/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndRemove(req.params.id)
    res.send(post);
  } catch (e) {
    console.log(e)
  }
});


module.exports = router;
