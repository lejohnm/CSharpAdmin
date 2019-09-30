import React from 'react';
import './App.css';




class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    // fetchProducts() {
    //     fetch(`http://localhost:3002/api/products`)
    //     .then(res => res.json())
    //     .then(products => this.setState({products}, () => console.log('Products fetched...', 
    //     products)))
    // };
    fetchProducts = async () => {
        const fetchData = await fetch('http://localhost:3002/api/products')
        const response = await fetchData.json()
        console.log(response);
        this.setState({products: response})
    }
    componentDidMount = () => {
        this.fetchProducts() 
    }
    
    render() {
    console.log(this.state.products);
        return (


            <>
                <div className="card-container">
                    {
                        this.state.products.filter(
                            product => product.product_type === this.props.activeproduct
                        ).map(clothing => {
                            return (
                                <div className="card">
                                    <img className="card-img-top" src={clothing.product_image} alt="#" />
                                    <div className="card-body">
                                        <p className="card-text">{clothing.product_name}</p>
                                        <p className="card-text">{clothing.product_price}</p>
                                        <p className="card-text">{clothing.product_description}</p>
                                        <p className="cart-button">
                                            <img src="https://cdn0.iconfinder.com/data/icons/shopping-icons-5/100/Cart-512.png" alt="cartInNav" height="50px"></img>
                                        </p>

                                    </div>
                                </div>
                            )
                        }
                        )
                     }
                </div>
            </>
        );

    }
}

export default Product;


