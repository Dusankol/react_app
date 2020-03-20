import React from "react";
import "./Card.scss";


const Card = ({name,lastName,age}) => {

			return(
				<li >
					<span>Name: {name}</span>
					<span>Last Name: {lastName}</span>
					<span>Age: {age}</span>
				</li>
				)
			



}

export {Card}