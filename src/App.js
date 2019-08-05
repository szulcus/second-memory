// BASIC
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// PAGES
import MainApp from './Components/App/App'
import NotFoundPage from './Components/404/404'

function App() {
return (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={MainApp}/>
			<Route exact component={NotFoundPage}/>
		</Switch>
	</BrowserRouter>
);
}

export default App;
