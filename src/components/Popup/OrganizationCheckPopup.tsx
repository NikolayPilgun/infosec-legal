import React, { useEffect, useState } from "react";
import FocusLock from "react-focus-lock";
import { Organization } from "../../data/organizations";
import styles from "./OrganizationCheckPopup.module.css";
import PopupFive from "./PopupFive";
import PopupFour from "./PopupFour";
import PopupOne from "./PopupOne";
import PopupSeven from "./PopupSeven";
import PopupSix from "./PopupSix";
import PopupThree from "./PopupThree";
import PopupTwo from "./PopupTwo";

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
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState(() => {
		const savedData = localStorage.getItem("formData");
		return savedData
			? JSON.parse(savedData)
			: {
					inn: organization?.inn || "",
					ogrn: organization?.ogrn || "",
					shortName: organization?.shortName || "",
					fullName: organization?.fullName || "",
					employeesCount: "",
					email: "",
					phone: "",
					storageTypes: {
						paper: false,
						electronic: false,
					},
					digitalSignatureUses: {
						tenders: false,
						documents: false,
						reporting: false,
						notUsed: false,
					},
					securityAssessment: {
						yes: false,
						no: false,
						unknown: false,
					},
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  };
	});

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
			document
				.getElementsByTagName("main")[0]
				?.setAttribute("aria-hidden", "true");
		} else {
			document.body.style.overflow = "auto";
			document.getElementsByTagName("main")[0]?.removeAttribute("aria-hidden");
		}
		return () => {
			document.body.style.overflow = "auto";
			document.getElementsByTagName("main")[0]?.removeAttribute("aria-hidden");
		};
	}, [isOpen]);

	useEffect(() => {
		localStorage.setItem("formData", JSON.stringify(formData));
	}, [formData]);

	const handleNext = () => {
		setStep((prevStep) => Math.min(prevStep + 1, 7));
	};

	const handleBack = () => {
		setStep((prevStep) => Math.max(prevStep - 1, 1));
	};

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
						<>
							{step === 1 && (
								<PopupOne
									formData={formData}
									setFormData={setFormData}
									handleNext={handleNext}
								/>
							)}
							{step === 2 && (
								<PopupTwo
									formData={formData}
									setFormData={setFormData}
									handleNext={handleNext}
									handleBack={handleBack}
								/>
							)}
							{step === 3 && (
								<PopupThree
									formData={formData}
									setFormData={setFormData}
									handleNext={handleNext}
									handleBack={handleBack}
								/>
							)}
							{step === 4 && (
								<PopupFour
									formData={formData}
									setFormData={setFormData}
									handleNext={handleNext}
									handleBack={handleBack}
								/>
							)}
							{step === 5 && (
								<PopupFive handleNext={handleNext} handleBack={handleBack} />
							)}
							{step === 6 && (
								<PopupSix
									formData={formData}
									setFormData={setFormData}
									handleNext={handleNext}
									handleBack={handleBack}
								/>
							)}
							{step === 7 && <PopupSeven onClose={onClose} />}
						</>
					) : (
						<h2>Организация не найдена</h2>
					)}
				</div>
			</FocusLock>
		</div>
	);
};

export default OrganizationCheckPopup;
