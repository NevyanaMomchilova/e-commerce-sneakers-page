import "./App.css";
import { useState } from "react";
import Navbar from "./Navbar";
import ProductGallery from "./ProductGallery";
import ProductInformation from "./ProductInformation";

// Next step - components structure, favicon???

function App() {
	const [productCounter, setProductCounter] = useState(0);
	const [addedProducts, setAddedProducts] = useState(0);

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

	const handleBtnDeleteAddedProducts = () => {
		if (addedProducts !== 0) {
			setAddedProducts(0);
		}
	}
	
  	return (
    <div className="App">
		<Navbar addedProducts={addedProducts} handleBtnDeleteAddedProducts={handleBtnDeleteAddedProducts} />
		<main>
			<ProductGallery />
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
    </div>
  );
}

export default App;
