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
      	onSelectItem={this.onSelectItem}
				page='houses'
      	getData={this.someChar.getAllHouses}
      	renderItem = {(item) => `${item.name} (${item.region})`} //peндер ф-ия, позволяет вывести определенные поля
	    />
		)
	}
}