import React from "react";
import styles from "./About.module.css";
import AboutMe from "../../assets/images/aboutme.png";
function About({ handleOpen }) {
	return (
		<section className={styles.container} id="about">
			<div className={`col-4 col-sm-12 col-md-4 ${styles.imgDiv}`}>
				<img src={AboutMe} alt="my img" className={styles.img} />
			</div>
			<div className={`${styles.rightContainer} col-6`}>
				<div style={{ marginBottom: "10px" }}>
					<span className={styles.who}>who I am</span>
				</div>
				<div className={styles.aboutme}>About me</div>
				<div className={styles.description}>
					Hi! I’m Lalit Rajput, and I’m a Full stack developer who has passion
					for building clean web applications with intuitive functionality. I
					enjoy the process of turning ideas into reality using creative
					solutions. I’m always curious about learning new skills, tools, and
					concepts. In addition to working on various solo full stack projects,
					I have worked with creative teams, which involves daily stand-ups and
					communications, source control, and project management.
				</div>
				<div>
					<button className={styles.hireme} onClick={handleOpen}>
						Contact Me
					</button>
				</div>
			</div>
		</section>
	);
}

export default About;
