import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import GotService from '../../services/gotService.js';
import CharDetails, {Field} from '../charDetails';
import RowBlock from '../rowBlock';


export default class CharterPage extends Component {
  someChar = new GotService();

	state = {
    currentItem: null,
  }

	onSelectItem = (elem) => {
		this.setState({currentItem: elem});
	}

	showListItems = (arr) => {
		return(
	  	arr.map((field) => <Field currentItem={this.state.currentItem} field={field} label={field} />) /* Field - это все this.props.children  для компонента charDetails */
		)
	}

	render(){
		const itemList = (
			<ItemList
	            	onSelectItem={this.onSelectItem}
	            	getData={this.props.getData}
	            	renderItem = {(item) => `${item.name} (${item.gender})`} //peндер ф-ия, позволяет вывести определенные поля
	    />
	  )

	  const charDetails = (
	  	<CharDetails currentItem={this.state.currentItem}>
	  		{this.showListItems(this.props.arr)}
	  	</CharDetails>
	  )

		return(
			<RowBlock 
				left={itemList} 
				right={charDetails}
			/>
		)
	}
}