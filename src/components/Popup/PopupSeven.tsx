import React from "react";
import Popup1 from "../../assets/Popup/popup1.svg";
import Popup2 from "../../assets/Popup/popup2.svg";
import Popup3 from "../../assets/Popup/popup3.svg";
import popupYes from "../../assets/Popup/popupYes.svg";
import styles from "./PopupSeven.module.css";

interface PopupSevenProps {
	onClose: () => void;
}

const PopupSeven: React.FC<PopupSevenProps> = ({ onClose }) => {
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
			img1: popupYes,
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
				<div className={styles.containerStatus}>
					<div className={styles.itemStatus}>
						<h3>Ваша заявка успешно отправлена!</h3>
						<p>
							Специалист Комитета по информационной и правовой безопасности
							свяжется с вами в течение рабочего дня для оказания бесплатной
							консультации.
						</p>
						<p>
							Обычно это занимает от 20 минут до 1 часа, в порядке очереди вашей
							заявки.
						</p>
					</div>
					<div className={styles.formButton}>
						<button type="button" onClick={onClose}>
							Закрыть
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default PopupSeven;
