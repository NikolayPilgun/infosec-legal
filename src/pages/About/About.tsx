import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
	return (
		<div className={styles.aboutContainer}>
			<h2>About the Committee</h2>
			<p>
				The Committee for Information and Legal Security is dedicated to
				establishing and maintaining high standards of security and privacy.
			</p>
			<p>
				Our mission is to ensure that personal data is protected according to
				national and international standards. We provide certification for
				experts and organizations in the field of personal data protection.
			</p>
			<h3>Goals and Objectives</h3>
			<ul>
				<li>Develop and implement security policies</li>
				<li>Provide training and certification for security professionals</li>
				<li>Conduct research and analysis on security threats</li>
			</ul>
			<h3>Our Team</h3>
			<p>
				Our team consists of highly qualified professionals with vast experience
				in information and legal security.
			</p>
			<h3>Contact Information</h3>
			<p>For more information, please contact us at:</p>
			<p>Email: info@security-committee.org</p>
			<p>Phone: +7 (812) 240-9297</p>
		</div>
	);
};

export default About;
