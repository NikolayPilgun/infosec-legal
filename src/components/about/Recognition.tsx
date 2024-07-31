import React from "react";
import styles from "./Recognition.module.css";

// Импортируем изображения
import recognition1 from "../../assets/Recognition/Recognition1.svg";
import recognition2 from "../../assets/Recognition/Recognition2.svg";
import recognition3 from "../../assets/Recognition/Recognition3.svg";
import recognition4 from "../../assets/Recognition/Recognition4.svg";
import recognition5 from "../../assets/Recognition/Recognition5.svg";
import recognition6 from "../../assets/Recognition/Recognition6.svg";

interface Partner {
	logo: string;
	name: string;
}

const partners: Partner[] = [
	{
		logo: recognition1,
		name: "Открытое Акционерное Общество «Автодор Санкт-Петербург»",
	},
	{
		logo: recognition2,
		name: "Федеральное государственное бюджетное учреждение «Российский НИИ гематологии и трансфузиологии ФМБА России»",
	},
	{
		logo: recognition3,
		name: "Федеральное бюджетное учреждение «Государственный региональный центр стандартизации, метрологии и испытаний в Нижегородской области»",
	},
	{
		logo: recognition4,
		name: "Комитет финансов администрации МО «Всеволожский муниципальный район» Ленинградской области",
	},
	{
		logo: recognition5,
		name: "Контрольно-Счетный Комитет Беломорского Муниципального района Республики Карелия",
	},
	{
		logo: recognition6,
		name: "Белгородский областной фонд поддержки малого и среднего предпринимательства",
	},
];

const Recognition: React.FC = () => (
	<section className={styles.recognition}>
		<div className={styles.title}>
			<h2>Признание на федеральном уровне</h2>
			<p>
				Наши специалисты провели аудит и проконсультировали на предмет обработки
				и защиты персональных данных
				<strong> более 33000организаций от Калининграда до Чукотки.</strong> Тут
				нужно продумать текст заканчивающийся на нашими ключевыми партнерами
				являются:
			</p>
		</div>
		<div className={styles.grid}>
			{partners.map((partner) => (
				<div key={partner.name} className={styles.partnerCard}>
					<img
						src={partner.logo}
						alt={partner.name}
						className={styles.partnerLogo}
					/>
					<p>{partner.name}</p>
				</div>
			))}
		</div>
	</section>
);

export default Recognition;
