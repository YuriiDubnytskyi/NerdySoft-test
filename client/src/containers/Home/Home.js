import React,{useState, useEffect} from 'react'
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import ListPost from '../ListPost/ListPost';
import Pagination from '../Pagination/Pagination';
import './Home.css'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {deleteValue,setValue,setPager,changeSearch} from '../../store/actions/actions'
import {Link} from 'react-router-dom'

const Home = (props) => {
    const [inputV,setInputV] = useState('')
    const [filterPosts, setFilterPosts] = useState(['q'])
    useEffect(()=>{
        if(props.inputValue === ''){
            setFilterPosts(props.posts)
        }else{
            setInputV(props.inputValue)
        }
    },[props.posts])
   
    const filterP = () =>{       
        const updatedList = props.posts.filter((item)=>{
          return item.title.toLowerCase().search(
            inputV.toLowerCase()) !== -1;
        });
        if(inputV === ''){
            setFilterPosts([...props.posts])
        }else{
            setFilterPosts(updatedList)
        }
        props.setValue(inputV)
        props.changeSearch(true)
        console.log(filterPosts)
    }
    const deleteInput = () => {
        setFilterPosts([...props.posts])
        props.deleteValue()
        setInputV('')
        props.changeSearch(true)
        props.setPager({})
    }

    return (
        <div className='main-container'>
            <div className='functional-container'>
                <Input change={setInputV} clickF={filterP} clickD={deleteInput} value={inputV}/>
                <div className='add-link'>
                    <Link  to='/add'><Button text='Add Post' click={()=>console.log()} class='add'></Button></Link>
                </div>
                
            </div>
            <div className='listPost'>
                <ListPost posts={props.postPage}/>
            </div>
            <div>
                <Pagination 
                    filter={filterPosts}  
                    pager={props.pager} 
                    setPager={props.setPager} 
                    inputValue={props.inputValue} 
                    search={props.search}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts:state.posts.post,
        postPage:state.posts.pageOfItems,
        pager:state.value.pager,
        inputValue:state.value.inputValue,
        search:state.value.search
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({
            deleteValue,setValue,setPager,changeSearch
        },dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Home)