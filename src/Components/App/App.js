// BASIC
import React, { Component } from 'react'
import styled, { css } from 'styled-components'
// STYLES
import Global from '../Styles/Global'
import { Wrapper } from '../Styles/Components'


const Counter = styled.div`
	color: var(--color-highlighted);
	font-size: 30vmin;
	font-weight: bold;
	::selection {
		background-color: transparent;
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
			animation: up 0.7s both;
		`
	};
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
		this.setState({counter: this.state.counter + 10})
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

	render() {
		return (
			<>
				<Global />
				<Wrapper app onClick={this.handleClick}>
					<Add preview={this.state.previewAdd1}>+{this.state.add}</Add>
					<Add preview={this.state.previewAdd2}>+{this.state.add}</Add>
					<Add preview={this.state.previewAdd3}>+{this.state.add}</Add>
					<Add preview={this.state.previewAdd4}>+{this.state.add}</Add>
					<Add preview={this.state.previewAdd5}>+{this.state.add}</Add>
					<Counter>{this.state.counter}</Counter>
				</Wrapper>
			</>
		);
	}
}

export default App
