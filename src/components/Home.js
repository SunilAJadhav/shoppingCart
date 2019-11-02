import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addToCart } from './actions/cartActions';

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

    handleAddToCartClick = (name) => {
        this.props.addToCart(name);
    }

    renderProduct = (product, index) => {
        return(
            <ProductContainer key={'product'+ index}>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>${product.price}</ProductPrice>
                <button onClick={()=>{this.handleAddToCartClick(product.name)}}>add to cart</button>
            </ProductContainer>
        );
    }

    render() {

        return(
            <div>
               {
                    this.props.products.map((product, index) => this.renderProduct(product, index))
                }
            </div>
            )
    }

 }

const mapStateToProps = (state)=>{
    return {
      products: state.products
    }
  }
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (name) => {dispatch(addToCart(name))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);