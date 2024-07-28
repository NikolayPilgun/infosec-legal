import React from "react";
import styles from "./Activity.module.css";

const Activity: React.FC = () => {
	return (
		<div className={styles.activityContainer}>
			<h2>Our Activities</h2>
			<p>
				The Committee for Information and Legal Security engages in a wide range
				of activities to promote and ensure data protection and security.
			</p>
			<p>
				We work on developing security policies, providing training and
				certification for security professionals, conducting research, and much
				more.
			</p>
			<h3>Key Activities</h3>
			<ul>
				<li>
					Policy Development: Creating and implementing robust security
					policies.
				</li>
				<li>
					Training Programs: Organizing training sessions for professionals in
					the field.
				</li>
				<li>
					Research: Conducting in-depth research on emerging security threats.
				</li>
				<li>
					Consulting: Offering expert consulting services for organizations.
				</li>
			</ul>
			<h3>Upcoming Events</h3>
			<p>
				We regularly organize events, workshops, and seminars to educate and
				raise awareness about information security. Stay tuned for our upcoming
				events!
			</p>
			<p>
				For more details about our activities and how you can participate,
				please visit our events page or contact us.
			</p>
			<p>Email: events@security-committee.org</p>
			<p>Phone: +7 (812) 240-9297</p>
		</div>
	);
};

export default Activity;
