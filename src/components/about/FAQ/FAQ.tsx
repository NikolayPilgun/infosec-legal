import React from "react";
import FAQ1 from "../../../assets/FAQ/FAQ1.svg";
import FAQ2 from "../../../assets/FAQ/FAQ2.svg";
import Accordion from "./Accordion";
import styles from "./FAQ.module.css";

interface FAQItem {
	title: string;
	content: string;
	documentImages?: string[];
}

const faqData: FAQItem[] = [
	{
		title: "Как быстро осуществляется ваша услуга?",
		content:
			"Обычно услуги выполняются в течение 2-3 рабочих дней. Однако время выполнения может варьироваться в зависимости от сложности и объема работы. " +
			"В случае нестандартных заказов время выполнения может быть увеличено. Мы всегда стараемся информировать клиентов о сроках заранее. " +
			"Наши специалисты работают оперативно и внимательно, чтобы обеспечить высокое качество услуг в кратчайшие сроки.",
		documentImages: [FAQ1],
	},
	{
		title: "Что я получу и что-нибудь про сертификат?",
		content:
			"При выполнении услуг вы получите сертификат соответствия, который подтверждает качество и соответствие услуг необходимым стандартам. " +
			"Сертификат содержит информацию об организации и услугах, прошедших проверку. " +
			"Этот документ поможет вам в работе с партнёрами и клиентами, подтверждая надежность и профессионализм вашей компании. " +
			"Сертификаты выдаются на основе тщательной проверки наших специалистов и поддерживаются на протяжении всего времени сотрудничества.",
		documentImages: [FAQ1, FAQ2],
	},
	{
		title: "Где я могу получить информацию о сертификате?",
		content:
			"Вы можете получить информацию о сертификате на нашем официальном сайте. Перейдите в раздел 'Сертификаты' и введите номер сертификата или ИНН компании для проверки подлинности. " +
			"Кроме того, вы можете связаться с нашими менеджерами, которые предоставят дополнительную информацию и консультации по всем вопросам, связанным с нашими сертификатами. " +
			"На сайте также доступны подробные инструкции по использованию сертификатов и требованиям к их обладателям.",
		documentImages: [FAQ1],
	},
	{
		title: "Вы нашли ответ на ваш вопрос?",
		content:
			"Если нет, вы можете задать свой вопрос нашим специалистам и получить гарантированный ответ. " +
			"Мы ценим ваше время и стараемся отвечать на все вопросы как можно быстрее. " +
			"Просто заполните форму на странице 'Задать вопрос', и наш менеджер свяжется с вами в течение рабочего дня. " +
			"Вы можете получить консультацию как по телефону, так и по электронной почте, в удобное для вас время.",
		documentImages: [FAQ1],
	},
];

const FAQ: React.FC = () => (
	<div className={styles.container}>
		<div className={styles.faqSection}>
			<h1>Ответы на часто задаваемые вопросы</h1>
			{faqData.map((item, index) => (
				<Accordion
					key={index}
					title={item.title}
					content={item.content}
					documentImages={item.documentImages}
				/>
			))}
		</div>
		<div className={styles.sidebar}>
			<div className={styles.notFound}>
				<h2>Не нашли ответ?</h2>
				<p>
					Вы можете задать свой вопрос нашим специалистам, и получить
					гарантированный ответ.
				</p>
				<a href="/ask-question" className={styles.askButton}>
					Задать вопрос
				</a>
			</div>
		</div>
	</div>
);

export default FAQ;
