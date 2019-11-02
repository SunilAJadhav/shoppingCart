import React, { Component } from 'react';

 class Home extends Component {

    handleClick = () => {
        console.log('handle click....');
    }

    renderProduct = (product, index) => {
        return(
            <div key={'product'+ index}>
                <div>
                    <h2>{product.name}</h2>
                    <h3>${product.price}</h3>
                    <button onClick={()=>{this.handleAddToCartClick()}}>add to cart</button>
                </div>
            </div>
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