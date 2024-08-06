import React, { useEffect } from "react";
import FocusLock from "react-focus-lock";
import { Organization } from "../../data/organizations";
import styles from "./OrganizationCheckPopup.module.css";
import PopupSeven from "./PopupSeven";
// import PopupFive from "./PopupFive";
// import PopupSix from "./PopupSix.";
// import PopupFour from "./PopupFour";
// import PopupTwo from "./PopupTwo";
// import PopupThree from "./PopupThree";
// import PopupOne from "./PopupOne";

interface OrganizationCheckPopupProps {
	isOpen: boolean;
	onClose: () => void;
	organization: Organization | null;
}

const OrganizationCheckPopup: React.FC<OrganizationCheckPopupProps> = ({
	isOpen,
	onClose,
	organization,
}) => {
	useEffect(() => {
		const mainElement = document.getElementsByTagName("main")[0];
		if (isOpen) {
			document.body.style.overflow = "hidden";
			if (mainElement) {
				mainElement.setAttribute("aria-hidden", "true");
			}
		} else {
			document.body.style.overflow = "auto";
			if (mainElement) {
				mainElement.removeAttribute("aria-hidden");
			}
		}

		return () => {
			document.body.style.overflow = "auto";
			if (mainElement) {
				mainElement.removeAttribute("aria-hidden");
			}
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<div className={styles.popupOverlay}>
			<FocusLock>
				<div className={styles.popupContent} aria-modal="true" role="dialog">
					<button
						className={styles.closeButton}
						onClick={onClose}
						aria-label="Close popup"
					>
						<span className={styles.cross}></span>
					</button>
					{organization ? (
						// <PopupOne organization={organization} />
						// <PopupTwo />
						// <PopupThree />
						// <PopupFour />
						// <PopupFive />
						// <PopupSix />
						<PopupSeven onClose={onClose} />
					) : (
						<h2>Организация не найдена</h2>
					)}
				</div>
			</FocusLock>
		</div>
	);
};

export default OrganizationCheckPopup;
