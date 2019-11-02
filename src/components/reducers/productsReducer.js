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
const productsReducer= (state = initState, action) => {

    if(action.type === types.ADD_TO_CART) {
          let product = state.products.find(product => product.name === action.name)
         const isProductInCart= state.addedProducts.find(product => product.name === action.name);

         product.quantity = (isProductInCart) ? (++ product.quantity) : 1;
         product.productTotal = product.price * product.quantity;
         let newTotal = state.total + product.price;

         return{
            ...state,
            ...(!isProductInCart && {addedProducts: [...state.addedProducts, product]}),
            productTotal : product.price * product.quantity,
            total : newTotal
        };
    } else if(action.type === types.ADD_PRODUCT) {
        let product = state.products.find(product=> product.name === action.name);
          product.quantity += 1;
          product.productTotal = (product.price * product.quantity);

          let newTotal = state.total + product.price;
          return {
              ...state,
              total: newTotal
          }
    } else if(action.type === types.REMOVE_PRODUCT){
        let product = state.products.find(product=> product.name === action.name);
        let new_products = state.addedProducts.filter(product=>product.name !== action.name);
            new_products.productTotal = (new_products.price * new_products.quantity);

            let isLastProduct = false;
            if(product.quantity === 1) {
                isLastProduct = true;
            }else {
                product.quantity -= 1;
                product.productTotal = (product.price * product.quantity);
            }

        let newTotal = state.total - product.price;
        return {
            ...state,
            ...(isLastProduct && {addedProducts: new_products}),
            total: newTotal
        }
    } else{
        return state
    }
}

export default productsReducer;
