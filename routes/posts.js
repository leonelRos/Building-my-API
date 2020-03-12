var express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// gets all the post using promises
router.get('/', async (req, res) => {
try {
  const posts = await Post.find();
  res.json(posts);
} catch (err){
  res.json({message: err})
  }
});
// this submit a post with promises
router.post('/',  async (req,res) => {
  const post =  new Post({
    title: req.body.title,
    description: req.body.description
  })
  const savePost = await post.save()
  try {
  res.json(savePost)
} catch (err){
  res.json({
    message:err
  })
}
});

// route for a specific posts using promises!
router.get('/:postId', async (req, res) => {
  try {
    // we use the "Post", we require after requiring express
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err){
    res.json({ message:err })
  }
})
// deleting a posts usign promises
router.delete('/:postId', async (req, res) => {
  try {
    const removePost = await Post.remove({_id: req.params.postId})
    res.json(removePost)
  } catch (err) {
    res.json({message:err})
  }
});

// updating a post using  promises
router.patch('/:postId', async (req,res) => {
  try {
     const updatePost =  await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}})
     res.json(updatePost);
  } catch (err){
    res.json({ message: err })
  }
})

module.exports = router;
