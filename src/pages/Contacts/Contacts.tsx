import React from "react";
import styles from "./Contacts.module.css";

const Contacts: React.FC = () => {
	return (
		<div className={styles.contactsContainer}>
			<h2>Contact Us</h2>
			<p>
				We are here to assist you with any inquiries you may have. Please feel
				free to reach out to us through the following contact channels:
			</p>
			<h3>Head Office</h3>
			<p>
				123 Security Blvd, Suite 400
				<br />
				Saint Petersburg, Russia
			</p>
			<h3>Email</h3>
			<p>
				General Inquiries: info@security-committee.org
				<br />
				Support: support@security-committee.org
			</p>
			<h3>Phone</h3>
			<p>
				Main Office: +7 (812) 240-9297
				<br />
				Support Line: +7 (812) 240-9298
			</p>
			<h3>Business Hours</h3>
			<p>
				Monday - Friday: 9 AM - 6 PM
				<br />
				Saturday & Sunday: Closed
			</p>
		</div>
	);
};

export default Contacts;
