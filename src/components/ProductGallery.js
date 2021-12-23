import "./ProductGallery.css";
import { useState } from "react";

const ProductGallery = ({ handleMainImageClicked }) => {
    const [activeImage, setActiveImage] = useState(1);

    return (
        <div className="product-gallery">
            <div className="product-gallery-main-image-container">
                <img 
                    src={`./images/image-product-${activeImage}.jpg`}
                    alt="sneakers one"
                    className="product-gallery-main-image"
                    onClick={handleMainImageClicked}
                />
                {/* Close Btn - Shown on Modal */}
                <svg 
                    onClick={handleMainImageClicked}
                    className="btn-modal-close"
                    width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill-rule="evenodd"/></svg>
                {/* Previous Btn - Shown on Modal */}
                <div 
                    onClick={() => {
                        if (activeImage === 1) {
                            setActiveImage(4);
                        } else {
                            setActiveImage(activeImage - 1);
                        }
                    }}
                    className="btn-modal-previous-container">
                    <svg className="btn-modal-previous" width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </div>
                {/* Next Btn - Shown on Modal */}
                <div 
                    onClick={() => {
                        if (activeImage === 4) {
                            setActiveImage(1);
                        } else {
                            setActiveImage(activeImage + 1);
                        }
                    }}
                    className="btn-modal-next-container">
                    <svg className="btn-modal-next" width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </div>
            </div>
            <div className="product-gallery-thumbnails">
                <div className={"product-gallery-thumbnail-border " + (activeImage === 1 ? "product-gallery-thumbnail-active-border" : "")}>
                    <img 
                        src="./images/image-product-1-thumbnail.jpg" 
                        alt="sneakers one" 
                        className={"product-gallery-thumbnail" + (activeImage === 1 ? " product-gallery-thumbnail-active" : "")}
                        onClick={() => {setActiveImage(1)}}
                    />
                </div>
                <div className={"product-gallery-thumbnail-border " + (activeImage === 2 ? "product-gallery-thumbnail-active-border" : "")}>
                    <img 
                        src="./images/image-product-2-thumbnail.jpg" 
                        alt="sneakers one" 
                        className={"product-gallery-thumbnail" + (activeImage === 2 ? " product-gallery-thumbnail-active" : "")}
                        onClick={() => {setActiveImage(2)}}
                    />
                </div>
                <div className={"product-gallery-thumbnail-border " + (activeImage === 3 ? "product-gallery-thumbnail-active-border" : "")}>
                    <img 
                        src="./images/image-product-3-thumbnail.jpg" 
                        alt="sneakers one" 
                        className={"product-gallery-thumbnail" + (activeImage === 3 ? " product-gallery-thumbnail-active" : "")}
                        onClick={() => {setActiveImage(3)}}
                    />
                </div>
                <div className={"product-gallery-thumbnail-border " + (activeImage === 4 ? "product-gallery-thumbnail-active-border" : "")}>
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
