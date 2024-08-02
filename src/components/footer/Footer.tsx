import React from "react";
import { NavLink } from "react-router-dom";
import { NavItem, navItems } from "../../data/navItems";
import CheckFormBlock from "../checkFormBlock/CheckFormBlock";
import styles from "./Footer.module.css";
import CompanyLogo from "/logo.svg";

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.topSection}>
				<div className={styles.footerNav}>
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
				</div>

				<CheckFormBlock
					containerClassName={styles.customContainer}
					headingClassName={styles.customHeading}
				/>
				<div className={styles.contacts}>
					<p className={styles.contactsPhone}>
						<span>+7 (812) 240-9297</span>
						<span>Сегодня работаем с 10:00 до 16:00</span>
					</p>

					<span>г. Санкт-Петербург, ул. Пушкина, д.24, офис 206</span>
				</div>
			</div>
			<div className={styles.bottomSection}>
				<span>© 2023 - Комитет по информационной и правовой безопасности</span>
				<span>Все права защищены.</span>
			</div>
		</footer>
	);
};

export default Footer;
