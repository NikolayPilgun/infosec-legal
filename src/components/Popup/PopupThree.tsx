import React from "react";
import Popup1 from "../../assets/Popup/popup1.svg";
import Popup2 from "../../assets/Popup/popup2.svg";
import Popup3 from "../../assets/Popup/popup3.svg";
import PopupAr from "../../assets/Popup/popupAr.svg";
import PopupG from "../../assets/Popup/popupG.svg";
import popupYes from "../../assets/Popup/popupYes.svg";
import styles from "./PopupThree.module.css";

const PopupThree: React.FC = () => {
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
								<input type="checkbox" />В бумажном виде
							</label>
							<label>
								<input type="checkbox" />В электронном виде
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
								<input type="checkbox" />
								Для участия в тендерах
							</label>
							<label>
								<input type="checkbox" />
								Для подписи документов
							</label>
							<label>
								<input type="checkbox" />
								Для сдачи отчетности
							</label>
							<label>
								<input type="checkbox" />
								ЭЦП не применяется
							</label>
						</div>
					</div>
					<div className={styles.formButton}>
						<button type="submit">
							<img src={PopupAr} alt="PopupAr" />
						</button>
						<button type="submit">Продолжить</button>
					</div>
				</form>
			</section>
		</>
	);
};

export default PopupThree;
