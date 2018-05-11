import React, { Component } from 'react'
import styled from 'styled-components'
import { Modal } from 'react-materialize'

const ProjectStyled = styled.div`
display: flex;
flex-direction: row;
width: 100vw;
@media (max-width: 600px){
    flex-direction: column;
}`

const SingleProject = styled.div`
width: 50vw;
height: 45vh;
border: black solid 1px;
@media (max-width: 600px){
    width: 100vw;
    height: 45vh;
}
button{
 display: flex;
 justify-content: center; 
}`

class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <ProjectStyled >
                    <SingleProject >
                        <div>
                            <h5> Simon Game </h5>
                            <Modal
                                header='Simon Game'
                                fixedFooter
                                trigger={<button>About The App</button>}>
                                <a href="https://github.com/yungwifi/Simon-Game" target="_blank" > <button> Github </button> </a>
                                <a href="http://mystifying-pike-735652.bitballoon.com/" target="_blank" > <button> App </button> </a>
                                <br />
                                Memory game built with JavaScript, jQuery, CSS, Materialize, and HTML.
                            </Modal>
                        </div>
                    </SingleProject>
                    <SingleProject >
                        <div>
                            <h5> Beer Reviews </h5>
                            <Modal
                                header='Beer Reviews'
                                fixedFooter
                                trigger={<button>About The App</button>}>
                                <a href="https://github.com/yungwifi/Beer-Reviews" target="_blank" > <button> Github </button> </a>
                                <a href="https://floating-brook-71807.herokuapp.com/" target="_blank" > <button> App </button> </a>
                                <br />
                                Beer Reviews is an application that helps beer drinkers keep track of their favorite beers or not
                                so favorite beers. It is also a good way to keep track of the bars you have visited and how you enjoyed
                                your time there.
                            </Modal>
                        </div>
                    </SingleProject>
                </ProjectStyled>
                <ProjectStyled>
                    <SingleProject >
                        <div>
                            <h5> Secret Spot </h5>
                            <Modal
                                header='Secret Spots'
                                fixedFooter
                                trigger={<button>About The App</button>}>
                                <a href="https://github.com/yungwifi/secret-spot" target="_blank" > <button> Github </button> </a>
                                <a href="https://sheltered-hamlet-19901.herokuapp.com/" target="_blank" > <button> App </button> </a>
                                <br />
                                Secret Spot is an application very similar to Instagram but targeted specifically to Skateboarders,
                                BMX riders, and extreme sports enthusiasts alike. The apps purpose is to give these athletes an
                                opportunity to share their street spots for other to enjoy. This app allows
                                users to create a profile, share their photos, and share the skate spots they either frequent or stumbled
                                upon accidentally.
                            </Modal>
                        </div>
                    </SingleProject>
                    <SingleProject >
                        <div>
                            <h5> Fischcenter Live  </h5>
                            <Modal
                                header='Fischcenter Live'
                                fixedFooter
                                trigger={<button>About The App</button>}>
                                Project 4 Description
                            </Modal>
                        </div>
                    </SingleProject>
                </ProjectStyled>
            </div>

        )
    }
}

export default Projects