import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    color: #FFFFFF;
    text-align: center;
    background-color: #000000;
`;

const List = styled.ul`
    padding: 20px;
    margin: 0;
`;

const ListItem = styled.li`
    float: left;
    padding: 0;
    list-style-type: none;
`;

const ListLink = styled(NavLink)`
    color: #FFFFFF;
    margin: 0 15px;
    cursor: pointer;
    text-decoration: none;
`;

 const Header = () => {
    return(
    <HeaderContainer>
        <List>
            <ListItem>
              <ListLink  exact to="/">Home</ListLink>
            </ListItem>
            <ListItem>
              <ListLink  exact to="/cart">Cart</ListLink>
            </ListItem>
        </List>
        
    </HeaderContainer>
    )
 }

export default Header;
