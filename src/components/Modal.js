import "./Modal.css";
import ProductGallery from "./ProductGallery";

const Modal = ({activeImage, setActiveImage, handleMainImageClicked}) => {
    return (
        <div className="modal">
            <ProductGallery 
                activeImage={activeImage}
                setActiveImage={setActiveImage}
                handleMainImageClicked={handleMainImageClicked}
            />
        </div>
    )
};

export default Modal;
