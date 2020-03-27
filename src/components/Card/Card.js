import React, {Component} from 'react';
import './Card.scss';
import moreDet from '../../images/info.png';
import favourites from '../../images/favourites.png';
import fav from '../../images/fav.png';
import {Link} from 'react-router-dom';

class Card extends Component{


	render() {
		const {missionName, flightNumber, launchYear, moreDetails, imageLink, addToFavourites, element} = this.props;
		return (
			<div className="card">
				<span>
					<strong>Flight number:</strong><br/> &rarr; {flightNumber} 
				</span>
				<span>
					<strong>Mission name:</strong><br/> &rarr; {missionName} 
				</span>
				<span>
					<strong>Year:</strong><br/> &rarr; {launchYear} 
				</span>
				<img src={imageLink} alt="link"/>
				<Link to="/preview">
					<div className="more" onClick={() => moreDetails(flightNumber)}>
						<img src={moreDet} alt="more"/>
					</div>
				</Link>
				<div className="fav" onClick={() => addToFavourites(element)}>
					<img src={element.favourite ? fav : favourites} alt="fav"/>
				</div>
			</div>
		)
	}
}

export {Card};