import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/icons/logo.svg";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Header() {
	const [activeSection, setActiveSection] = useState("home");

	const listenScrollEvent = () => {
		const windowHeight = window.innerHeight;
		console.log(windowHeight);
		// window.scrollY >= 4 * windowHeight
		// 	? setActiveSection("contact")
		// 	: window.scrollY >= 3 * windowHeight
		// 	? setActiveSection("projects")
		// 	: window.scrollY >= 2 * windowHeight
		// 	? setActiveSection("skills")
		// 	: window.scrollY >= 1 * windowHeight
		// 	? setActiveSection("about")
		// 	: setActiveSection("home");
		window.scrollY > 10
			? setActiveSection("about")
			: setActiveSection("skills");
	};
	useEffect(() => {
		const windowHeight = window.innerHeight;
		console.log(windowHeight);
		window.addEventListener("scroll", listenScrollEvent);
		console.log(activeSection);
	});
	return (
		<BrowserRouter>
			<div className={styles.container}>
				<div>
					<img src={Logo} alt="logo" className={styles.logo} />
				</div>
				<div className={styles.tabContainer}>
					<HashLink
						to="#home"
						smooth
						className={styles.tab}
						style={{ color: activeSection === "home" ? "#FFB742" : "white" }}
					>
						Home
					</HashLink>
					<HashLink
						to="#about"
						smooth
						className={styles.tab}
						style={{ color: activeSection === "about" ? "#FFB742" : "white" }}
					>
						About
					</HashLink>
					<HashLink
						to="#skills"
						smooth
						className={styles.tab}
						style={{ color: activeSection === "skills" ? "#FFB742" : "white" }}
					>
						Skills
					</HashLink>
					<HashLink
						to="#projects"
						smooth
						className={styles.tab}
						style={{
							color: activeSection === "projects" ? "#FFB742" : "white",
						}}
					>
						Projects
					</HashLink>
					<HashLink
						to="#contact"
						smooth
						className={styles.tab}
						style={{ color: activeSection === "contact" ? "#FFB742" : "white" }}
					>
						Contact
					</HashLink>
				</div>
				<button className={styles.downloadBtn}>Download Resume</button>
			</div>
		</BrowserRouter>
	);
}

export default Header;
