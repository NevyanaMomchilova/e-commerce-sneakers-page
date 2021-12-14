import "./ProductInformation.css";

const ProductInformation = () => {
    return (
        
        <div>
            <h2>Sneaker Company</h2>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
		    durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <p>$125.00<span>50%</span></p>
            <p>$250.00</p>
            <div>
                <button>-</button>
                <p>0</p>
                <button>+</button>
            </div>
            <button>Add to cart</button>
        </div>
    );
};

export default ProductInformation;
