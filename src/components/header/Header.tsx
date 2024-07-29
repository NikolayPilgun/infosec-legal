import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavItem, navItems } from "../../data/navItems";
import styles from "./Header.module.css";
import MainHeader from "./MainHeader/MainHeader";
import SecondaryHeader from "./SecondaryHeader/SecondaryHeader";
import CompanyLogo from "/logo.svg";

const Header: React.FC = () => {
	const location = useLocation();

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.topSection}>
					<div className={styles.navigationBlockLogo}>
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

					<div className={styles.contactInfo}>
						<span>+7 (812) 343-9393</span>
						<span>Сегодня работаем с 10:00 до 16:00</span>
					</div>
				</div>
				{location.pathname === "/" ? <MainHeader /> : <SecondaryHeader />}
			</div>
		</header>
	);
};

export default Header;
