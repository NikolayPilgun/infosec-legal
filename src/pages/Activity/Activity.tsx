import React, { useState } from "react";
import Activity1 from "../../assets/Activity/Activity1.svg";
import Activity10 from "../../assets/Activity/Activity10.svg";
import Activity11 from "../../assets/Activity/Activity11.svg";
import Activity2 from "../../assets/Activity/Activity2.svg";
import Activity3 from "../../assets/Activity/Activity3.svg";
import Activity4 from "../../assets/Activity/Activity4.svg";
import Activity5 from "../../assets/Activity/Activity5.svg";
import Activity6 from "../../assets/Activity/Activity6.svg";
import Activity7 from "../../assets/Activity/Activity7.svg";
import Activity8 from "../../assets/Activity/Activity8.svg";
import Activity9 from "../../assets/Activity/Activity9.svg";
import styles from "./Activity.module.css";

interface Document {
	title: string;
	category: string;
	url: string;
}

const documents: Document[] = [
	{
		title: "Устав и правила организации",
		category: "Уставные документы",
		url: Activity1,
	},
	{
		title: "Общие сведения о компании",
		category: "Уставные документы",
		url: Activity2,
	},
	{
		title: "Лицензия на деятельность",
		category: "Уставные документы",
		url: Activity3,
	},
	{
		title: "Краткая информация о предприятии",
		category: "Категория документов какая",
		url: Activity4,
	},
	{
		title: "Устав и внутренний регламент",
		category: "Уставные документы",
		url: Activity1,
	},
	{
		title: "Основные данные компании",
		category: "Категория документов какая",
		url: Activity5,
	},
	{
		title: "Лицензия на определенные виды деятельности",
		category: "Категория документов какая",
		url: Activity6,
	},
	{
		title: "Сведения о предприятии",
		category: "Ещё документы",
		url: Activity7,
	},
	{
		title: "Информация о компании",
		category: "Ещё документы",
		url: Activity8,
	},
	{
		title: "Устав и нормативная база",
		category: "Уставные документы",
		url: Activity1,
	},
	{
		title: "Дополнительная информация о компании",
		category: "Ещё документы",
		url: Activity9,
	},
	{
		title: "Лицензия предприятия",
		category: "Какая-то очень длинная категория в несколько строчек",
		url: Activity10,
	},
	{
		title: "Карточка предприятия и его деятельность",
		category: "Какая-то очень длинная категория в несколько строчек",
		url: Activity11,
	},
];

const groupedDocuments: { [key: string]: Document[] } = documents.reduce(
	(acc: { [key: string]: Document[] }, doc: Document) => {
		if (!acc[doc.category]) {
			acc[doc.category] = [];
		}
		acc[doc.category].push(doc);
		return acc;
	},
	{}
);

const Activity: React.FC = () => {
	const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
		new Set()
	);

	const toggleCategory = (category: string) => {
		setSelectedCategories((prev) => {
			const newCategories = new Set(prev);
			if (newCategories.has(category)) {
				newCategories.delete(category);
			} else {
				newCategories.add(category);
			}
			return newCategories;
		});
	};

	const filteredDocuments = selectedCategories.size
		? documents.filter((doc) => selectedCategories.has(doc.category))
		: documents;

	const filteredGroupedDocuments: { [key: string]: Document[] } =
		filteredDocuments.reduce(
			(acc: { [key: string]: Document[] }, doc: Document) => {
				if (!acc[doc.category]) {
					acc[doc.category] = [];
				}
				acc[doc.category].push(doc);
				return acc;
			},
			{}
		);

	return (
		<div className={styles.activityContainer}>
			<main className={styles.mainContent}>
				{Object.keys(filteredGroupedDocuments).map((category, index) => (
					<section key={index} className={styles.documentsSection}>
						<h2>{category}</h2>
						<div className={styles.documentsGrid}>
							{filteredGroupedDocuments[category].map((doc, idx) => (
								<div key={idx} className={styles.documentCard}>
									<div className={styles.documentIcon}>
										<img src={doc.url} alt={doc.title} />
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
				))}
			</main>
			<aside className={styles.sidebar}>
				<div className={styles.sidebarSticky}>
					<h2>Выберите нужную вам категорию документов:</h2>
					<ul>
						{Object.keys(groupedDocuments).map((category, index) => (
							<li
								key={index}
								onClick={() => toggleCategory(category)}
								className={
									selectedCategories.has(category) ? styles.selected : ""
								}
							>
								{category} ({groupedDocuments[category].length})
							</li>
						))}
					</ul>
				</div>
			</aside>
		</div>
	);
};

export default Activity;
