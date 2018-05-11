import React, { Component } from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
display: flex;
justify-content: center;
border: solid black 1px;
width: 100vw;
height: 45vh;`

class Footer extends Component {
    render() {
        return (
            <div id="contact">
                <FooterStyle >
                    <div>
                        Big fat footer dicks
                    </div>
                </FooterStyle>
            </div>
        )
    }
}

export default Footer