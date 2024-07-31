import React from "react";
import styles from "./CheckSection.module.css";

const CheckSection: React.FC = () => {
	return (
		<section className={styles.container}>
			<div className={styles.checkSection}>
				<div className={styles.inputBlock}>
					<h3>
						Проверьте свою организацию онлайн <span>за 1 минуту</span> и
						получите заключение эксперта по защите персональных данных -
						<span> бесплатно</span>
					</h3>
					<div className={styles.checkForm}>
						<input
							type="text"
							placeholder="ИНН Организации"
							className={styles.input}
						/>
						<button className={styles.button}>Проверить</button>
					</div>
				</div>

				<div className={styles.certificationDetails}>
					<div className={styles.detailItem}>
						<h3>106</h3>
						<p>Бесплатных мест осталось</p>
					</div>
					<div className={styles.detailItem}>
						<h3>57</h3>
						<p>Консультаций оказано за апрель</p>
					</div>
				</div>
			</div>

			<div className={styles.certificationInfo}>
				<div className={styles.certificationAlert}>
					<svg
						className={styles.certificationIMG}
						width="20"
						height="22"
						viewBox="0 0 20 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<ellipse cx="10" cy="11.1274" rx="10" ry="10.351" fill="#DE5858" />
						<path
							d="M9 8.61356H9.5C9.77614 8.61356 10 8.83742 10 9.11356V14.7678C10 15.0439 10.2239 15.2678 10.5 15.2678H11M10 5.95187H10.01"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>

					<p>
						На 09.08.2023, если ваша организация отсутствует в реестре
						операторов персональных данных Роскомнадзора, или запись содержит
						устаревшие данные, вы нарушаете требования закона от 27.07.2006г. №
						152-ФЗ "О персональных данных".
					</p>
					<p>
						В период с 01.08.2023 по 15.08.2023, в рамках проведения
						информационно-аналитической поддержки частных, государственных и
						муниципальных организаций, бесплатно предоставим аудиторское
						заключение эксперта и консультацию специалиста в сфере защиты
						персональных данных с учетом требований на 2023 год.
					</p>
				</div>
			</div>
		</section>
	);
};

export default CheckSection;
