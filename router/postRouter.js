const { Router } = require('express');
const {create,postUpdate,postDelete,getAllPost,getSimilar,filterPost} = require('../services/postService.js');
//validation to do

const router = Router();

router.post('/create', async (req, res) => {

    const similar = await getSimilar(req.body.title,req.body.description)
    const post = {
        title:req.body.title,
        description:req.body.description,
        date:req.body.date,
        similar:similar
    }
    const result =  await create(post).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.status(400).json('error has occured');
        }
    }).then(()=>{
        console.log('added')
        filterPost()
    })
})


router.put("/updatePost", async (req, res)=>{
    const similar = await getSimilar(req.body.title,req.body.description,req.body.id)
    const title = req.body.title;
    const description = req.body.description;
    const id = req.body.id;
    const postUpdating = {title,description,similar};

    const result = await postUpdate(id,postUpdating).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({comment:"Error",status:500});
        }
    })
});

router.delete("/deletePost/:id", function(req, res){
    const id = req.params.id;
    const result =  postDelete(id).then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({comment:"Error",status:500});
        }
    }).then(()=>{
        console.log('deleted')
        filterPost()
    })
});

router.get("/getAll", function(req, res){
    const result =  getAllPost().then((r)=>{
        if (r) {
            res.json(r);
        } else {
            res.json({comment:"Error",status:500});
        }
    })
});

module.exports = router;