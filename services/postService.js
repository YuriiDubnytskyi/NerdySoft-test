const postSchema = require("../model/posts")

const create = async (data) => {
    const Post = new postSchema(data)
    let promise = new Promise((res,rej)=>{
        Post.save(function(err,post){
            if(err) return console.log(err);
            res(post)
        })
    }) 
    return await promise
}


const postUpdate = async (id,postUpdating) => {
    let promise = new Promise((res,rej)=>{
        const Post = postSchema
        Post.findOneAndUpdate({_id:id},postUpdating,{new:true , useFindAndModify: false},function(err,post){
            if(err) return console.log(err);
            res(post)
        })
    }) 
    return await promise
}

const postDelete = async (id) => {
    let promise = new Promise((res,rej)=>{
        const Post = postSchema
        Post.findByIdAndDelete(id, function(err, post){ 
            if(err) return console.log(err);
            res(post);
        });
    }) 
    return await promise
}

const getAllPost = async () => {
    let promise = new Promise((res,rej)=>{
        const Post = postSchema
        Post.find({}, function(err, posts){ 
            if(err) return console.log(err);
            res(posts);
        });
    }) 
    return await promise
}
const filterSimilar = (title,description,data,id = '') =>{
    let arr = []
    let t = title.split(' ').map(el=>el.toLowerCase())
    let d = description.split(' ').map(el=>el.toLowerCase())
    let check =0
    if(data.lenght !== 0){
        for(let i = 0;i<data.length;i++){
            
            let tData = data[i].title.split(' ').map(el=>el.toLowerCase())
            let dData = data[i].description.split(' ').map(el=>el.toLowerCase())
            let tSet = new Set([...t,...tData])
            let dSet = new Set([...d,...dData])
            if(tSet.size !== t.length+tData.length && dSet.size !== d.length+dData.length && id.toString() !== data[i]._id.toString()){
                check++
                arr.push({id:data[i]._id,title:data[i].title})
            }
            if(check === 3){
                check=0
                break
            }
        }
    }
    return arr
}
const getSimilar = async (title,description,id) =>{
    let array = await getAllPost()
    let similarArr = await filterSimilar(title,description,array,id)
    return similarArr
}

module.exports = {create,postUpdate,postDelete,getAllPost,getSimilar}