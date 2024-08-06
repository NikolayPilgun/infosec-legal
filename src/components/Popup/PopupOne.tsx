import React from "react";
import Popup1 from "../../assets/Popup/popup1.svg";
import Popup2 from "../../assets/Popup/popup2.svg";
import Popup3 from "../../assets/Popup/popup3.svg";
import PopupG from "../../assets/Popup/popupG.svg";
import popupNo from "../../assets/Popup/popupNo.svg";
import popupStatus from "../../assets/Popup/popupStatus.svg";
import popupYes from "../../assets/Popup/popupYes.svg";
import styles from "./PopupOne.module.css";

interface FormData {
	inn: string;
	ogrn: string;
	shortName: string;
	fullName: string;
	[key: string]: unknown; // для других полей формы
}

interface PopupOneProps {
	formData: FormData;
	setFormData: React.Dispatch<React.SetStateAction<FormData>>; // уточняем тип здесь
	handleNext: () => void;
}

const PopupOne: React.FC<PopupOneProps> = ({
	formData,
	setFormData,
	handleNext,
}) => {
	const handleInputChange =
		(field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
			setFormData((prevState) => ({
				...prevState,
				[field]: e.target.value,
			}));
		};

	const getValidationImage = (originalValue: string, currentValue: string) => {
		return originalValue === currentValue ? popupYes : popupNo;
	};

	const getInputStyle = (originalValue: string, currentValue: string) => {
		return originalValue === currentValue
			? `${styles.input} ${styles.inputValid}`
			: `${styles.input} ${styles.inputInvalid}`;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleNext();
	};

	const formFields = [
		{
			label: "ИНН Организации",
			value: formData.inn,
			originalValue: formData.inn,
			onChange: handleInputChange("inn"),
		},
		{
			label: "ОГРН/ОГРНИП Организации",
			value: formData.ogrn,
			originalValue: formData.ogrn,
			onChange: handleInputChange("ogrn"),
		},
		{
			label: "Краткое наименование организации",
			value: formData.shortName,
			originalValue: formData.shortName,
			onChange: handleInputChange("shortName"),
		},
		{
			label: "Полное наименование организации",
			value: formData.fullName,
			originalValue: formData.fullName,
			onChange: handleInputChange("fullName"),
		},
	];

	const steps = [
		{
			img1: PopupG,
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
					<span>25%</span>
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
				<h3>Основные регистрационные данные</h3>
				<form onSubmit={handleSubmit}>
					{formFields.map((field, index) => (
						<div className={styles.formGroup} key={index}>
							<img
								src={getValidationImage(field.originalValue, field.value)}
								alt="validationIcon"
							/>
							<label>{field.label}</label>
							<input
								type="text"
								className={getInputStyle(field.originalValue, field.value)}
								value={field.value}
								onChange={field.onChange}
							/>
							{field.value !== field.originalValue && (
								<span className={styles.errorMessage}>
									Это поле заполнено неверно
								</span>
							)}
						</div>
					))}
					<div className={styles.formButton}>
						<p className={styles.info}>
							<img src={popupStatus} alt="popupStatus" />
							<span>
								Данные синхронизированы по ИНН на 1.11.2023 из
								<br />
								информационной системы Федеральной налоговой службы РФ
							</span>
						</p>
						<button type="submit">Продолжить</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default PopupOne;
