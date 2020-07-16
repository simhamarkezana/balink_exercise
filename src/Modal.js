import React from "react";
import "./style.css";
const Modal = ({ onClose, show, children }) => {

    return (
        <div id="myModal" className={show ? "modal db" : "modal dn"}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                {children}
            </div>

        </div>
    );
};

export default Modal;