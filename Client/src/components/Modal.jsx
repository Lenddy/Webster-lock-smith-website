import "../styles/modal.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// const Modal = ({ isOpen, onClose, onConFirm, data, loading, setIsOpen }) => {
const Modal = ({ isOpen, onClose, data }) => {
	return (
		<div className="modal-container" onClick={onClose}>
			<div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					{/* Material Request Update */}
					<div className="modal-content-header">
						<div className="modal-content-top-info-title-wrapper">title</div>
					</div>

					<button className="modal-close" onClick={onClose}>
						✖
					</button>
				</div>

				<div className="modal-content">
					<div className="modal-content-info">
						<p>"content"</p>
						<p>"content"</p>
						<p>"content"</p>
						<p>"content"</p>
						<p>"content"</p>
					</div>
				</div>

				<div className="modal-bottom">
					<div className="model-bottom-wrapper">
						{" "}
						<button> close</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
