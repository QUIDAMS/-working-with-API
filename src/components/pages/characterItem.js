import React, {Component} from 'react';
import GotService from '../../services/gotService.js';
import ItemDetails, {Field} from '../itemDetails';


export default class CharacterItem extends Component {
	someChar = new GotService();

	showListItems = () => {
	    const arrCharacter = ['name', 'gender', 'culture'];
			return(
		  	arrCharacter.map((field) => <Field field={field} label={field} />) /* Field - это все this.props.children  для компонента ItemDetails */
			)
		}
	render(){
		return(
			<ItemDetails currentItemId={this.props.currentItem} getData={this.someChar.getCharacter}>
	  		{this.showListItems()}
	  	</ItemDetails>
		)
	}
} 

