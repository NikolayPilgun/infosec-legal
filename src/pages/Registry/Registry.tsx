import React from "react";
import styles from "./Registry.module.css";

const Registry: React.FC = () => {
	return (
		<div className={styles.registryContainer}>
			<h2>Registry of Certified Professionals</h2>
			<p>
				The Committee maintains a comprehensive registry of certified
				professionals in the field of information and legal security.
			</p>
			<p>
				This registry includes individuals who have successfully completed our
				rigorous certification process and maintain high standards of practice.
			</p>
			<h3>Registry Benefits</h3>
			<ul>
				<li>Verification of credentials and expertise</li>
				<li>Access to a network of qualified professionals</li>
				<li>Enhanced credibility in the industry</li>
			</ul>
			<h3>How to Join</h3>
			<p>
				If you are a professional interested in being listed in our registry,
				please visit our certification page for more details on the application
				process.
			</p>
			<p>For any questions regarding the registry, please contact us at:</p>
			<p>Email: registry@security-committee.org</p>
			<p>Phone: +7 (812) 240-9297</p>
		</div>
	);
};

export default Registry;
