import styles from "./App.module.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
function App() {
	return (
		<div className={styles.container}>
			<Header />
			<Home />
			<About />
			<Skills />
			<Project />
			<Contact />
		</div>
	);
}

export default App;
