import React from "react";
import styles from "./Awards.module.css";

// Импортируем изображения
import awards1 from "../../assets/Awards/awards1.svg";
import awards2 from "../../assets/Awards/awards2.svg";
import awards3 from "../../assets/Awards/awards3.svg";

interface InfoCardData {
	img: string;
	alt: string;
	text: string;
}

interface StatData {
	number: string;
	unit: string;
	description: string;
}

type CombinedData = InfoCardData | StatData;

const data: CombinedData[] = [
	{
		img: awards1,
		alt: "картинка карты",
		text: "Являемся аккредитованным участником единой информационной системы в сфере закупок на электронных площадках по 223-ФЗ и 44-ФЗ",
	},
	{
		img: awards2,
		alt: "герб",
		text: "Система сертификации зарегистрирована в реестре Федерального агентства по техническому регулированию и метрологии «Росстандарт»",
	},
	{
		img: awards3,
		alt: "логотип",
		text: "Резидент Торгово-промышленной палаты Санкт-Петербурга с 2019г.",
	},
	{
		number: "7",
		unit: "лет",
		description: "Безупречной работы",
	},
	{
		number: "2785",
		unit: "",
		description: "Частных и государственных организаций доверяют нам",
	},
	{
		number: "0",
		unit: "рублей",
		description: "Штрафов получили наши клиенты",
	},
];

const Awards: React.FC = () => {
	return (
		<section className={styles.container}>
			<div className={styles.content}>
				{data.map((item, index) => (
					<div key={index} className={styles.item}>
						{"img" in item ? (
							<div className={styles.infoCard}>
								<img src={item.img} alt={item.alt} className={styles.icon} />
								<p>{item.text}</p>
							</div>
						) : (
							<div className={styles.statItem}>
								<div className={styles.statContainer}>
									<h2 className={styles.statNumber}>{item.number}</h2>
									<p className={styles.statUnit}>{item.unit}</p>
								</div>
								<p className={styles.statDescription}>{item.description}</p>
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default Awards;
