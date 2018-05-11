import React, { Component } from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import Header from './Header'
import Projects from './Projects';
import About from './About';
import Footer from './Footer';

const ProjectStyled = styled.div`
display: flex;
flex-direction: row;`

const SingleProject = styled.div`
width: 50vw;
height: 45vh;
border: black solid 1px;`

class HomePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <About />
                <Projects />
                <Footer />
            </div>

        )
    }
}

export default HomePage