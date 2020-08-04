import React, { useEffect, useState } from 'react'
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {changeSearch,setPost,setPostItem,deleteValue} from '../../store/actions/actions'
import { useHistory } from 'react-router-dom';
import {updatePost,getPosts,deletePost} from '../../api/api'
import './ItemProfile.css'

const ItemProfile = (props) => {
    
    const history = useHistory()
    const [saving,setSaving] = useState({saving:false,coment:''})
    const [deleting,setDeleting] = useState({deleting:false,coment:''})
    const [updateSwitch,setUpdateSwitch] = useState(false)
    const [title,setTitle] = useState('')
    const [description,setdescription] = useState('')
    const [titleU,setTitleU] = useState('')
    const [descriptionU,setdescriptionU] = useState('')
    
    useEffect(()=>{
        if(props.item === undefined){
            history.push('/404')
        }else{
            props.changeSearch(false)
            setTitleU(props.item.title)
            setTitle(props.item.title)
            setdescription(props.item.description)
            setdescriptionU(props.item.description)
            setUpdateSwitch(false)
            setDeleting({deleting:false,coment:''})
            setSaving({saving:false,coment:''})
        }
    },[props.item])

    const cancel = () =>{
        setTitleU(title)
        setdescriptionU(description)
        setUpdateSwitch(false)
    }

    const save = () =>{
        if(titleU !== '' || descriptionU !== ''){
           setSaving({saving:true,coment:'saving'})
            updatePost({id:props.item._id,title:titleU,description:descriptionU}).then(()=>{           
                getPosts().then((res)=>{
                    props.setPost([...res.data])
                    props.changeSearch(true)
                    setSaving({saving:true,coment:'Save'})
                })           
            }) 
        }else{
            alert('Title or Description Empty')
        }
        
        
    }
    const deleteItem = () =>{
        setDeleting({deleting:true,coment:'deleting'})
        deletePost(props.item._id).then(()=>{
            getPosts().then((res)=>{
                props.setPost([...res.data])
                props.changeSearch(true)
                setDeleting({deleting:true,coment:'Deleted'})
                props.deleteValue()
            })  
        })
        
    }
    const toHome = () =>{
        props.changeSearch(true)      
        history.push('/')      
    }
    const readSimilar = async (id) =>{
        await props.setPostItem(id)
        await history.push('/post/:'+id)
    }

    return (
        <div className='post-container'>

            {saving.saving || deleting.deleting?

            <div className='post-comment'><p>{saving.coment}{deleting.coment}</p></div>:

            <div className='post-info'>
                <h2>Post</h2>
                <p className='post-info_title'>Title</p>
                <p className='post-info_title-text'>{titleU}</p>
                {updateSwitch?
                <input value={titleU} onChange={(e)=>setTitleU(e.target.value)}/>
                :
                <></>
                }
                <p className='post-info_description'>Description</p>
                <p className='post-info_description-text'>{descriptionU}</p>
                {updateSwitch?
                <textarea rows={15} cols={60} className='post-info_textarea' value={descriptionU} onChange={(e)=>setdescriptionU(e.target.value)}/>
                :
                <></>
                }
            </div>
            }

            <div className='similar-post'>
                {saving.saving || deleting.deleting?
                
                <></>:
                
                props.item === undefined || props.item.similar.length === 0?<></>:
                <>
                <h2>Similar Posts</h2>
                {props.item.similar.map((el)=>{
                    console.log(el)
                    return (
                        <div className='similar-post_item'>
                            <p className='similar-post_title'>{el.title}</p>
                            <button className='similar-post_btn' onClick={()=>readSimilar(el.id)}>Read More</button>
                        </div>
                    )
                })}
                </>
                }

            </div>

            <div className='item-group-btn'>
                
                {
                    saving.saving||deleting.deleting?
                    
                    <></>:

                    updateSwitch?
                    <>
                    <button className='item-group-btn--save' onClick={save}>Save</button>
                    <button className='item-group-btn--cancel' onClick={cancel}>Cancel</button>
                    </>
                    :
                    <button className='item-group-btn--update' onClick={()=>setUpdateSwitch(true)}>Update</button>
                
                }

                {saving.saving||deleting.deleting?<></>:
                <button className='item-group-btn--delete' onClick={deleteItem}>Delete</button>
                }
                
                <button className='item-group-btn--home' onClick={toHome}>Home</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        item:state.posts.postItem[0]
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({
            changeSearch,setPost,setPostItem,deleteValue
        },dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(ItemProfile)