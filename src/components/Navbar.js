import { BrowserRouter, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ addedProducts }) => {
    return (
        <header className="header">
            <BrowserRouter>
                <nav className="navbar">
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
                <div className="navbar-details">
                    <div className="navbar-details-cart-container" >
                        {addedProducts ? 
                            <>
                                <div className="navbar-details-cart-bubble" ></div>
                                <p className="navbar-details-cart-number" >{addedProducts}</p>
                            </> 
                        : ""}
                        <img src="./images/icon-cart.svg" alt="cart icon" className="navbar-details-cart" />
                    </div>
                    <img src="./images/image-avatar.png" alt="avatar" className="navbar-details-avatar" />
                </div>
            </BrowserRouter>
        </header>
    )
};

export default Navbar;
