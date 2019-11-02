import * as types from '../constants/ActionTypes';

const initState = {
    products: [
        {name: "Sledgehammer", price: 127.76 },
        {name: "Axe", price: 190.51 },
        {name: "Bandsaw",price: 562.14 },
        {name: "Chisel", price: 13.9 },
        {name: "Hacksaw", price: 19.45 }
    ],
    addedProducts:[],
    total: 0
}
const cartReducer = (state = initState, action) => {
      console.log(state, action);
    return state
}

export default cartReducer
