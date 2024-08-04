import React from "react";
import NavIMG from "./../../../assets/bigLogo.svg";
import styles from "./MainHeader.module.css";

const MainHeader: React.FC = () => {
	return (
		<div className={styles.mainHeader}>
			<div className={styles.titleContainer}>
				<h1>Комитет по информационной и правовой безопасности</h1>
				<h2>
					Национальный центр информационной безопасности по сертификации
					экспертов и организаций в сфере защиты персональных данных
				</h2>
			</div>
			<div className={styles.IMGContainer}>
				<img src={NavIMG} alt="NavIMG" />
			</div>
		</div>
	);
};

export default MainHeader;
