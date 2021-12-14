import "./ProductGallery.css";

const ProductGallery = () => {
    return (
        <div className="product-gallery">
            <img src="./images/image-product-1.jpg" alt="sneakers one" className="product-gallery-main-image" />
            <div className="product-gallery-thumbnails">
                <img src="./images/image-product-1-thumbnail.jpg" alt="sneakers one" className="product-gallery-thumbnail" />
                <img src="./images/image-product-2-thumbnail.jpg" alt="sneakers two" className="product-gallery-thumbnail" />
                <img src="./images/image-product-3-thumbnail.jpg" alt="sneakers three" className="product-gallery-thumbnail" />
                <img src="./images/image-product-4-thumbnail.jpg" alt="sneakers four" className="product-gallery-thumbnail" />
            </div>
        </div>
    );
};

export default ProductGallery;
