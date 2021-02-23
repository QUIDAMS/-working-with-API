import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import GotService from '../../services/gotService.js';
import ItemDetails, {Field} from '../itemDetails';
import RowBlock from '../rowBlock';


export default class CharterPage extends Component {
  someChar = new GotService();

	render(){
		return(
			<ItemList
      	getData={this.someChar.getAllBooks}
      	page='books'
      	renderItem = {(item) => `${item.name} (${item.authors})`} //peндер ф-ия, позволяет вывести определенные поля
	    />
		)
	}
}