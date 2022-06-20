import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Skills.module.css";
import {
	CircularProgressbar,
	buildStyles,
	CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Skills() {
	const [data, setData] = useState();
	const fetchData = async () => {
		await axios
			.get("https://leetcode-stats-api.herokuapp.com/lrrajput2001")
			.then((response) => {
				setData(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		fetchData();
	}, []);
	return (
		<section id="skills" className={styles.container}>
			<div className={styles.title}>Leetcode Profile</div>
			<div className={styles.questionSolved}>
				Total Questions Solved :{" "}
				<span style={{ color: "#FFB742" }}>{data?.totalSolved}</span>
			</div>
			<div className={styles.progressContainer}>
				<div className={styles.progress}>
					<CircularProgressbarWithChildren
						value={data?.easySolved}
						maxValue={data?.totalEasy}
						styles={buildStyles({
							pathTransitionDuration: 0.5,
							transition: "stroke-dashoffset 0.5s ease 0s",
							textSize: "14px",
							pathColor: "#00b8a3",
							trailColor: "rgba(0, 184, 163, 0.1)",
						})}
					>
						<div>
							<span style={{ fontSize: "45px", color: "#00b8a3" }}>
								{data?.easySolved}
							</span>
							/{data?.totalEasy}
						</div>
					</CircularProgressbarWithChildren>
					<p style={{ fontSize: "20px", color: "#00b8a3" }}>Easy</p>
				</div>
				<div className={styles.progress}>
					<CircularProgressbarWithChildren
						value={data?.mediumSolved}
						maxValue={data?.totalMedium}
						styles={buildStyles({
							textSize: "14px",
							trailColor: "rgba(255,183,66, 0.1)",
							pathColor: "rgb(255,183,66)",
						})}
					>
						<div>
							<span style={{ fontSize: "45px", color: "#FFB742" }}>
								{data?.mediumSolved}
							</span>
							/{data?.totalMedium}
						</div>
					</CircularProgressbarWithChildren>
					<p style={{ fontSize: "20px", color: "#FFB742" }}>Medium</p>
				</div>
				<div className={styles.progress}>
					<CircularProgressbarWithChildren
						value={data?.hardSolved}
						maxValue={data?.totalHard}
						styles={buildStyles({
							textSize: "14px",
							pathColor: "#ef4743",
							trailColor: "rgba(239, 70, 67, 0.1)",
						})}
					>
						<div>
							<span style={{ fontSize: "45px", color: "#ef4743" }}>
								{data?.hardSolved}
							</span>
							/{data?.totalHard}
						</div>
					</CircularProgressbarWithChildren>
					<p style={{ fontSize: "20px", color: "#ef4743" }}>Hard</p>
				</div>
			</div>
		</section>
	);
}

export default Skills;
