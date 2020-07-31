import axios from 'axios'

export const createPost = (post) => axios.post("/api/post/create",post).then((res) => res)

export const updatePost = (postData) => axios.put("/api/post/updatePost",postData).then((res) => res)

export const deletePost = (id) => axios.delete("/api/post/deletePost/"+id).then((res) => res)

export const getPosts = () => axios.get("/api/post/getAll").then((res)=>res)
