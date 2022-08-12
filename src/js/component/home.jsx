import React from "react";
import Semaforo from "./Semaforo/Semaforo.jsx"
import "../../styles/index.css"

//create your first component
const Home = () => {
	return (
		<div className="m-5 bg-secondary containerSize">
			<Semaforo/>
		</div>
	);
};

export default Home;
