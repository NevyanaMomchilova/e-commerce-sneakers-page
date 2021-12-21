import "./ProductInformation.css";

const ProductInformation = ({ productCounter, setProductCounter, handleBtnAddToCart }) => {
    
    
    const handleBtnMinus = () => {
        if(productCounter !== 0) {
            setProductCounter(productCounter - 1);
        }
    }

    const handleBtnPlus = () => {
        setProductCounter(productCounter + 1);
    }

    return (
        <div className="product-information">
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
                    <img 
                        src="./images/icon-minus.svg"
                        alt="minus"
                        className="btn-counter-minus"
                        onClick={handleBtnMinus}
                    />
                    <p className="btn-counter-count">{productCounter}</p>
                    <img 
                        src="./images/icon-plus.svg"
                        alt="plus"
                        className="btn-counter-plus"
                        onClick={handleBtnPlus}
                    />
                </div>
                <div 
                    className="btn-add-to-cart-container"
                    onClick={handleBtnAddToCart} >
                    <svg className="btn-add-to-cart-icon" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fill-rule="nonzero"/></svg>
                    <button className="btn-add-to-cart" >Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductInformation;
