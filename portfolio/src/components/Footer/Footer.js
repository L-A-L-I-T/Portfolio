import React from "react";
import styles from "./Footer.module.css";
import NewLetterIcon from "../../assets/icons/Newsletter.svg";
function Footer() {
	return (
		<div className={styles.container}>
			<div className="col-3" style={{ marginRight: "50px" }}>
				<h2 style={{ color: "#FFB742" }}>Lalit Rajput.</h2>
				<div>Creative designer & front-end developer</div>
				{/* <div>
					<span className={styles.icon}>
						<i
							class="bi bi-github"
							style={{ fontSize: "40px", color: "rgba(255,183,66, 0.6)" }}
						></i>
					</span>
					<span className={styles.icon}>
						<i
							class="bi bi-linkedin"
							style={{ fontSize: "40px", color: "rgba(255,183,66, 0.6)" }}
						></i>
					</span>
					<span className={styles.icon}>
						<i
							class="bi bi-twitter"
							style={{ fontSize: "40px", color: "rgba(255,183,66, 0.6)" }}
						></i>
					</span>
					<span className={styles.icon}>
						<i
							class="bi bi-instagram"
							style={{ fontSize: "40px", color: "rgba(255,183,66, 0.6)" }}
						></i>
					</span>
				</div> */}
			</div>
			<div className="col-3">
				<h5>Useful Links</h5>
				<p>Home</p>
				<p>About</p>
				<p>Skills</p>
				<p>Projects</p>
				<p>Contact</p>
			</div>
			<div className="col-3">
				<h5>Social Media</h5>
				<p>Github</p>
				<p>linkedin</p>
				<p>Instagram</p>
				<p>Twitter</p>
			</div>
			<div className="col-3">
				<h5>Newsletter</h5>
				<p>Enter your email and get notified about news, of.</p>
				<div className={styles.inputContainer}>
					<input className={styles.input} placeholder="Your email address" />
					<div className={styles.iconContainer}>
						<img src={NewLetterIcon} alt="icon" className={styles.icon} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
