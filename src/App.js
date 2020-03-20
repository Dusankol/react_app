import React, {Component, Fragment} from 'react';
import "./App.scss";
import Popup from "./components/Popup/Popup";
import Form from "./components/Form/Form";


import {Header} from "./components/Header/Header";

import {Cards} from "./components/Cards/Cards";

class App extends Component {

	state = {

		data: [
		{
			name:"Peter",
			lastName: "Dinklage",
			age:50
		},
		{
			name:"Lena",
			lastName:"Headey",
			age:46
		},
		{
			name:"Emilia",
			lastName:"Clarke",
			age:33
		}

		],
		filteredData: [],

		openPopup: false
	}

	componentDidMount() {
		this.setState({
			filteredData: this.state.data
		})
	}

	componentDidUpdate(prevProps,prevState) {
		if(prevState.data.length !== this.state.data.length){
		this.setState({
			filteredData: this.state.data
		})
	}}



	filterData(searchResults){
		this.setState({
			filteredData: searchResults
		})
	}
	
	onPopupOpen(){
		this.setState({
			openPopup:true
		})
	}

	onPopupClose(){
		this.setState({
			openPopup:false
		})
	}

	onCardAdd(data) {
		this.setState({
			data: [
				...this.state.data,
				data
			],
			openPopup: false
		})
	}

	render() {
		const {header, data, filteredData, openPopup, popupClose}=this.state
		return (
			<Fragment>
				<Header black search data={data}
						onDataFilter={searchResults => this.filterData(searchResults)}>
					
				</Header>

			

				<Cards data={filteredData}
					   openPopup={() => this.onPopupOpen()}
				/>

				{openPopup && (
				 <Popup popupClose={() => this.onPopupClose()} title="Add new person">
				 	<Form onFormSubmit={data => this.onCardAdd(data)}/>
				 </Popup>)}
				
			</Fragment>
			)
	}

}

export default App;