import React from "react";
import Popup1 from "../../assets/Popup/popup1.svg";
import Popup2 from "../../assets/Popup/popup2.svg";
import Popup3 from "../../assets/Popup/popup3.svg";
import PopupAr from "../../assets/Popup/popupAr.svg";
import PopupG from "../../assets/Popup/popupG.svg";
import PopupI from "../../assets/Popup/popupI.svg";
import popupYes from "../../assets/Popup/popupYes.svg";
import styles from "./PopupTwo.module.css";

interface FormData {
	employeesCount: string;
	[key: string]: unknown;
}

interface PopupTwoProps {
	formData: FormData;
	setFormData: React.Dispatch<React.SetStateAction<FormData>>;
	handleNext: () => void;
	handleBack: () => void;
}

const PopupTwo: React.FC<PopupTwoProps> = ({
	formData,
	setFormData,
	handleNext,
	handleBack,
}) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		if (/^\d*$/.test(value)) {
			setFormData((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
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
					<span>47%</span>
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
				<h3>Информация о сотрудниках организации</h3>
				<form>
					<div className={styles.inputs}>
						<input
							className={styles.inputField}
							placeholder="Количество штатных сотрудников"
							name="employeesCount"
							value={formData.employeesCount}
							onChange={handleInputChange}
						/>
						<label className={styles.checkboxLabel}>
							<input className={styles.checkbox} type="checkbox" />
							Наличие сотрудников по ГПХ
						</label>
					</div>
					<div className={styles.info}>
						<img src={PopupI} alt="PopupI" />
						<span>
							Данные о сотрудниках организации необходимы для ... Lorem Ipsum -
							это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem
							Ipsum является стандартной "рыбой"
						</span>
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

export default PopupTwo;
