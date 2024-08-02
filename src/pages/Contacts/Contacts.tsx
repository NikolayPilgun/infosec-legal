import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Contacts.module.css";

interface Document {
	title: string;
	fileType: string;
	url: string;
}

const documents: Document[] = [
	{ title: "Устав организации", fileType: "PDF", url: "/docs/charter.pdf" },
	{
		title: "Карточка предприятия в несколько строк",
		fileType: "DOCX",
		url: "/docs/card.docx",
	},
	{
		title: "Лицензия на осуществление деятельности",
		fileType: "JPG",
		url: "/docs/license.jpg",
	},
	// Добавьте остальные документы
];

const Contacts: React.FC = () => {
	const location = useLocation();
	const questionSectionRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (location.state?.scrollToQuestion && questionSectionRef.current) {
			questionSectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [location]);

	return (
		<div className={styles.contactsContainer}>
			<header className={styles.header}>
				<h1>Контактная информация</h1>
				<p>Главная / Контакты</p>
			</header>

			<section className={styles.contactsSection}>
				<div className={styles.mapContainer}>
					<iframe
						src="https://www.google.com/maps/embed?pb=..."
						width="100%"
						height="450"
						frameBorder="0"
						style={{ border: 0 }}
						allowFullScreen={false}
						aria-hidden="false"
						tabIndex={0}
					/>
					<div className={styles.contactInfo}>
						<p>
							Для получения информации вы можете позвонить в справочную службу
							(звонки принимаются в рабочее время)
						</p>
						<ul>
							<li>
								<strong>Адрес:</strong> 000000, г. Санкт-Петербург, ул. Пушкина,
								д.24, офис 206
							</li>
							<li>
								<strong>Телефон:</strong> +7 (812) 240-9297
							</li>
							<li>
								<strong>Почта:</strong> info@kpib.ru
							</li>
							<li>
								<strong>Понедельник - Пятница:</strong> с 8:00 до 20:00
							</li>
							<li>
								<strong>Суббота - Воскресенье:</strong> Выходные
							</li>
						</ul>
						<button>Проверить организацию On-line</button>
					</div>
				</div>
			</section>

			<section className={styles.documentsSection}>
				<h2>Уставные документы</h2>
				<div className={styles.documentsGrid}>
					{documents.map((doc, index) => (
						<div key={index} className={styles.documentCard}>
							<div className={styles.documentIcon}>
								<img
									src={`/icons/${doc.fileType.toLowerCase()}.svg`}
									alt={doc.fileType}
								/>
							</div>
							<div className={styles.documentTitle}>
								<a href={doc.url} download>
									{doc.title}
								</a>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className={styles.questionSection} ref={questionSectionRef}>
				<h2>У вас есть вопрос?</h2>
				<form className={styles.questionForm}>
					<input type="text" placeholder="Ваше Имя" required />
					<input type="text" placeholder="Номер телефона или E-mail" required />
					<textarea
						placeholder="Опишите ваш вопрос как можно подробнее"
						required
					></textarea>
					<button type="submit">Отправить</button>
				</form>
			</section>
		</div>
	);
};

export default Contacts;
