import { useState } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ addedProducts, handleBtnDeleteAddedProducts }) => {
    const [cartIconClicked, setCartIconClicked] = useState(false);

    const handleCartIconOnClick = () => {
        setCartIconClicked(!cartIconClicked);
    };

    return (
        <header className="header">
            <BrowserRouter>
                <nav className="navbar">
                    <img src="./images/icon-menu.svg" alt="navbar hamburger" className="navbar-hamburger" />
                    <NavLink to="/" className="navbar-logo" >
                        <img src="./images/logo.svg" alt="sneakers logo" />
                    </NavLink>
                    <ul className="navbar-menu">
                        <li>
                            <NavLink to="/collections" className="navbar-menu-link" activeClassName="active-link" >Collections</NavLink>
                        </li>
                        <li>
                            <NavLink to="/men" className="navbar-menu-link" activeClassName="active-link" >Men</NavLink>
                        </li>
                        <li>
                            <NavLink to="/women" className="navbar-menu-link" activeClassName="active-link" >Women</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="navbar-menu-link" activeClassName="active-link" >About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="navbar-menu-link"activeClassName="active-link"  >Contact</NavLink>
                        </li>                            
                    </ul>   
                </nav>
                <div className="navbar-items">
                    {/* Cart Details */}
                    <div 
                        className={ cartIconClicked ?"navbar-item-cart-pop-up" 
                        : "hidden"}>
                        <h4 className="cart-pop-up-title">Cart</h4>
                        <div className="cart-pop-up-details">
                        {addedProducts ?
                            <>
                                    <div className="cart-pop-up-product">
                                        <img src="./images/image-product-1-thumbnail.jpg" alt="sneakers product"  className="cart-pop-up-product-image"/>
                                        <div className="cart-pop-up-product-text">
                                            <p>Fall Limited Edition Sneakers</p>
                                            <p>$125.00 x {addedProducts} <strong>${addedProducts * 125}.00</strong></p>
                                        </div>
                                        <img src="./images/icon-delete.svg" alt="delete button" className="cart-pop-up-product-delete" onClick={handleBtnDeleteAddedProducts} />
                                    </div>
                                
                                <button className="btn-cart-pop-up">Checkout</button>
                            </>
                        :
                            <>
                                <h4 className="cart-pop-up-empty">Your cart is empty.</h4>
                            </>
                        }
                        </div>
                    </div>
                    

                    {/* Cart Icon */}
                    <div
                        className="navbar-item-cart-icon-container"
                        onClick={handleCartIconOnClick} >
                        {addedProducts ? 
                            <>
                                <div className="navbar-item-cart-icon-bubble" ></div>
                                <p className="navbar-item-cart-icon-number" >{addedProducts}</p>
                            </> 
                        : ""}
                        <img src="./images/icon-cart.svg" alt="cart icon" className="navbar-item-cart-icon" />
                    </div>

                    {/* Cart Avatar */}
                    <img src="./images/image-avatar.png" alt="avatar" className="navbar-item-avatar" />
                </div>
            </BrowserRouter>
        </header>
    )
};

export default Navbar;
