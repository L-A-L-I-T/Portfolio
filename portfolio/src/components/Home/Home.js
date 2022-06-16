import React from "react";
import styles from "./Home.module.css";
import Avatar from "../../assets/images/avatar.svg";
function Home() {
	return (
		<section className={styles.container} id="home">
			<div className={styles.topText}>
				Hi, I Am{" "}
				<span style={{ color: "#FFB742", textDecoration: "underline" }}>
					Lalit Rajput
				</span>{" "}
				👋
			</div>
			<div className={styles.profession}>Full Stack Developer</div>
			<div className={styles.bottomText}>
				I design and code beautifully simple things, and I love what I do.
			</div>
			<div>
				<img src={Avatar} alt="avatar img" />
			</div>
		</section>
	);
}

export default Home;
