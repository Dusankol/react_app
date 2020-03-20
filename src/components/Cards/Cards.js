import React,{Fragment} from "react";
import "./Cards.scss";
import uuid from "react-uuid";

import {Card} from "./Card.js";

const Cards = ({data,openPopup}) =>{

	const renderCards = () => {

		return( 
		<ul className="cards">
			<li className="add_card" onClick={openPopup}>
				<span>+</span>
			</li>
			{data.map(card =><Card key={uuid()} name={card.name} lastName={card.lastName} age={card.age}/>)}
		</ul>
)
	}

		return(
			<Fragment>
				{renderCards()}
			</Fragment>
			)
		
}

export {Cards}