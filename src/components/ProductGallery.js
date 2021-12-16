import "./ProductGallery.css";
import { useState } from "react";

const ProductGallery = () => {
    const [activeImage, setActiveImage] = useState(1);

    return (
        <div className="product-gallery">
            <img src={`./images/image-product-${activeImage}.jpg`} alt="sneakers one" className="product-gallery-main-image" />
            <div className="product-gallery-thumbnails">
                <div className={(activeImage === 1 ? " product-gallery-thumbnail-active-border" : "")}>
                    <img 
                        src="./images/image-product-1-thumbnail.jpg" 
                        alt="sneakers one" 
                        className={"product-gallery-thumbnail" + (activeImage === 1 ? " product-gallery-thumbnail-active" : "")}
                        onClick={() => {setActiveImage(1)}}
                    />
                </div>
                <div className={(activeImage === 2 ? " product-gallery-thumbnail-active-border" : "")}>
                    <img 
                        src="./images/image-product-2-thumbnail.jpg" 
                        alt="sneakers one" 
                        className={"product-gallery-thumbnail" + (activeImage === 2 ? " product-gallery-thumbnail-active" : "")}
                        onClick={() => {setActiveImage(2)}}
                    />
                </div>
                <div className={(activeImage === 3 ? " product-gallery-thumbnail-active-border" : "")}>
                    <img 
                        src="./images/image-product-3-thumbnail.jpg" 
                        alt="sneakers one" 
                        className={"product-gallery-thumbnail" + (activeImage === 3 ? " product-gallery-thumbnail-active" : "")}
                        onClick={() => {setActiveImage(3)}}
                    />
                </div>
                <div className={(activeImage === 4 ? " product-gallery-thumbnail-active-border" : "")}>
                    <img 
                        src="./images/image-product-4-thumbnail.jpg" 
                        alt="sneakers one" 
                        className={"product-gallery-thumbnail" + (activeImage === 4 ? " product-gallery-thumbnail-active" : "")}
                        onClick={() => {setActiveImage(4)}}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;
