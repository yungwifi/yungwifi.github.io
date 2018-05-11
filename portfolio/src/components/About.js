import React, { Component } from 'react'
import styled from 'styled-components'

const AboutStyled = styled.div`
width: 100vw;
height: 60vh;
border: solid black 1px;
display: flex;
align-items: center;
p, h5{
    width: 55vw;
    display: flex;
    align-content: left;
    margin-left: 60px;
    @media (max-width: 600px){
        font-size: 12px;
        width: 90vw;
        margin-left: 10px;
    }
    }
}`

class About extends Component {
    render() {
        return (
            <div id="about">
                <AboutStyled >
                    <div>
                        <h5> About Me </h5>
                        <p>
                            I am a full stack developer with a passion for backend development.
                            I have an expert level of knowledge in front end development using my preferred front end framework, React.
                            As well as an expert level of knowledge using Express and MongoDB as my Controller and Model.
                            My code is always consistent, clean, easy to read, and occasionally includes a commented out joke for anyone picking up after me.
                            I work well with others, learn fast, and have exceptional communication skills when helping a team mate through a difficult problem.
                            But all of that could just be talk, the proof is in the pudding, or in this case my GitHub. Check it out and give me your feedback.
                        </p>
                    </div>
                </AboutStyled>
            </div>

        )
    }
}

export default About