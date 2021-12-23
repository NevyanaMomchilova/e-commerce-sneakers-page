import "./App.css";
import { useState } from "react";
import Navbar from "./Navbar";
import ProductGallery from "./ProductGallery";
import ProductInformation from "./ProductInformation";
import Modal from "./Modal";

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
    <div className="App">
		<Navbar addedProducts={addedProducts} handleBtnDeleteAddedProducts={handleBtnDeleteAddedProducts} />
		<main>
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
		</main>
      	<div className="attribution">
			Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
			Coded by <a href="https://webcodebynevyana.netlify.app/" target="_blank" rel="noreferrer">Nevyana Momchilova</a>.
      	</div>
		{mainImageClicked && 
		<Modal 
			handleMainImageClicked={handleMainImageClicked}
			activeImage={activeImage}
			setActiveImage={setActiveImage}
		/>}
    </div>
  );
}

export default App;
