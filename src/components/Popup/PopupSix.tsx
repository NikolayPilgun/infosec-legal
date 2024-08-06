import React from "react";
import Popup1 from "../../assets/Popup/popup1.svg";
import Popup2 from "../../assets/Popup/popup2.svg";
import Popup3 from "../../assets/Popup/popup3.svg";
import PopupG from "../../assets/Popup/popupG.svg";
import PopupI from "../../assets/Popup/popupI.svg";
import popupYes from "../../assets/Popup/popupYes.svg";
import styles from "./PopupSix.module.css";

interface FormData {
	email: string;
	phone: string;
	[key: string]: string | boolean;
}

interface PopupSixProps {
	formData: FormData;
	setFormData: (data: FormData) => void;
	handleNext: () => void;
	handleBack: () => void;
}

const PopupSix: React.FC<PopupSixProps> = ({
	formData,
	setFormData,
	handleNext,
	handleBack,
}) => {
	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, email: e.target.value });
	};

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		if (/^\d*$/.test(value)) {
			setFormData({ ...formData, phone: value });
		}
	};

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validateEmail(formData.email)) {
			alert("Введите корректный e-mail");
			return;
		}
		handleNext();
	};

	const steps = [
		{
			img1: popupYes,
			img2: Popup1,
			description: "Заполните онлайн-форму - вам не нужно посещать офис",
		},
		{
			img1: popupYes,
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
				<h3>Контактные данные</h3>
				<form onSubmit={handleSubmit}>
					<div className={styles.inputs}>
						<input
							className={styles.inputField}
							placeholder="E-mail"
							value={formData.email}
							onChange={handleEmailChange}
						/>
						<input
							className={styles.inputField}
							placeholder="Номер телефона"
							value={formData.phone}
							onChange={handlePhoneChange}
						/>
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
							Назад
						</button>
						<button type="submit">Выслать на почту</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default PopupSix;
