import React, {Component} from 'react';
import './randomChar.css';
import GotService from '../../services/gotService.js';
import Spinner from '../spinner';
import Error from '../error';

export default class RandomChar extends Component {
    somePerson = new GotService();
    state = {
        randomCharacter: null,
        loading: true,
        error: false
    }

    onCharLoaded = (res) => {
        this.setState({randomCharacter: res, loading: false})
    }

    onError = (error) => {
        this.setState({error: true, loading: false})
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 4000)
    }

    updateChar = () => {
        const id = Math.floor(Math.random()* 500);
        this.somePerson.getCharacter(id)
            .then(this.onCharLoaded) // (res) => this.onCharLoaded(res)
            .catch(this.onError);        

    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
  

    render() {
        console.log('render');
        const {randomCharacter, loading, error} = this.state;
        const spinner = loading ? <Spinner /> : null;
        const errorMassage = error ? <Error /> : null;
        const content = !(loading || error) ? <View randomCharacter={randomCharacter}/> : null;
        return (
            <div className="random-block rounded">
                {errorMassage}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({randomCharacter}) => {
    const{name, gender, born, died, culture} = randomCharacter;

    return (
        <>
            <h4>Random Character: {randomCharacter.name ? randomCharacter.name : 'there is no data'} </h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{randomCharacter.gender ? randomCharacter.gender : 'there is no data'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{randomCharacter.born ?  randomCharacter.born : 'there is no data'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{randomCharacter.died ? randomCharacter.died : 'there is no data'}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{randomCharacter.culture ? randomCharacter.culture : 'there is no data'}</span>
                </li>
            </ul>
        </>
    )
}
