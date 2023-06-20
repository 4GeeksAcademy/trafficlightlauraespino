import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center semaforo">
			<div className="sostenSemaforo"></div>
			<div  className="fondoSemaforo">
					<div className="luzRoja"></div>
					<div className="luzAmarilla"></div>
					<div className="luzVerde"></div>
			</div>
		</div>
	);
};

export default Home;
