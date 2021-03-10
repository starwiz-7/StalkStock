import React from "react";
import { Link } from "react-router-dom";

export default class page404 extends React.Component {
	render() {
		return (
			<div className="page404">
				<h1>Page not Found :(</h1>
				<Link to="/dashboard">
					<button type="submit" className="header__button-register">
						Back to DASHBOARD
					</button>
				</Link>
			</div>
		);
	}
}
