import React, { useEffect, useState } from 'react'
import './ItemPost.css'

const ListPost = (props) => {
    const [time,setTime]=useState('')
    useEffect(()=>{
        setTime(new Date(props.data.date).toLocaleString())
    },[time])    
    
    return (
        <div>
            <div className='card'>
                <p className='card-title'>{props.data.title}</p>
                <p className='card-text'>{props.data.description}</p>               
                <button className='card-btn' onClick={()=>props.click(props.id)}>Read More</button>
                <p className='card-time'>{time}</p>
            </div>
        </div>
    )
}


export default ListPost