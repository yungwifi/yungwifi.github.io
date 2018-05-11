import React, { Component } from 'react'
import styled from 'styled-components'

const NavStyle = styled.div`
display: flex;
align-items: center;
box-shadow: 0px 3px 2px rgba(0,0,0,0.5);
justify-content: space-around;
position: relative;
font-family: 'Fjalla One', sans-serif;
a:hover{
    color: #D0B682;
}`

class NavBar extends Component {
    render() {
        return (
            <NavStyle >
                <a href="#projects"> Projects </a>
                <a href="#resume"> Resume </a>
                <h4> Spencer Merryman </h4>
                <a href="#about"> About </a>
                <a href="#contact"> Contact </a>
            </NavStyle>
        )
    }
}

export default NavBar