import React from "react";
import CheckSection from "../../components/about/CheckSection";
import styles from "./About.module.css";

const About: React.FC = () => {
	return (
		<div className={styles.aboutContainer}>
			<CheckSection />
			<section className={styles.statsSection}>
				<h3>Признание на федеральном уровне</h3>
				<p>
					Наши специалисты проверяют аудит и проконсультируют по предмету
					обработки и защиты персональных данных более 33000 организаций от
					Калининграда до Чукотки.
				</p>

				<div className={styles.stats}>
					<div className={styles.statsItem}>
						<h3>7 лет</h3>
						<p>Безупречной работы</p>
					</div>
					<div className={styles.statsItem}>
						<h3>2785</h3>
						<p>Частных и государственных организаций доверяют нам</p>
					</div>
					<div className={styles.statsItem}>
						<h3>0 рублей</h3>
						<p>Штрафов получили наши клиенты</p>
					</div>
				</div>
			</section>

			<section className={styles.partnersSection}>
				<h3>Наши ключевые партнеры</h3>
				<div className={styles.partnersList}>
					<img src="/partner1.png" alt="Партнер 1" />
					<img src="/partner2.png" alt="Партнер 2" />
					<img src="/partner3.png" alt="Партнер 3" />
					<img src="/partner4.png" alt="Партнер 4" />
					{/* <!-- Добавьте остальные логотипы партнеров --> */}
				</div>
			</section>

			<section className={styles.mapSection}>
				<h3>Нам доверились 27 642 компании из 94 городов</h3>
				<div className={styles.map}>
					{/* <!-- Вставить карту, возможно с использованием iframe или API Яндекс.Карт --> */}
				</div>
			</section>

			<section className={styles.faqSection}>
				<h3>Ответы на часто задаваемые вопросы</h3>
				<div className={styles.faqList}>
					<div className={styles.faqItem}>
						<h4>Как быстро осуществляется ваша услуга?</h4>
						<p>Ответ на вопрос.</p>
					</div>
					<div className={styles.faqItem}>
						<h4>Где я могу получить информацию о сертификате?</h4>
						<p>Ответ на вопрос.</p>
					</div>
					{/* <!-- Добавьте остальные вопросы и ответы --> */}
				</div>
			</section>

			<section className={styles.contactFormSection}>
				<h3>У вас есть вопрос?</h3>
				<form className={styles.contactForm}>
					<input type="text" placeholder="Ваше имя" required />
					<input type="email" placeholder="Ваш Email" required />
					<textarea placeholder="Опишите ваш вопрос" required></textarea>
					<button type="submit">Отправить</button>
				</form>
			</section>
		</div>
	);
};

export default About;
