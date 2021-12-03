import { BrowserRouter, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="header">
            <BrowserRouter>
                <div className="navbar">
                    <NavLink to="/" className="navbar-logo">
                        <img src="./images/logo.svg" alt="sneakers logo" />
                    </NavLink>
                    <nav>
                        <ul className="navbar-menu">
                            <li>
                                <NavLink to="/collections" className="navbar-menu-link">Collections</NavLink>
                            </li>
                            <li>
                                <NavLink to="/men" className="navbar-menu-link">Men</NavLink>
                            </li>
                            <li>
                                <NavLink to="/women" className="navbar-menu-link">Women</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className="navbar-menu-link">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="navbar-menu-link">Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="navbar-details">
                    <img src="./images/icon-cart.svg" alt="cart icon" className="navbar-details-cart" />
                    <img src="./images/image-avatar.png" alt="avatar" className="navbar-details-avatar" />
                </div>
            </BrowserRouter>
        </header>
    )
};

export default Navbar;
