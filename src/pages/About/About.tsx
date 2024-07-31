import React from "react";
import Awards from "../../components/about/Awards";
import CheckSection from "../../components/about/CheckSection";
import Recognition from "../../components/about/Recognition";
import styles from "./About.module.css";

const About: React.FC = () => {
	return (
		<div className={styles.aboutContainer}>
			<CheckSection />
			<Awards />
			<Recognition />
		</div>
	);
};

export default About;
