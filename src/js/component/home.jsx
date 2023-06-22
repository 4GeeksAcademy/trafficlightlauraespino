import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	const [glow,setGlow] = useState("")

	return (
		<div className="text-center semaforo">
			<div className="sostenSemaforo"></div>
			<div  className="fondoSemaforo">
				<div className={`red ${glow === "red" ? "glow" : ""}`} 
					onClick={() => {setGlow("red")}}>
				</div>
				<div className={`yellow ${glow === "yellow" ? "glow" : ""}`} 
						onClick={() => {setGlow("yellow")}}>
				</div>
				<div className={`green ${glow === "green" ? "glow" : ""}`} 
						onClick={() => {setGlow("green")}}>
				</div>
			</div>
		</div>
	);
};

export default Home;
