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
// deleteing a posts usign promises
router.delete('', )

module.exports = router;
