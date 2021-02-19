import React, {Component} from 'react';
import Spinner from '../spinner';

import './itemList.css';

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: null
        }
    }

    getData() {
        const {getData} = this.props;
        getData() // заменим getAllCharacters на универсальную для нескольких данных
            .then((listItem) => {
            this.setState({
                listItem
            })
        })
    }

    componentDidMount(){
        this.getData();
    }

    componentDidUpdate(prevProps) {
        const {getData} = this.props;
        if (prevProps.getData !== getData) {
            this.getData();
        }
    }
 
    renderItems(arr){
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li 
                    key={id} 
                    className="list-group-item"
                    onClick={() => this.props.onSelectItem(item)}
                >
                    {label}
                </li>
            )
        })
    }
    render() {
        const {listItem} = this.state;

        if(!listItem){
           return <Spinner />
        }
        const allItems = this.renderItems(listItem);
        return (
            <ul className="item-list list-group">
                {allItems}
            </ul>
        );
    }
}