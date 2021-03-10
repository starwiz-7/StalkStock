import React from "react";
import { logout } from "../auth";
import { Link } from "react-router-dom";

export default class Leftbar extends React.Component {
	constructor() {
		super();
		this.state = {
			theme: "dark",
			color: "#ddd",
			portfolioColor: "#ddd",
			bookmarkColor: "#ddd",
		};
		this.status = React.createRef();
	}
	componentDidMount() {
		let theme = localStorage.getItem("theme");
		if (theme !== null) {
			this.setState({ theme });
		} else {
			this.setState({ theme: "dark" });
		}

		fetch(
			`https://financialmodelingprep.com/api/v3/is-the-market-open?apikey=${process.env.REACT_APP_FMP_KEY}`
		)
			.then((res) => res.json())
			.then((result) => {
				if (result.isTheStockMarketOpen) {
					this.status.current.style.color = "#5efad7";
				} else {
					this.status.current.style.color = "#eb5887";
				}
				this.status.current.innerHTML = result.isTheStockMarketOpen
					? "Market status: Open"
					: "Market status: Closed";
			});
		let section = window.location.href.split("/")[
			window.location.href.split("/").length - 1
		];
		if (section.toLowerCase() === "dashboard") {
			this.setState({
				color: "#5eb5f8",
			});
		} else if (section.toLowerCase() === "portfolio") {
			this.setState({
				portfolioColor: "#5eb5f8",
			});
		} else if(section.toLowerCase() === "watchlist") {
			this.setState({
				bookmarkColor: "#5eb5f8"
			});
		}
	}

	render() {
		return (
			<aside className="leftbar">
				<svg
					className="leftbar__logo"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<g>
						<path fill="none" d="M0 0h24v24H0z" />
						<path d="M3.897 17.86l3.91-3.91 2.829 2.828 4.571-4.57L17 14V9h-5l1.793 1.793-3.157 3.157-2.828-2.829-4.946 4.946A9.965 9.965 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.987 9.987 0 0 1-8.103-4.14z" />
					</g>
				</svg>
				<ul className="leftbar__menu">
					<Link to="/dashboard">
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#dddddd"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								style={{
									stroke: this.state.color,
								}}
							>
								<path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
								<path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
							</svg>
						</li>
					</Link>
					<Link to="/portfolio">
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#dddddd"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								style={{
									stroke: this.state.portfolioColor,
								}}
							>
								<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
								<path d="M22 12A10 10 0 0 0 12 2v10z"></path>
							</svg>
						</li>
					</Link>
					<Link to='/watchlist'>
						<li>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#dddddd"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								style={{
									stroke: this.state.bookmarkColor,
								}}
							>
								<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
							</svg>
						</li>
					</Link>
				</ul>
				<h5
					className="panel__status"
					id="panel__status"
					ref={this.status}
				>
					{" "}
				</h5>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="leftbar__log"
					onClick={() => logout()}
					viewBox="0 0 24 24"
				>
					<g>
						<path fill="none" d="M0 0h24v24H0z" />
						<path d="M4 18h2v2h12V4H6v2H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3zm2-7h7v2H6v3l-5-4 5-4v3z" />
					</g>
				</svg>
			</aside>
		);
	}
}
