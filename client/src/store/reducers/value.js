import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    pager:1,
    inputValue:'',
    search:true
};

const post = (state = initialState,action)=>{
    switch (action.type){
        case actionTypes.SET_PAGER:
            return updateObject(state,{
                pager:action.pager
            });
        case actionTypes.SET_VALUE:
            return updateObject(state,{
                inputValue:action.inputValue
            });
        case actionTypes.DELETE_VALUE:
            return updateObject(state,{
                inputValue:''
            });
        case actionTypes.CHANCHE_SEARCH:
            return updateObject(state,{
                search:action.data
            });
        default: {
            return state
        }
    }
}

export default post