import React from "react";
import styles from "./Contact.module.css";
import Footer from "../Footer/Footer";
function Contact(props) {
	return (
		<section id="contact" className={styles.container}>
			<div className={styles.bottomContainer}>
				<Footer handleOpen={props.handleOpen} />
			</div>
		</section>
	);
}

export default Contact;
