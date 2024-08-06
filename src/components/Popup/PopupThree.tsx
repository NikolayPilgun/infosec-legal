import React from "react";
import Popup1 from "../../assets/Popup/popup1.svg";
import Popup2 from "../../assets/Popup/popup2.svg";
import Popup3 from "../../assets/Popup/popup3.svg";
import PopupAr from "../../assets/Popup/popupAr.svg";
import PopupG from "../../assets/Popup/popupG.svg";
import popupYes from "../../assets/Popup/popupYes.svg";
import styles from "./PopupThree.module.css";

interface StorageTypes {
	paper: boolean;
	electronic: boolean;
}

interface DigitalSignatureUses {
	tenders: boolean;
	documents: boolean;
	reporting: boolean;
	notUsed: boolean;
}

interface FormData {
	storageTypes: StorageTypes;
	digitalSignatureUses: DigitalSignatureUses;
}

interface PopupThreeProps {
	formData: FormData;
	setFormData: React.Dispatch<React.SetStateAction<FormData>>;
	handleNext: () => void;
	handleBack: () => void;
}

const PopupThree: React.FC<PopupThreeProps> = ({
	formData,
	setFormData,
	handleNext,
	handleBack,
}) => {
	const handleInputChange =
		(
			field: keyof StorageTypes | keyof DigitalSignatureUses,
			type: keyof FormData
		) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setFormData((prevState) => ({
				...prevState,
				[type]: { ...prevState[type], [field]: e.target.checked },
			}));
		};

	const steps = [
		{
			img1: popupYes,
			img2: Popup1,
			description: "Заполните онлайн-форму - вам не нужно посещать офис",
		},
		{
			img1: PopupG,
			img2: Popup2,
			description:
				"Получите полное аудиторское заключение по вашей организации",
		},
		{
			img1: PopupG,
			img2: Popup3,
			description:
				"Узнайте, какие меры необходимо принять для соответствия ФЗ-152",
		},
	];

	return (
		<>
			<section className={styles.headerSection}>
				<div className={styles.diamond}></div>
				<div className={styles.popupMessage}>
					<span>65%</span>
				</div>
				<h2>
					Бесплатная проверка организации на соответствие требованиям
					Федерального закона “О персональных данных” от 27.06.2006г.
				</h2>
				<div className={styles.steps}>
					{steps.map((step, index) => (
						<div className={styles.stepItem} key={index}>
							<span>
								<img src={step.img1} alt="PopupG" />
								<img src={step.img2} alt={`Popup${index + 1}`} />
							</span>
							<span>{step.description}</span>
						</div>
					))}
				</div>
			</section>
			<section className={styles.bodySection}>
				<form>
					<div className={styles.inputs}>
						<h3>
							В каком виде хранятся данные работников, клиентов или иных
							физических лиц?
						</h3>
						<div className={styles.checkboxes}>
							<label>
								<input
									type="checkbox"
									checked={formData.storageTypes.paper}
									onChange={handleInputChange("paper", "storageTypes")}
								/>{" "}
								В бумажном виде
							</label>
							<label>
								<input
									type="checkbox"
									checked={formData.storageTypes.electronic}
									onChange={handleInputChange("electronic", "storageTypes")}
								/>{" "}
								В электронном виде
							</label>
						</div>
					</div>
					<div className={styles.inputs}>
						<h3>
							Для чего применяется электронно-цифровая подпись в вашей
							организации?
						</h3>
						<div className={styles.checkboxes}>
							<label>
								<input
									type="checkbox"
									checked={formData.digitalSignatureUses.tenders}
									onChange={handleInputChange(
										"tenders",
										"digitalSignatureUses"
									)}
								/>{" "}
								Для участия в тендерах
							</label>
							<label>
								<input
									type="checkbox"
									checked={formData.digitalSignatureUses.documents}
									onChange={handleInputChange(
										"documents",
										"digitalSignatureUses"
									)}
								/>{" "}
								Для подписи документов
							</label>
							<label>
								<input
									type="checkbox"
									checked={formData.digitalSignatureUses.reporting}
									onChange={handleInputChange(
										"reporting",
										"digitalSignatureUses"
									)}
								/>{" "}
								Для сдачи отчетности
							</label>
							<label>
								<input
									type="checkbox"
									checked={formData.digitalSignatureUses.notUsed}
									onChange={handleInputChange(
										"notUsed",
										"digitalSignatureUses"
									)}
								/>{" "}
								ЭЦП не применяется
							</label>
						</div>
					</div>
					<div className={styles.formButton}>
						<button type="button" onClick={handleBack}>
							<img src={PopupAr} alt="PopupAr" />
						</button>
						<button type="button" onClick={handleNext}>
							Продолжить
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default PopupThree;
