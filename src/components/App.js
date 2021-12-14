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
      	<div className="attribution">
			Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
			Coded by <a href="https://webcodebynevyana.netlify.app/" target="_blank" rel="noreferrer">Nevyana Momchilova</a>.
      	</div>
    </div>
  );
}

export default App;
