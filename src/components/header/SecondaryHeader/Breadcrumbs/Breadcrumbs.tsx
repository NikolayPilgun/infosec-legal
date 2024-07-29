import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../../../data/navItems";
import styles from "./Breadcrumbs.module.css";

type BreadcrumbsProps = {
	pathname: string;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ pathname }) => {
	const paths = pathname
		.split("/")
		.filter(Boolean)
		.map((segment, index, arr) => {
			const path = `/${arr.slice(0, index + 1).join("/")}`;
			const navItem = navItems.find((item) => item.path === path);
			return navItem ? { name: navItem.name, path } : { name: segment, path };
		});

	return (
		<nav className={styles.breadcrumbs}>
			{pathname !== "/" && (
				<>
					<span className={styles.breadcrumbItem}>
						<Link to="/" className={styles.homeBreadcrumbItem}>
							Главная
						</Link>
					</span>
					<svg
						width="6"
						height="10"
						viewBox="0 0 6 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1 1.56L4 5.35L1 9.15" stroke="white" strokeWidth="2" />
					</svg>
				</>
			)}
			{paths.map((breadcrumb, index) => (
				<React.Fragment key={index}>
					<span
						className={
							index === paths.length - 1
								? styles.currentBreadcrumbItem
								: styles.breadcrumbItem
						}
					>
						<Link to={breadcrumb.path}>{breadcrumb.name}</Link>
					</span>
					{index < paths.length - 1 && (
						<svg
							width="6"
							height="10"
							viewBox="0 0 6 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M1 1.56L4 5.35L1 9.15" stroke="white" strokeWidth="2" />
						</svg>
					)}
				</React.Fragment>
			))}
		</nav>
	);
};

export default Breadcrumbs;
