import React from 'react';
import { createStore } from 'redux';
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter } from "react-router-dom";
import Button from './Button';
import Input from './Input';
import reducer from 'redusers/index';
import Movie from 'components/VideoList';
import * as types from 'actions/index';
import MoviePage from './VideoPage';

class Header extends React.Component {
	state = {
		request: '',
		key: '&key=AIzaSyCW-HlEjZRDumINN-Amo7Uwjd_hERI4mok',
		someArr: []
	}

   	onChange = (event) => {
	  	this.setState({request: event.target.value.toLowerCase()});
	}

	changeVue = () => {
		
		return fetch(`https://content.googleapis.com/youtube/v3/search?q=${this.state.request}&maxResults=10&part=snippet${this.state.key}`)
	  	.then((response) => response.json())
	  	.then((data) => {
			let someArr = data.items;
			this.setState({
				someArr: someArr
			}, function() {
		  		this.props.newArray(this.state.someArr);
			});
	  	})
	  	.catch((error) => {
			console.error(error);
	  	});
	}

	render = () =>  (
		<header>
		    <div className="page-header">
				<h1>Enter some request <small> and choose from the list</small></h1>
			</div>
			<form className="padding-header" id="search-form" role="search">
				<div className="form-group input-group add-on">
					<Input className="form-control" 
							placeholder="Search" 
							type="text" 
							onChange= { this.onChange }  />
					<div className="input-group-btn">
						<Link to='/movie'>
							<Button className="glyphicon glyphicon-search" 
									status="default" 
									onClick = { this.changeVue } 
									type="submit" />
						</Link>
					</div>
				</div>
			</form>
		</header>
	)
}

const mapStateToProps = state => ({
	request: state.request,
    dataArr: state.newArray
})

export default connect(mapStateToProps, types)(Header);