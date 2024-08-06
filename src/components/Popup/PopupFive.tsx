import React from "react";
import Popup1 from "../../assets/Popup/popup1.svg";
import Popup2 from "../../assets/Popup/popup2.svg";
import Popup3 from "../../assets/Popup/popup3.svg";
import PopupG from "../../assets/Popup/popupG.svg";
import popupNo from "../../assets/Popup/popupNo.svg";
import popupStatus from "../../assets/Popup/popupStatus.svg";
import popupYes from "../../assets/Popup/popupYes.svg";
import styles from "./PopupFive.module.css";

const PopupFive: React.FC = () => {
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
				<div className={styles.popupMessage}>
					<span>90%</span>
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
				<div className={styles.containerStatus}>
					<div className={styles.itemStatus}>
						<h3>Синхронизация данных</h3>
						<p>
							В соответствии со сведениями информационный системы Федеральной
							службы по надзору в сфере связи, информационных технологий и
							массовых коммуникаций
						</p>
					</div>
					<div className={styles.itemStatus}>
						<h3>Предварительные результаты:</h3>
						<p>
							<img src={popupYes} alt="popupYes" />
							<span>
								Запись об ООО “Комитет информационной безопасности” найдена!
							</span>
						</p>
						<p>
							<img src={popupNo} alt="popupNo" />
							<span>Обнаружены факты, требующие внимания!</span>
						</p>
						<p>
							<img src={popupStatus} alt="popupStatus" />
							<span>Пример как выглядит во время “синхронизации”</span>
						</p>
					</div>
					<div className={styles.formButton}>
						<button type="submit">Получить полный отчет</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default PopupFive;
