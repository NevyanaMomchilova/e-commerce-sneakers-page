import "./Modal.css";
import ProductGallery from "./ProductGallery";

const Modal = ({handleMainImageClicked}) => {
    return (
        <div className="modal">
            <ProductGallery handleMainImageClicked={handleMainImageClicked} />
        </div>
    )
};

export default Modal;
