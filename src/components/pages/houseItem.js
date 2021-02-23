import React, {Component} from 'react';
import GotService from '../../services/gotService.js';
import ItemDetails, {Field} from '../itemDetails';


export default class HouseItem extends Component {
	someChar = new GotService();

	showListItems = () => {
	    const arrCharacter = ['name', 'region', 'words'];
			return(
		  	arrCharacter.map((field) => <Field field={field} label={field} />) /* Field - это все this.props.children  для компонента ItemDetails */
			)
		}
	render(){
		return(
			<ItemDetails 
				currentItemId={this.props.currentItem} 
				getData={this.someChar.getHouse}>
	  		{this.showListItems()}
	  	</ItemDetails>
		)
	}
} 

