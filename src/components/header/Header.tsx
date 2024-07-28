import React from "react";
import { NavLink } from "react-router-dom";
import { NavItem, navItems } from "../../data/navItems";
import styles from "./Header.module.css";
import CompanyLogo from "/logo.svg";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.topSection}>
				<div className={styles.logo}>
					<img src={CompanyLogo} alt="Company Logo" />
				</div>
				<nav className={styles.nav}>
					{navItems.map((item: NavItem) => (
						<NavLink
							key={item.path}
							to={item.path}
							className={({ isActive }) => (isActive ? styles.active : "")}
						>
							{item.name}
						</NavLink>
					))}
				</nav>
				<div className={styles.contactInfo}>
					<span>+7 (812) 240-9297</span>
					<span>Сегодня работаем с 10:00 до 16:00</span>
				</div>
			</div>
			<div className={styles.bottomSection}>
				<div className={styles.titleContainer}>
					<h1>Комитет по информационной и правовой безопасности</h1>
					<h2>
						Национальный центр информационной безопасности по сертификации
						экспертов и организаций в сфере защиты персональных данных
					</h2>
				</div>
			</div>
		</header>
	);
};

export default Header;
