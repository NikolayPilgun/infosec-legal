import React from "react";
import { NavLink } from "react-router-dom";
import { NavItem, navItems } from "../../data/navItems";
import styles from "./Footer.module.css";
import CompanyLogo from "/logo.svg";

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
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
				<div className={styles.checkComponent}>
					<p>
						Проверьте свою организацию онлайн за <a href="#">1 минуту</a> и
						получите заключение эксперта по защите персональных данных -{" "}
						<a href="#">бесплатно</a>
					</p>
					<input type="text" placeholder="ИНН Организации" />
					<button>Проверить</button>
				</div>
				<div className={styles.contacts}>
					<span>+7 (812) 240-9297</span>
					<span>Сегодня работаем с 10:00 до 16:00</span>
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
