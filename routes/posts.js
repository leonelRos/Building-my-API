var express = require('express');
const router = express.Router();
const Post = require('../models/Post');
// request all the post
router.get('/', (req, res) => {
  // res.send('we are in posts')
  const posts = new Post({

  })
});
// this submit a post
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
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err){
    res.json({ message:err })
  }
})
module.exports = router;
