import React from "react";
import Awards from "../../components/about/Awards";
import CheckSection from "../../components/about/CheckSection";
import FAQ from "../../components/about/FAQ/FAQ";
import MapComponent from "../../components/about/MainComponent";
import Recognition from "../../components/about/Recognition";
import ReviewSlider from "../../components/about/reviews/ReviewSlider";
import styles from "./About.module.css";

const About: React.FC = () => {
	return (
		<div className={styles.aboutContainer}>
			<CheckSection />
			<Awards />
			<Recognition />
			<MapComponent />
			<ReviewSlider />
			<FAQ />
		</div>
	);
};

export default About;
