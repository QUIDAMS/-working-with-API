import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;

const Header = ({onSelectedMenu}) => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <a href="#">
                Game of Thrones DB
                </a>
            </HeaderTitle>
            <HeaderLinks>
                <li>
                    <a href="#" onClick={(field) => onSelectedMenu(field = 'characters')}>Characters</a>
                </li>
                <li>
                    <a href="#" onClick={(field) => onSelectedMenu(field = 'houses')}>Houses</a>
                </li>
                <li>
                    <a href="#" onClick={(field) => onSelectedMenu(field = 'books')}>Books</a>   
                </li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;