import React from "react";
import styles from "./ReviewCard.module.css";

interface ReviewCardProps {
	initials: string;
	name: string;
	date: string;
	rating: number;
	review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
	initials,
	name,
	date,
	rating,
	review,
}) => {
	const renderStars = (count: number) => {
		return [...Array(5)].map((_, i) => (
			<span
				key={i}
				className={i < count ? styles.starFilled : styles.starEmpty}
			>
				★
			</span>
		));
	};

	return (
		<div className={styles.card}>
			<div className={styles.header}>
				<div className={styles.initials}>{initials}</div>
				<div>
					<div className={styles.name}>{name}</div>
					<div className={styles.date}>{date}</div>
				</div>
			</div>
			<div className={styles.rating}>{renderStars(rating)}</div>
			<div className={styles.review}>{review}</div>
		</div>
	);
};

export default ReviewCard;
