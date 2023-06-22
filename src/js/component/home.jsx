import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { func } from "prop-types";

//create your first component
const Home = () => {
	
	const [glow,setGlow] = useState("")
	function changeColors(){
		if(glow==="" || glow==="yellow")return setGlow("red")
		else if (glow==="red") return setGlow("green")
		else return setGlow("yellow")
	}
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
			<div><button className="btn btn-dark" onClick={(changeColors)}> Change</button></div>
		</div>
		
	);
};

export default Home;
