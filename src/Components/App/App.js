// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
// STYLES
import Global from '../Styles/Global'
import { Wrapper, Icon } from '../Styles/Components'
// FILES
import leaf from '../images/leaf.svg'
// ICONS
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faUserTie, faReply, faCog } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebookF, faGithub, faLinkedinIn, faUserTie, faReply, faCog);

const Counter = styled.div`
	font-size: 50px;
	font-weight: bold;
`

const ClickIcon = styled.img`
	width: 50vmin;
	transition: all 0.1s ease;
	::selection {
		background-color: transparent;
	}
	:active {
		opacity: 0.5;
		transform: scale(0.9) rotate(3deg);
	}
	@media (min-width: 720px) {
		width: 30vmin;
	}
`

const Add = styled.div`
	display: none;
	position: absolute;
	bottom: 50vh;
	font-size: 10vmin;
	font-weight: bold;
	color: var(--color-decorative);
	::selection {
		background-color: transparent;
	}
	${props =>
		props.preview &&
		css`
			display: block;
			animation: mobileUp 0.7s both;
			@media (min-width: 720px) {
				animation: up 0.7s both;
			}
		`
	};
`

const Input = styled.input`
	width: 90vw;
	max-width: 300px;
	background-color: transparent;
	text-align: center;
	font-size: 30px;
	font-family: 'Ubuntu', sans-serif;
	font-weight: bold;
	border: none;
	border-bottom: 1px solid var(--color-decorative);
	outline: none;
	color: var(--color-primary);
	::placeholder {
		transition: all 0.2s ease-in-out;
		color: var(--color-decorative);
		opacity: 0.3;
	}

	:focus::placeholder {
		opacity: 0;
		transform: scale(0);
	}
`

class App extends Component {
	state = {
		counter: 0,
		add: 10,
		previewAdd1: false,
		previewAdd2: false,
		previewAdd3: false,
		previewAdd4: false,
		previewAdd5: false
	}

	handleClick = () => {
		this.setState({counter: this.state.counter + this.state.add})
		if (this.state.previewAdd1 === false) {
			this.setState({previewAdd1: true})
			setTimeout(() => {
				this.setState({previewAdd1: false})
			}, 700)
		}
		else if (this.state.previewAdd2 === false) {
			this.setState({previewAdd2: true})
			setTimeout(() => {
				this.setState({previewAdd2: false})
			}, 700)
		}
		else if (this.state.previewAdd3 === false) {
			this.setState({previewAdd3: true})
			setTimeout(() => {
				this.setState({previewAdd3: false})
			}, 700)
		}
		else if (this.state.previewAdd4 === false) {
			this.setState({previewAdd4: true})
			setTimeout(() => {
				this.setState({previewAdd4: false})
			}, 700)
		}
		else {
			this.setState({previewAdd5: true})
			setTimeout(() => {
				this.setState({previewAdd5: false})
			}, 700)
		}
	}

	handleKeyPress = (e) => {
		
		if (e.key === 'Enter') {
			// e.preventDefault();
			// this.setState({add: e.target.value});
			const value = e.target.value
			this.setState(
				() => {
					return {
						add: Number(value)
					};
				},
				() => {
					this.handleClick();
				}
			);
		}
	}

	render() {
		// window.addEventListener("keypress", this.handleClick)
		return (
			<>
				<Global />
				<Wrapper app>
					<Add preview={this.state.previewAdd1}>+{this.state.add}</Add>
					<Add preview={this.state.previewAdd2}>+{this.state.add}</Add>
					<Add preview={this.state.previewAdd3}>+{this.state.add}</Add>
					<Add preview={this.state.previewAdd4}>+{this.state.add}</Add>
					<Add preview={this.state.previewAdd5}>+{this.state.add}</Add>
					<Counter>{this.state.counter}</Counter>
					<ClickIcon src={leaf} alt="" onClick={this.handleClick}/>
					<Input type="number" placeholder="Zmień ilość" onKeyPress={this.handleKeyPress} />
					{/* <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
				</Wrapper>
			</>
		);
	}
}

export default App
