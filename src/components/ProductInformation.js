import "./ProductInformation.css";

const ProductInformation = () => {
    return (
        
        <div>
            <h2>Sneaker Company</h2>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
		    durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className="price-offer">
                <p className="price-new" >$125.00</p>
                <p className="price-discount" >50%</p>
            </div>
            <div className="price-regular">
                <p className="price-old">$250.00</p>
                <div className="strike-through"></div>
            </div>
            <div className="buttons-container">
                <div className="btn-counter">
                    <img src="./images/icon-minus.svg" alt="minus" className="btn-counter-minus"/>
                    <p className="btn-counter-count">0</p>
                    <img src="./images/icon-plus.svg" alt="plus" className="btn-counter-plus" />
                </div>
                <button className="btn-add-to-cart">Add to cart</button>
            </div>
        </div>
    );
};

export default ProductInformation;
