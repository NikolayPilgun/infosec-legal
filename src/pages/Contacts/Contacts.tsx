import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Contacts1 from "../../assets/Contacts/Contacts1.svg";
import Contacts2 from "../../assets/Contacts/Contacts2.svg";
import Contacts3 from "../../assets/Contacts/Contacts3.svg";
import Contacts4 from "../../assets/Contacts/Contacts4.svg";
import PopupActivity from "../../components/activity/PopupActivity";
import MapComponent from "../../components/Map/MapComponent";
import styles from "./Contacts.module.css";

interface Document {
	title: string;
	url: string;
}

const documents: Document[] = [
	{ title: "Устав организации", url: Contacts1 },
	{
		title: "Карточка предприятия в несколько строк",
		url: Contacts2,
	},
	{
		title: "Лицензия на осуществление деятельности",
		url: Contacts3,
	},
	{
		title: "Карточка предприятия в несколько строк",
		url: Contacts4,
	},
];

const Contacts: React.FC = () => {
	const location = useLocation();
	const questionSectionRef = useRef<HTMLDivElement | null>(null);
	const [popupData, setPopupData] = useState<{
		imageUrl: string;
		title: string;
	} | null>(null);
	const [errors, setErrors] = useState<{ [key: string]: string }>({});
	const [form, setForm] = useState({
		name: "",
		contact: "",
		message: "",
	});

	useEffect(() => {
		if (location.state?.scrollToQuestion && questionSectionRef.current) {
			questionSectionRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [location]);

	const handleDocumentClick = (doc: Document) => {
		setPopupData({ imageUrl: doc.url, title: doc.title });
	};

	const handleClosePopup = () => {
		setPopupData(null);
	};

	const validateForm = () => {
		const newErrors: { [key: string]: string } = {};
		const namePattern = /^[а-яА-ЯёЁa-zA-Z]+$/;
		const contactPattern = /^(\+?\d+|\S+@\S+\.\S+)$/;
		const messagePattern = /^[a-zA-Z0-9а-яА-ЯёЁ\s]*$/;

		if (!namePattern.test(form.name)) {
			newErrors.name =
				"Имя должно содержать только русские или латинские буквы.";
		}

		if (!contactPattern.test(form.contact) || form.contact.length > 20) {
			newErrors.contact =
				"Введите корректный номер телефона или e-mail, не более 20 символов.";
		}

		if (!messagePattern.test(form.message) || form.message.length > 300) {
			newErrors.message =
				"Сообщение должно содержать только текст и цифры и не более 300 символов.";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validateForm()) {
			return;
		}

		const mailtoLink = `mailto:fake@example.com?subject=${encodeURIComponent(
			"Вопрос с сайта"
		)}&body=${encodeURIComponent(
			`Имя: ${form.name}\nEmail/Телефон: ${form.contact}\nВопрос: ${form.message}`
		)}`;
		window.location.href = mailtoLink;
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		if (name === "message") {
			const messagePattern = /^[a-zA-Z0-9а-яА-ЯёЁ\s]*$/;
			if (!messagePattern.test(value) || value.length > 300) {
				setErrors((prev) => ({
					...prev,
					message:
						"Сообщение должно содержать только текст и цифры и не более 300 символов.",
				}));
			} else {
				setErrors((prev) => ({ ...prev, message: "" }));
			}
		}
		setForm({ ...form, [name]: value });
	};

	const handleSearchOrganization = () => {
		const query = "000000, г. Санкт-Петербург, ул. Пушкина, д.24, офис 206";
		const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
			query
		)}`;
		window.open(googleSearchUrl, "_blank");
	};

	const defaultCity = {
		name: "Санкт-Петербург",
		coordinates: [59.9342802, 30.3350986] as [number, number],
	};

	return (
		<div className={styles.contactsContainer}>
			<section className={styles.contactsSection}>
				<div className={styles.mapContainer}>
					<MapComponent selectedCity={defaultCity} zoom={19} />
					<div className={styles.contactInfo}>
						<p>
							Для получения информации вы можете позвонить в справочную службу
							(звонки принимаются в рабочее время)
						</p>
						<ul className={styles.contactDetails}>
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
						<button onClick={handleSearchOrganization}>
							Проверить организацию On-line
						</button>
					</div>
				</div>
			</section>

			<section className={styles.containerSection}>
				<div className={styles.documentsSection}>
					<h2>Уставные документы</h2>
					<div className={styles.documentsGrid}>
						{documents.map((doc, index) => (
							<div
								key={index}
								className={styles.documentCard}
								onClick={() => handleDocumentClick(doc)}
							>
								<img src={doc.url} alt={doc.title} />
								<p>{doc.title}</p>
							</div>
						))}
					</div>
				</div>
				<div className={styles.questionSection} ref={questionSectionRef}>
					<h2>У вас есть вопрос?</h2>
					<h3>
						Задайте его нам. Наши специалисты ответят в самое ближайшее время
					</h3>
					<form className={styles.questionForm} onSubmit={handleSubmit}>
						<input
							type="text"
							name="name"
							placeholder="Ваше Имя"
							required
							value={form.name}
							onChange={handleInputChange}
							pattern="[А-Яа-яЁёA-Za-z]+"
							title="Имя должно содержать только русские или латинские буквы."
						/>
						<span className={styles.error}>{errors.name}</span>
						<input
							type="text"
							name="contact"
							placeholder="Номер телефона или E-mail"
							required
							value={form.contact}
							onChange={handleInputChange}
							pattern="(\+?\d+|\S+@\S+\.\S+)"
							title="Введите корректный номер телефона или e-mail."
							maxLength={20}
						/>
						<span className={styles.error}>{errors.contact}</span>
						<textarea
							name="message"
							placeholder="Опишите ваш вопрос как можно подробнее"
							required
							value={form.message}
							onChange={handleInputChange}
							title="Сообщение должно содержать только текст и цифры."
							maxLength={300}
						/>
						<span className={styles.error}>{errors.message}</span>
						<button type="submit">Отправить</button>
					</form>
				</div>
			</section>
			{popupData && (
				<PopupActivity
					imageUrl={popupData.imageUrl}
					title={popupData.title}
					onClose={handleClosePopup}
				/>
			)}
		</div>
	);
};

export default Contacts;
