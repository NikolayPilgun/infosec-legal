import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App: React.FC = () => {
	return (
		<div className={styles.app}>
			<Header />
			<main className={styles.mainContent}>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default App;
