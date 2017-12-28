import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter} from "react-router-dom";
import Header from 'components/Header';
import Movie from 'components/VideoList';
import * as actions from 'actions/index';

class App extends React.Component {
   	constructor(props) {
	  	super(props);
	  	this.state = {
	  	}
   	}
   	render() {
		return (
			<Router>
			  	<div>
				  	<Header />
					<Switch>
					  	<Route path='/movie' component={Movie} />
					</Switch>
				</div>
			</Router>
	  	);
   	}
}

const mapStateToProps = state => {
   return {
	  request: state.request,
	  dataArr: state.getArr
   };
};

const mapDispatchToProps = dispatch => {
   return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);