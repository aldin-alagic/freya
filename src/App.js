import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

import './App.scss';
import { Main } from './lib/style/generalStyles';
import SolutionCreate from './pages/SolutionCreate/SolutionCreate';
import Solution from './pages/Solution/Solution';
import Solutions from './pages/Solutions/Solutions';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

const App = () => {
	return (
		<ScrollToTop>
			<Header />
			<Main>
				<Switch>
					<Route path="/solutions/new" component={SolutionCreate} />
					<Route path="/solutions/:id" component={Solution} />
					<Route path="/solutions" component={Solutions} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
					<Route exact path="/" component={Home} />
				</Switch>
			</Main>
			<Footer />
		</ScrollToTop>
	);
};

export default App;
