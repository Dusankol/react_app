import React,{Component} from "react";
import "./Form.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";

class Form extends Component{

	state = {
		name: "",
		lastName: "",
		age: ""
	}

	onInputChange = (value,name) => {
		this.setState({
			[name]: value
		})
	}

	onFormClear = () => {
		this.setState({
			name: "",
			lastName: "",
			age: ""
		})
	}


	render(){

		const {name,lastName,age}=this.state;
		const {onFormSubmit}=this.props;
		return(
				<section className="form">

					<Input 
					type="text"
					 name="name" 
					 label="Name" 
					 value={name} 
					 onInputChange={(value,name) => this.onInputChange(value,name)} />
					<Input 
					type="text" 
					name="lastName" 
					label="Last Name" 
					value={lastName} 
					onInputChange={(value,name) => this.onInputChange(value,name)}/>
					<Input 
					type="number" 
					name="age" 
					label="Age"
					value={age}
					 onInputChange={(value,name) => this.onInputChange(value,name)}/>
					
					<section className="action-container">
						<Button type="error" click={() => this.onFormClear()}>Cancel</Button>
						<Button type="success" click={() => onFormSubmit({...this.state})}>Submit</Button>
					</section>
				</section>
			)
	}
}

export default Form;