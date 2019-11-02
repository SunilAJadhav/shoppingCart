import * as types from '../constants/ActionTypes';

export const addToCart= (name)=>{
    return{
        type: types.ADD_TO_CART,
        name
    }
}

export const subtractQuantity=(name)=>{
    return{
        type: types.REMOVE_PRODUCT,
        name
    }
}

export const addProduct=(name)=>{
    return{
        type: types.ADD_PRODUCT,
        name
    }
}
