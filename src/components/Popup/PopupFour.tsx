import React from "react";
import Popup1 from "../../assets/Popup/popup1.svg";
import Popup2 from "../../assets/Popup/popup2.svg";
import Popup3 from "../../assets/Popup/popup3.svg";
import PopupAr from "../../assets/Popup/popupAr.svg";
import PopupG from "../../assets/Popup/popupG.svg";
import popupYes from "../../assets/Popup/popupYes.svg";
import styles from "./PopupFour.module.css";

interface SecurityAssessment {
	yes: boolean;
	no: boolean;
	unknown: boolean;
}

interface FormData {
	securityAssessment: SecurityAssessment;
	[key: string]: unknown;
}

interface PopupFourProps {
	formData: FormData;
	setFormData: React.Dispatch<React.SetStateAction<FormData>>;
	handleNext: () => void;
	handleBack: () => void;
}

const PopupFour: React.FC<PopupFourProps> = ({
	formData,
	setFormData,
	handleNext,
	handleBack,
}) => {
	const handleInputChange =
		(field: keyof SecurityAssessment) =>
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setFormData((prevState) => ({
				...prevState,
				securityAssessment: {
					...prevState.securityAssessment,
					[field]: e.target.checked,
				},
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
					<span>75%</span>
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
				<h3>Проводилась ли оценка уровня защищенности?</h3>
				<form>
					<div className={styles.inputs}>
						<label>
							<input
								type="checkbox"
								checked={formData.securityAssessment.yes}
								onChange={handleInputChange("yes")}
							/>{" "}
							Да
						</label>
						<label>
							<input
								type="checkbox"
								checked={formData.securityAssessment.no}
								onChange={handleInputChange("no")}
							/>{" "}
							Нет
						</label>
						<label>
							<input
								type="checkbox"
								checked={formData.securityAssessment.unknown}
								onChange={handleInputChange("unknown")}
							/>{" "}
							Не знаю
						</label>
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

export default PopupFour;
