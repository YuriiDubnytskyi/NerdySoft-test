import React from 'react'
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import ItemPost from '../../components/ItemPost/ItemPost'
import { useHistory } from 'react-router-dom';
import {setPostItem} from '../../store/actions/actions'
import './ListPost.css'

const ListPost = (props) => {
    const history = useHistory()
    const setPost = (id)=>{
        props.setPostItem(id)
        history.push(`/post/:${id}`)
    }
    return (
        <div className='card-container'>
            {props.posts.map((el,i)=>{
                return <ItemPost data={el} id={el._id} key={el._id} click={setPost} time={new Date(el.date)}/>
            })}
        </div>
    )
}

const mapDispachToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({
            setPostItem
        },dispatch)
    }
}

export default connect(null,mapDispachToProps)(ListPost)
