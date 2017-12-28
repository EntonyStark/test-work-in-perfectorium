import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
import Button from './Button';

class MoviePage extends React.Component { 
	state = {
		videoId: localStorage.getItem('videoId'),
		videoUrl: 'https://www.youtube.com/embed/'
	}

	render = () => (
		<div >
			<iframe type="text/html" width="720" height="405" src={ this.state.videoUrl + this.state.videoId }  />
			<Link to={'/movie'}>
				<Button className="pull-right" 
						status="primary" 
						type="button"
						text="Back" />
			</Link>
		</div>
	)
}

export default MoviePage;