import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import ProductGallery from "./ProductGallery";
import ProductInformation from "./ProductInformation";
import Modal from "./Modal";
import ComingSoon from "./ComingSoon";
import NotFound from "./NotFound";

// Next step - components structure, favicon???

function App() {
	// used by ProductInformation and Navbar
	const [productCounter, setProductCounter] = useState(0);
	const [addedProducts, setAddedProducts] = useState(0);

	// used by ProductInformation
	const handleBtnAddToCart = () => {
        if (productCounter !== 0) {
            if (addedProducts === 0) {
                setAddedProducts(productCounter);
            } else {
                setAddedProducts(addedProducts + productCounter);
            }
            setProductCounter(0);
        }
    }

	// used by Navbar
	const [navbarSideMode, setNavbarSideMode] = useState(false);

	const handleBtnNavbarCloseOnClick = () => {
        setNavbarSideMode(!navbarSideMode);
    };

	const handleBtnDeleteAddedProducts = () => {
		if (addedProducts !== 0) {
			setAddedProducts(0);
		}
	}

	// used by ProductGallery and Modal
	const [activeImage, setActiveImage] = useState(1);
	const [mainImageClicked, setMainImageClicked] = useState(false);
	const handleMainImageClicked = () => {
		setMainImageClicked(!mainImageClicked);
	}
	
  	return (
		<BrowserRouter>
			<div className="App">
				<Navbar 
					navbarSideMode={navbarSideMode}
					handleBtnNavbarCloseOnClick={handleBtnNavbarCloseOnClick}
					addedProducts={addedProducts} 
					handleBtnDeleteAddedProducts={handleBtnDeleteAddedProducts} 
				/>
				<main>
					<Switch>
						<Route exact path="/">
							<ProductGallery
								activeImage={activeImage}
								setActiveImage={setActiveImage}
								handleMainImageClicked={handleMainImageClicked}
							/>
							<ProductInformation 
								productCounter={productCounter}
								setProductCounter={setProductCounter}
								handleBtnAddToCart={handleBtnAddToCart}
							/>
						</Route>
						<Route path="/collections">
							<ProductGallery
								activeImage={activeImage}
								setActiveImage={setActiveImage}
								handleMainImageClicked={handleMainImageClicked}
							/>
							<ProductInformation 
								productCounter={productCounter}
								setProductCounter={setProductCounter}
								handleBtnAddToCart={handleBtnAddToCart}
							/>
						</Route>
						<Route exact path="/men">
							<ComingSoon />
						</Route>
						<Route exact path="/women">
							<ComingSoon />
						</Route>
						<Route exact path="/about">
							<ComingSoon />
						</Route>
						<Route exact path="/contact">
							<ComingSoon />
						</Route>
						<Route>
							<NotFound />
						</Route>
					</Switch>
				</main>
				<footer>
					<div className="attribution">
						Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
						Coded by <a href="https://webcodebynevyana.netlify.app/" target="_blank" rel="noreferrer">Nevyana Momchilova</a>.
					</div>
				</footer>
				{mainImageClicked && 
				<Modal 
					handleMainImageClicked={handleMainImageClicked}
					activeImage={activeImage}
					setActiveImage={setActiveImage}
				/>}
				<div className={navbarSideMode ? "navbar-side-mode-background" : "hidden"}></div>
			</div>
		</BrowserRouter>
  	);
}

export default App;
