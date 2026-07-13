import "../styles/modal.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ATTRIBUTIONS } from "../utilities/attributions";

// const Modal = ({ isOpen, onClose, onConFirm, data, loading, setIsOpen }) => {
const Modal = ({ isOpen, onClose, data }) => {
	return (
		<div className="modal-container" onClick={onClose}>
			<div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
				<div className="modal-header">
					{/* Material Request Update */}
					<div className="modal-content-header">
						<div className="modal-content-top-info-title-wrapper">
							<h4>Attributions</h4>
						</div>
					</div>

					<button className="modal-close" onClick={onClose}>
						✖
					</button>
				</div>

				<div className="modal-content">
					<div className="modal-content-info">
						{ATTRIBUTIONS.flatMap((a, i) => (
							<div className="modal-content-wrapper" key={i}>
								<h5 className="attrbution-title" key={a}>
									{a.title}
								</h5>
								{a.attributions.flatMap((attribute, idx) => (
									<div className="attribution-info-contrainer" key={idx}>
										<h3 className="attribution-name">{attribute.name}</h3>
										<ul className="attribution-links-container">
											{attribute.links.map((link, linkIndex) => (
												<li className="attribution-link" key={linkIndex}>
													<p>{link}</p>
												</li>
											))}
										</ul>
									</div>
								))}
								{/* {
								a.attributions.map
								
								} */}
								<p className="attrbution-title "> </p>
							</div>
						))}
						{/* <p>"content"</p>
						<p>"content"</p>
						<p>"content"</p>
						<p>"content"</p>
						<p>"content"</p> */}
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
