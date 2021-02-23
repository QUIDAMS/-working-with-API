import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import GotService from '../../services/gotService.js';
import {CharacterPage, HousesPage, BooksPage, BookItem, CharacterItem, HouseItem} from '../pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './app.css';

 
export default class App extends Component {
  someChar = new GotService();

    constructor(){
        super();
        this.state = {
            view: true,
        }
    }
    
    changeViewRandomChar = () => {
        this.setState({view: !this.state.view})
    }


    render(){
        const contentRandomChar = this.state.view ? <RandomChar/> : null;
        
        return (
            <> 
                <Router>
                        <div className='app'>
                        <Container>
                            <Header onSelectedMenu={this.onSelectedMenu}/>
                        </Container>
                        <Container>
                            <Row>
                                <Col lg={{size: 5, offset: 0}}>
                                    {contentRandomChar}
                                </Col>
                            </Row>
                            <button className="blue" onClick={this.changeViewRandomChar}>Скрыть</button>
                                    <Route path='/' exact />
                                    <Route path='/characters' exact component={CharacterPage}/>
                                    <Route path='/books' exact component={BooksPage}/>
                                    <Route path='/houses' exact component={HousesPage}/>
                                    <Route path='/books/:id'  render={
                                        ({match}) => {
                                            const {id} = match.params;
                                            return <BookItem currentItem={id}/>
                                        }
                                    }/>
                                    <Route path='/characters/:id'  render={
                                        ({match}) => {
                                            const {id} = match.params;
                                            return <CharacterItem currentItem={id}/>
                                        }
                                    }/>
                                    <Route path='/houses/:id'  render={
                                        ({match}) => {
                                            const {id} = match.params;
                                            return <HouseItem currentItem={id}/>
                                        }
                                    }/>
                        </Container>
                    </div>
                </Router>
            </>
        );
    }
};
