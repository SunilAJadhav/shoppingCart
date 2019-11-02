import React, { Component } from 'react';
import styled from 'styled-components';

const ProductContainer = styled.div`
    display: flex;
    width: 70%;
    align-items: center;
    margin: 0 auto;
    padding: 20px 0;
    border-bottom: 1px solid #FFFFFF;
`;

const ProductName = styled.h2`
    width: 33%;
`;

const ProductPrice = styled.h3`
   width: 33%;
`;

 class Home extends Component {

    handleAddToCartClick = () => {
        console.log('handle click....');
    }

    renderProduct = (product, index) => {
        return(
            <ProductContainer key={'product'+ index}>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>${product.price}</ProductPrice>
                <button onClick={()=>{this.handleAddToCartClick()}}>add to cart</button>
            </ProductContainer>
        );
    }

    render() {

        const products = [
            {name: "Sledgehammer", price: 127.76 },
            {name: "Axe", price: 190.51 },
            {name: "Bandsaw",price: 562.14 },
            {name: "Chisel", price: 13.9 },
            {name: "Hacksaw", price: 19.45 }
        ];

        return(
            <div>
               {
                    products.map((product, index) => this.renderProduct(product, index))
                }
            </div>
            )
    }

 }

export default Home;