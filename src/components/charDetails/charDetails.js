import React, {Component} from 'react';
import GotService from '../../services/gotService.js';
import Spinner from '../spinner';

import './charDetails.css';

const Field = ({currentItem, label, field}) => {
    return(
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{currentItem[field]}</span>
        </li>
    )
}
export {
    Field
}

export default class CharDetails extends Component {
    someChar = new GotService();

    render() {
        console.log('children', this.props.children)

        const {currentItem} = this.props;
        if(!currentItem){
           return (
                <div className="char-details rounded">
                    <p className="charDetails-text">Нажмите на героя из левой колонки</p>
                </div>
            )
        }
        const {name} = currentItem;
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { currentItem }) //клонируем каждого ребенка и добавляем ему данные currentItem
                        })
                    }
                </ul>
            </div>
        );
    }
}

