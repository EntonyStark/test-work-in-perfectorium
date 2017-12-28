import React from "react";
import moment from 'moment';
import { BrowserRouter as Router, Route, Link, Switch, NavLink, Redirect, withRouter } from "react-router-dom"

const Item = ({onClick, src, title, description, date, id}) => (
	<div>
		<div className="box">
			<div className="pull-left">
				<Link to={`/movie/${id}`}>
					<img className="img-thumbnail" onClick={ onClick } src={ src }  />
				</Link>
			</div>
			<div className="box-ins">
				<h3>
					{ title }<small><em>{moment({ date }).format('DD-MMM-YY')}</em></small>
				</h3>
				<p>{ description }</p>
			</div>
		</div>
		<hr />
	</div>
);

export default Item;