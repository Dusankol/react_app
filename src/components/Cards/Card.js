import React,{Fragment} from "react";
import "./Card.scss";
import Button from "../Button/Button"


const Card = ({name,lastName,age}) => {

			return(
				<Fragment>
				<li >
					<span>Name: {name}</span>
					<span>Last Name: {lastName}</span>
					<span>Age: {age}</span>
					
				</li>
				
				</Fragment>
				)
			



}

export {Card}