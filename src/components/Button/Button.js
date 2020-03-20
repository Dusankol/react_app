import React from "react";
import "./Button.scss";

const Button = ({children,type,click}) => {
	const getClasses = () => {
		if(type==="error"){
			return "red"
		}
		if(type==="success"){
			return "green"
		}
		else{
			return "";
		}
	}

	return(
			<button className={`button ${getClasses()}`} onClick={() => click()}>{children}</button>
		)
}

export default Button;