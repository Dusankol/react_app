import React from "react";
import "./Header.scss";
import {Search} from "../Search/Search"

import logo from "../../images/logo.png";

const Header = ({black,search, data, onDataFilter}) => {

	const renderSearch = () => {
		if(search){
			return <Search data={data} onDataFilter={onDataFilter}/>;}
			return null;
		}
	

	return(
		<header className={`header ${black? "black" : ""}`}>
			<img className="logo" src={logo}/>
			{renderSearch()}
			
		</header>

		)
}

export {Header};