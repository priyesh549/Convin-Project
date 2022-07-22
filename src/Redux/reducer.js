import {  SET_USER } from "./action";

const initialState = {}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case SET_USER:
            return {...state,...action.payload}
        default:
            return state;
    }
}