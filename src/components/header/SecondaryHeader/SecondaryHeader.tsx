import React from "react";
import { useLocation } from "react-router-dom";
import { navItems } from "../../../data/navItems";
import NavIMG from "./../../../assets/bigLogo.svg";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import styles from "./SecondaryHeader.module.css";

const SecondaryHeader: React.FC = () => {
	const location = useLocation();
	const currentNavItem = navItems.find(
		(item) => item.path === location.pathname
	);

	return (
		<div className={styles.header}>
			<div className={styles.container}>
				<h1>{currentNavItem ? currentNavItem.name : "Страница"}</h1>
				<Breadcrumbs pathname={location.pathname} />
			</div>
			<div className={styles.IMGContainer}>
				<img src={NavIMG} alt="NavIMG" />
			</div>
		</div>
	);
};

export default SecondaryHeader;
