const express =  require('express')
const router = express.Router()
const Post = require('../models/postmodel')

// Get all the posted

router.get('/' ,async(req , res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }
    catch(err){
        res.json({message: err})
    }
})

// post all the Scraped data
router.post ('/' ,async(req ,res) => {
    const post = new Post({
        post : req.body.post, 
    });

    try {
        const SavedPost = await post.save()
        res.json(SavedPost);
    }
    catch(err) {
        res.json({message: error});
    }
});

router.get('/:postId' , async (req, res) =>{
    try{
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }
    catch(err){
        res.json({message: err});
    }
})


router.get('/:url' , async (req, res) =>{
    try{
        const post = await Post.find()
        if (res.json(post.url) == url){
            res.json(post)
        }
    }
    catch(err){
        res.json({message: err});
    }
})

router.delete('/:postId' , async (req, res) =>{
    try{
        const removedpost = await Post.remove({_id: req.params.postId});
        res.json(removedpost)
    }
    catch(err){
        res.json({message: err});
    }
})

module.exports =router;