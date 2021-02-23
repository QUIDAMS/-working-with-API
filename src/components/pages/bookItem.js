import React, {Component} from 'react';
import GotService from '../../services/gotService.js';
import ItemDetails, {Field} from '../itemDetails';


export default class BookItem extends Component {
	someChar = new GotService();

	showListItems = () => {
	    const arrBooks = ['name', 'isbn', 'authors', 'numberOfPages', 'publisher', 'country', 'mediaType', 'released'];
			return(
		  	arrBooks.map((field) => <Field field={field} label={field} />) /* Field - это все this.props.children  для компонента ItemDetails */
			)
		}
	render(){
		return(
			<ItemDetails currentItemId={this.props.currentItem} getData={this.someChar.getBook}>
	  		{this.showListItems()}
	  	</ItemDetails>
		)
	}
} 

