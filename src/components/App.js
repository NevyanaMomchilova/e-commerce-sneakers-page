import "./App.css";
import Navbar from "./Navbar";
import ProductGallery from "./ProductGallery";
import ProductInformation from "./ProductInformation";

// Next step - components structure, favicon???

function App() {
  return (
    <div className="App">
		<Navbar />
		<main>
			<ProductGallery />
			<ProductInformation />
		</main>
		

		{/* Sneaker Company

		Fall Limited Edition Sneakers

		These low-profile sneakers are your perfect casual wear companion. Featuring a 
		durable rubber outer sole, they’ll withstand everything the weather can offer.

		$125.00
		50%
		$250.00

		0
		Add to cart */}
		
      	<div className="attribution">
			Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
			Coded by <a href="https://webcodebynevyana.netlify.app/" target="_blank" rel="noreferrer">Nevyana Momchilova</a>.
      	</div>
    </div>
  );
}

export default App;
