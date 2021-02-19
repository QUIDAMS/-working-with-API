import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/gotService.js';
import CharterPage from '../charterPage';

import './app.css';

 
export default class App extends Component {
  someChar = new GotService();

    constructor(){
        super();
        this.state = {
            view: true,
            selectedMenu: 'characters',
        }
    }
    
    changeViewRandomChar = () => {
        this.setState({view: !this.state.view})
    }

    onSelectedMenu = (field) => {
        this.setState({selectedMenu: field})
    }

    showCharterPage = () => {
        const arrCharacters = ['gender', 'born', 'died', 'culture'];
        const arrBooks = ['name', 'isbn', 'authors', 'numberOfPages', 'publisher', 'country', 'mediaType', 'released'];
        const arrHouses = ['name', 'region', 'coatOfArms', 'words'];
        const {selectedMenu} = this.state;
        let arr = []
        let getData;
        switch(selectedMenu) {
          case 'characters':
            arr = arrCharacters
            getData = this.someChar.getAllCharacters
            break
          case 'books':
            arr = arrBooks
            getData = this.someChar.getAllBooks
            break
          case 'houses':
            arr = arrHouses
            getData = this.someChar.getAllHouses
            break
        }
        return <CharterPage arr={arr} getData={getData} />
    }

    render(){
        const contentRandomChar = this.state.view ? <RandomChar/> : null;
        return (
            <> 
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
                    {this.showCharterPage()}
                   
                </Container>
            </>
        );
    }
};

 // <Row>
 //                        <Col md='6'>
 //                            <ItemList 
 //                                onSelectChar={this.onSelectChar}
 //                                getData={this.someChar.getAllBooks}
 //                            />
 //                        </Col>
 //                        <Col md='6'>
 //                            <CharDetails charDetails={this.state.currentChar}/>
 //                        </Col>
 //                    </Row>
 //                    <Row>
 //                        <Col md='6'>
 //                            <ItemList 
 //                                onSelectChar={this.onSelectChar}
 //                                getData={this.someChar.getAllHouses}
 //                            />
 //                        </Col>
 //                        <Col md='6'>
 //                            <CharDetails charDetails={this.state.currentChar}/>
 //                        </Col>
 //                    </Row>

