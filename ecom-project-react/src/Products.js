import React from 'react';
import products from './Ecom.sql';
import './App.css';


function Product(props) {
    console.log(props)

// componentDidMount() {
//     fetch('http://localhost:5000/api/products')
//     .then(res => res.json())
//     .then(products => this.setState({products}, () => console.log('Products fetched...', 
//     products)))
// };


    return (
        
<>
        <div className="card-container">
            {
                products.Products.filter(
                    product => product.productType === props.activeProduct
                ).map(clothing =>


                    <div className="card">
                        <img className="card-img-top" src={clothing.productImage} alt="#" />
                        <div className="card-body">
                            <p className="card-text">{clothing.productName}</p>
                            <p className="card-text">{clothing.productPrice}</p>
                            <p className="card-text">{clothing.productDescription}</p>
                            <p className="cart-button"> 
                            <img src="https://cdn0.iconfinder.com/data/icons/shopping-icons-5/100/Cart-512.png" alt="cartInNav" height= "50px"></img>
                            </p>

                        </div>
                    </div>

                )
            }
        </div>
       </> 
    )
}



export default Product;