import React from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/icons/logo.svg";
import { BrowserRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
function Header() {
	return (
		<BrowserRouter>
			<div className={styles.container}>
				<div>
					<img src={Logo} alt="logo" className={styles.logo} />
				</div>
				<div className={styles.tabContainer}>
					<HashLink to="#home" smooth className={styles.tab}>
						Home
					</HashLink>
					<HashLink to="#about" smooth className={styles.tab}>
						About
					</HashLink>
					<HashLink to="#skills" smooth className={styles.tab}>
						Skills
					</HashLink>
					<HashLink to="#projects" smooth className={styles.tab}>
						Projects
					</HashLink>
					<HashLink to="#contact" smooth className={styles.tab}>
						Contact
					</HashLink>
				</div>
				<button className={styles.downloadBtn}>Download Resume</button>
			</div>
		</BrowserRouter>
	);
}

export default Header;
