import React, { Component } from 'react'
import styled from 'styled-components'
import NavBar from './NavBar';

const HeaderUnit = styled.div`
background-image: url('https://i.imgur.com/WKPOLId.jpg');
background-attachment: fixed;
height: 80vh;
background-size: cover;`

const HeaderContent = styled.div`
border: solid black 1px;
display: flex;
justify-content: center;
align-items: center;
height: 80vh;
h3{
	color: white;
}`


class Header extends Component {
	render() {
		return (
			<div>
				<HeaderUnit className="responsive">
					<HeaderContent >
						<h3> Hey, I'm Spencer. </h3>
					</HeaderContent>
				</HeaderUnit>
			</div>

		)
	}
}

export default Header 