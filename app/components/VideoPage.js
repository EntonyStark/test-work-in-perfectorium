import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
import Button from './Button';
import { connect } from "react-redux";
import * as types from 'actions/index';

class MoviePage extends React.Component { 
	state = {
		videoUrl: 'https://www.youtube.com/embed/'
	}

	render = () => (
		<div >
			<iframe type="text/html" width="720" height="405" src={ this.state.videoUrl + this.props.urlData }  />
			<Link to={'/movie'}>
				<Button className="pull-right" 
						status="primary" 
						type="button"
						text="Back" />
			</Link>
		</div>
	)
}

const mapStateToProps = state => {
	return {
	  urlData: state.request,
	  dataArr: state.getArray
   };
};

export default connect(mapStateToProps, types)(MoviePage);