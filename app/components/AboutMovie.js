import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter } from "react-router-dom"
import reducer from 'redusers/index';
import Button from './Button';
import Item from './VideoItem';
import MoviePage from './VideoPage';
import * as types from 'actions/index';
import { connect } from "react-redux";
 
class aboutMovie extends React.Component {
	state = {
		videoId: '',
		videoUrl: 'https://www.youtube.com/embed/'
	}

	render = () => (
		<div className="box-header">
			{
				this.props.dataArr.map((element, index) => {
					return <Item 
						key={index}
						id={element.id.videoId}
						onClick={ () => ( this.props.newRequest(element.id.videoId) ) } // в данном случае в localStorage помещается id 
						description={element.snippet.description}                                 // и мы можем его в дальнейшем использовать для любых целей
						src={element.snippet.thumbnails.default.url}                              // т.к. reduser хранит массив c сервера
						title={element.snippet.title}
						data={element.snippet.publishedAt}
					/>;
				})
			}
		</div>
	)
}

const mapStateToProps = state => {
	return {
	  urlData: state.request,
	  dataArr: state.getArray
   };
};

export default connect(mapStateToProps, types)(aboutMovie);