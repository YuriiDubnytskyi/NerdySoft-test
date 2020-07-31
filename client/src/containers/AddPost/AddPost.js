import React,{useState, useEffect} from 'react'
import './AddPost.css'
import {createPost,getPosts} from '../../api/api'
import { useHistory } from 'react-router-dom';
import {setPost,changeSearch} from '../../store/actions/actions'
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import Button from '../../components/Button/Button'

const AddPost = (props) => {
    const history = useHistory()
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')     
    const AddPost = () =>{
        if(title === '' || description === ''){
            alert('Title or Description Empty')
        }else{
            const post = {title,description,date:Date.parse(new Date())}
            createPost(post).then(()=>{
                getPosts().then((res)=>{
                    props.setPost([...res.data])
                    props.changeSearch(true)
                    history.push('/')
                })
            })
        }
    }
    const Cancel = () => {
        history.push('/')
    }
    return (
        <div className='add-post_container'>
            <div className='new-post'>
                <h2>Add New Post</h2>
                <p className='new-pots_title'>Title</p>
                <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <p className='new-post_description'>Description</p>
                <textarea rows={20} cols={30} value={description} onChange={(e)=>setDescription(e.target.value)}/>
                
            </div>
            <div className='see-post'>
                <h2>How it will look like</h2>
                <div className='card'>
                    <p className='card-title'>Title</p>
                    <p className='card-title1'>{title}</p>
                    <p className='card-text1'>Description</p>
                    <p className='card-text'>{description}</p>
                    <button className='card-btn1'>Read More</button>       
                </div>
            </div>
            <div className='btn-container'>
                <Button click={()=>AddPost()} class='post'  text='Add'/>
                <Button click={()=>Cancel()} class='post' text='Cancel'/>
            </div>
        </div>
    )
}
const mapDispachToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({
            setPost,changeSearch
        },dispatch)
    }
  }
  
export default connect(null,mapDispachToProps)(AddPost)
