import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import styles from "./ReviewSlider.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const reviews = [
	{
		initials: "EM",
		name: "Евгений Михайлов",
		date: "24 июля 2024",
		rating: 3,
		review:
			"Можно бесплатно проверить свою фирму на нарушения ФЗ-152 О персональных данных прямо на сайте. Для этого просто нужно ввести ИНН компании.",
	},
	{
		initials: "ВС",
		name: "Виктория Свенцова",
		date: "24 июля 2024",
		rating: 4,
		review:
			"Можно бесплатно проверить свою фирму на нарушения ФЗ-152 О персональных данных прямо на сайте. Для этого просто нужно ввести ИНН компании.",
	},
	{
		initials: "ПК",
		name: "Роман Краснов",
		date: "24 июля 2024",
		rating: 5,
		review:
			"Можно бесплатно проверить свою фирму на нарушения ФЗ-152 О персональных данных прямо на сайте. Для этого просто нужно ввести ИНН компании.",
	},
	{
		initials: "АБ",
		name: "Анастасия Белова",
		date: "25 июля 2024",
		rating: 5,
		review: "Удобный сервис, рекомендую всем владельцам бизнеса!",
	},
	{
		initials: "КП",
		name: "Константин Петров",
		date: "25 июля 2024",
		rating: 4,
		review:
			"Быстрая проверка компании на соответствие требованиям законодательства.",
	},
	{
		initials: "ИВ",
		name: "Ирина Васильева",
		date: "26 июля 2024",
		rating: 4,
		review: "Хорошо, но хотелось бы больше информации на сайте.",
	},
];

const ReviewSlider: React.FC = () => {
	return (
		<section className={styles.sliderContainer}>
			<Swiper
				modules={[Navigation]}
				spaceBetween={20}
				slidesPerView={3}
				loop={true}
				centeredSlides={true}
				navigation
				className={`${styles.mySwiper} mySwiper`}
			>
				{reviews.map((review, index) => (
					<SwiperSlide key={index} className={styles.slide}>
						<ReviewCard
							initials={review.initials}
							name={review.name}
							date={review.date}
							rating={review.rating}
							review={review.review}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default ReviewSlider;
