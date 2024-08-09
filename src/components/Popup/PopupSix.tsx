import React, { useEffect, useState } from "react";
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
	const [emailValid, setEmailValid] = useState(true);
	const [phoneValid, setPhoneValid] = useState(true);
	const [isEmailFilled, setIsEmailFilled] = useState(false);
	const [isPhoneFilled, setIsPhoneFilled] = useState(false);

	useEffect(() => {
		if (!formData.email) {
			setFormData({ ...formData, email: "" });
		}
		if (!formData.phone) {
			setFormData({ ...formData, phone: "" });
		}
	}, []);

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const email = e.target.value;
		setFormData({ ...formData, email });
		setEmailValid(validateEmail(email));
		setIsEmailFilled(email.trim() !== "");
	};

	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const phone = e.target.value;
		setFormData({ ...formData, phone });
		setPhoneValid(validatePhone(phone));
		setIsPhoneFilled(phone.trim() !== "");
	};

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email) && email.trim() !== "";
	};

	const validatePhone = (phone: string) => {
		const phoneRegex = /^\d+$/;
		return phoneRegex.test(phone) && phone.trim() !== "";
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (emailValid && phoneValid) {
			console.log("Collected Data:", formData);
			setFormData({ email: "", phone: "" });
			handleNext();
		}
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
							type="email"
							className={`${styles.inputField} ${
								!emailValid ? styles.invalid : ""
							}`}
							placeholder="E-mail"
							value={formData.email}
							onChange={handleEmailChange}
						/>
						<input
							type="tel"
							className={`${styles.inputField} ${
								!phoneValid ? styles.invalid : ""
							}`}
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
						<button
							type="submit"
							disabled={
								!(emailValid && phoneValid && isEmailFilled && isPhoneFilled)
							}
						>
							Выслать на почту
						</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default PopupSix;
