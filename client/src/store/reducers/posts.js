import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    post:[],
    pageOfItems:[],
    postItem:[]
};

const filterItems=(id,state)=>{
    return state.post.filter(el=>el._id===id)
}

const post = (state = initialState,action)=>{
    switch (action.type){
        case actionTypes.SET_POSTS:
            return updateObject(state,{
                post:[...action.data]
            })
        case actionTypes.SET_POST_ITEM:
            return updateObject(state,{
                postItem:filterItems(action.data,state)
            })
        case actionTypes.DELETE_POST_ITEM:
            return updateObject(state,{
                postItem:[]
            })
        case actionTypes.SET_PAGE_OF_ITEMS:
            return updateObject(state,{
                pageOfItems:[...action.data]
            });
        default: {
            return state
        }
    }
}

export default post