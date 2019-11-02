import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
        addProduct,
        subtractQuantity
    } from './actions/cartActions';

const CartContent = styled.div`
    display: flex;
    width: 80%;
    align-items: center;
    margin: 0 auto;
    padding: 20px 0;
    border-bottom: 1px solid #FFFFFF;
`;

const ProductName = styled.h2`
    width: 20%;
`;

const ProductPrice = styled.h3`
   width: 20%;
`;

const Buttons = styled.div`
   width: 20%;
`;

const Button = styled.button`
    border: 0;
    cursor: pointer;
    width: 25px;
    height: 25px;
    color: #b7b7b7;
    font-weight: bold;
    font-size: 20px;
    margin-right: 25px;
    background-color: #000;
`

class Cart extends Component{

    handleAddQuantity = (name)=>{
        this.props.addProduct(name);
    }

    getProductTotal = (product)=>{
        return (product.isHeader)? product.productTotal : product.productTotal.toFixed(2);
    }

    handleSubtractQuantity = (name)=>{
        this.props.subtractQuantity(name);
    }

    renderProductCart = (product, index) => {
        console.log(product);
        return(
            <CartContent key={'product'+index}>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>${product.price}</ProductPrice> 
                <ProductPrice>{product.quantity}</ProductPrice>
                <ProductPrice>{this.getProductTotal(product)}</ProductPrice>
                <Buttons>
                {!product.isHeader &&
                <Button onClick={()=>{this.handleSubtractQuantity(product.name)}}>-</Button>
                }
                {!product.isHeader && 
                <Button onClick={()=>{this.handleAddQuantity(product.name)}}>+</Button>
                }
                </Buttons>
            </CartContent>
        );
    }


    render(){

        if(this.props.products.length < 1){
            return(<h2>Please add products to cart from Home tab</h2>)
        }

        const cartHeader = {
            name: 'Product name',
            price: 'Price',
            quantity: 'Quantity',
            productTotal: 'Total',
            isHeader: true
        }

       return(
            <div className="container">
                <div className="cart">
                    <h2>Your order list:</h2>
                    <div>
                        {
                        this.renderProductCart(cartHeader, -1)
                        }
                        {
                            this.props.products.map((product, index) => this.renderProductCart(product, index))
                        }
                    </div>
                    </div>
                <h3><b>Total: $ {this.props.total.toFixed(2)}</b></h3>
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        products: state.addedProducts,
        total: state.total
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        addProduct: (name)=>{dispatch(addProduct(name))},
        subtractQuantity: (name)=>{dispatch(subtractQuantity(name))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
