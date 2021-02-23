import React, {Component} from 'react';
import GotService from '../../services/gotService.js';
import Spinner from '../spinner';
import PropTypes from 'prop-types';
import './itemDetails.css';

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

export default class ItemDetails extends Component {
    someChar = new GotService();

    state = {
       currentItem: null
    }

    render() {
        const {getData, currentItemId} = this.props;
        getData(currentItemId)
            .then((elem) => {
                this.setState({currentItem: elem})
            })

        const {currentItem} = this.state;
        if(!currentItem){
           return (
                <div className="char-details rounded">
                    <p className="itemDetails-text">Выберете любой пункт из левой колонки</p>
                </div>
            )
        }
        const {name} = this.state.currentItem;
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { currentItem: this.state.currentItem }) //клонируем каждого ребенка и добавляем ему данные currentItem
                        })
                    }
                </ul>
            </div>
        );
    }
}

ItemDetails.propTypes = {
  currentItemId: PropTypes.number.isRequired,
  getData: PropTypes.func.isRequired
};

