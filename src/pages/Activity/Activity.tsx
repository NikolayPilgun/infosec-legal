import React from "react";
import styles from "./Activity.module.css";

const documents = [
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
	{
		title: "Карточка предприятия в несколько строк",
		fileType: "DOCX",
		url: "/docs/card.docx",
	},
	// Добавьте остальные документы
];

const moreDocuments = [
	{
		title: "Устав организации",
		fileType: "PDF",
		url: "/docs/more-charter.pdf",
	},
	{
		title: "Карточка предприятия в несколько строк",
		fileType: "DOCX",
		url: "/docs/more-card.docx",
	},
	// Добавьте остальные документы
];

const Activity: React.FC = () => {
	return (
		<div className={styles.activityContainer}>
			<header className={styles.header}>
				<h1>Документы</h1>
				<p>Главная / Документы</p>
			</header>

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

			<section className={styles.documentsSection}>
				<h2>Ещё категория документов</h2>
				<div className={styles.documentsGrid}>
					{moreDocuments.map((doc, index) => (
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

			<aside className={styles.sidebar}>
				<div className={styles.sidebarSticky}>
					<h2>Выберите нужную вам категорию документов:</h2>
					<ul>
						<li>Уставные документы (4)</li>
						<li>Категория документов какая (17)</li>
						<li>Ещё документы</li>
						<li>Какая-то очень длинная категория в несколько строчек (2)</li>
					</ul>
				</div>
			</aside>
		</div>
	);
};

export default Activity;
