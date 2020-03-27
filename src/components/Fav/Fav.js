import React, {Component} from 'react';
import './Fav.scss';
import moreDet from '../../images/info.png';
import {Link} from 'react-router-dom';

class Fav extends Component{

	render() {
		const {missionName, flightNumber, launchYear, moreDetails, imageLink} = this.props;
		return (
			<div className="favy">
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
						<img src={moreDet} alt="more" />
					</div>
				</Link>
			</div>
		)
	}
}

export {Fav};