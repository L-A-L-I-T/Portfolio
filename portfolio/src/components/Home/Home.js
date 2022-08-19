import React from "react";
import styles from "./Home.module.css";
import Avatar from "../../assets/images/avatar.svg";
import Badge from "../../assets/icons/badge.svg";
import CompleteBadge from "../../assets/icons/CompleteBadge.svg";
import Job from "../../assets/icons/job.svg";
import Problem from "../../assets/icons/problem.svg";
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
				<img src={Avatar} alt="avatar img" className={styles.avatar} />
			</div>
			<div className={styles.boxContainer}>
				<div className={styles.box}>
					<div>
						<img src={Badge} alt="" className={styles.badge} />
					</div>
					<div>
						<div className={styles.number}>1+</div>
						<div className={styles.belowText}>Years of Experience</div>
					</div>
				</div>
				<div className={styles.box}>
					<div>
						<img src={CompleteBadge} alt="" className={styles.badge} />
					</div>
					<div>
						<div className={styles.number}>5+</div>
						<div className={styles.belowText}>Completed Projects</div>
					</div>
				</div>
				<div className={styles.box}>
					<div>
						<img src={Problem} alt="" className={styles.badge} />
					</div>
					<div>
						<div className={styles.number}>1000+</div>
						<div className={styles.belowText}>Problems solved on DSA</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Home;
