import React from 'react';

function Navbar(props) {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand" href="index.html">
          <span className="logo-text">DRIP</span>
          <span className="logo-text2">INTL.</span>
          <span className="sr-only">(current)</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="index.html">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="product.html"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Shop
              </a>
            </li>
            <li className="cart">
              <a 
              className="cart-click"
              href="cart.html"
              >
              <img src="https://cdn0.iconfinder.com/data/icons/shopping-icons-5/100/Cart-512.png" alt="cart" height= "50px"></img>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div id="list-example" class="list-group">
        <a class="list-group-item list-group-item-action" href="#tops" onClick= {()=> props.onchange('tops')}>Tops</a>
        <a class="list-group-item list-group-item-action" href="#bottoms" onClick= {()=> props.onchange('bottoms')}>Bottoms</a>
        <a class="list-group-item list-group-item-action" href="#shoes" onClick= {()=> props.onchange('shoes')}>Shoes</a>
      </div>
    </div>
  );
}

export default Navbar;
