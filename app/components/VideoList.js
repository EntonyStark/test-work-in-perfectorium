import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
import MoviePage from './VideoPage';
import aboutMovie from './AboutMovie';


class Movie extends React.Component {

	render = () => (
		<div>
			<aboutMovie />
			<Switch>
			  	<Route exact path='/movie' component={aboutMovie} />
			  	<Route path='/movie/:id' component={MoviePage} />
			</Switch>
		</div>
	)
}

export default Movie;