import PropTypes from "prop-types";
import React, { useEffect } from "react";
import styles from "./PopupActivity.module.css";

interface PopupActivityProps {
	imageUrl: string;
	title: string;
	onClose: () => void;
}

const PopupActivity: React.FC<PopupActivityProps> = ({
	imageUrl,
	title,
	onClose,
}) => {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);

	return (
		<div className={styles.popupOverlay} onClick={onClose}>
			<div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
				<span className={styles.close} onClick={onClose}>
					&times;
				</span>
				<img src={imageUrl} alt={title} onClick={onClose} />
			</div>
		</div>
	);
};

PopupActivity.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default PopupActivity;
