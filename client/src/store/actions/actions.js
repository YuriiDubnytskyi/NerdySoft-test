import * as actionTypes from './actionTypes';


export const setPageOfItems = (data) =>{
    return {
        type:actionTypes.SET_PAGE_OF_ITEMS,
        data:data
    }
}
export const setPager = (pager) =>{
    return {
        type:actionTypes.SET_PAGER,
        pager
    }
}
export const setPost = (data) =>{
    
    return {
        type:actionTypes.SET_POSTS,
        data
    }
}
export const setValue = (inputValue) =>{
    return {
        type:actionTypes.SET_VALUE,
        inputValue
    }
}
export const deleteValue = () =>{
    return {
        type:actionTypes.DELETE_VALUE,
        
    }
}
export const changeSearch = (data) =>{
    return {
        type:actionTypes.CHANCHE_SEARCH,
        data
    }
}
export const setPostItem = (data) =>{
    return {
        type:actionTypes.SET_POST_ITEM,
        data
    }
}
export const deletePostItem = () =>{
    return {
        type:actionTypes.DELETE_POST_ITEM,
       
    }
}