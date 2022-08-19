import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Skills.module.css";
import {
	CircularProgressbar,
	buildStyles,
	CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//? Importing Logos
import C from "../../assets/logos/C.png";
import Cpp from "../../assets/logos/cpp.png";
import ReactLogo from "../../assets/logos/react.svg";
import JavaScript from "../../assets/logos/javascript.svg";
import Node from "../../assets/logos/node.svg";
import Git from "../../assets/logos/git.svg";
import Github from "../../assets/logos/github.svg";
import Sql from "../../assets/logos/sql.svg";
import MongoDb from "../../assets/logos/mongodb.svg";
import Html from "../../assets/logos/html5.svg";
import Css from "../../assets/logos/css.svg";
import Bootstrap from "../../assets/logos/bootstrap.svg";

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
			<div className={styles.leftDiv}>
				<span className={styles.skills}>My skills</span>
				<div className={styles.leftDivTitle}>
					What My Programming Skills Included?
				</div>
				<div className={styles.logoContainer}>
					<div className={styles.logoDiv}>
						<img src={C} alt="c" width="50" />
					</div>
					<div className={styles.logoDiv}>
						<img src={Cpp} alt="cpp" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={Html} alt="Html" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={Css} alt="css" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={Bootstrap} alt="Bootstrap" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={JavaScript} alt="JavaScript" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={Git} alt="Git" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={Github} alt="Github" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={ReactLogo} alt="reactLogo" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={Node} alt="Node" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={Sql} alt="Sql" className={styles.logoImg} />
					</div>
					<div className={styles.logoDiv}>
						<img src={MongoDb} alt="MongoDb" className={styles.logoImg} />
					</div>
				</div>
			</div>
			<div className={styles.codingProfileDiv}>
				<div className={styles.title}>
					Leetcode Profile :{" "}
					<a
						href="https://leetcode.com/lrrajput2001/"
						className={styles.link}
						target="_blank"
						rel="noreferrer"
					>
						lrrajput2001
					</a>
				</div>
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
								<span style={{ color: "#00b8a3" }} className={styles.ques}>
									{data?.easySolved}
								</span>
								/{data?.totalEasy}
							</div>
						</CircularProgressbarWithChildren>
						<p style={{ color: "#00b8a3" }} className={styles.quesType}>
							Easy
						</p>
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
								<span style={{ color: "#FFB742" }} className={styles.ques}>
									{data?.mediumSolved}
								</span>
								/{data?.totalMedium}
							</div>
						</CircularProgressbarWithChildren>
						<p style={{ color: "#FFB742" }} className={styles.quesType}>
							Medium
						</p>
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
								<span style={{ color: "#ef4743" }} className={styles.ques}>
									{data?.hardSolved}
								</span>
								/{data?.totalHard}
							</div>
						</CircularProgressbarWithChildren>
						<p style={{ color: "#ef4743" }} className={styles.quesType}>
							Hard
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Skills;
