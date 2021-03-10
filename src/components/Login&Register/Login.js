import React from "react";
import {Link} from "react-router-dom";
import { login,resetPassword } from "../auth";
import LandingMenu from "../LandingPage/LandingMenu";

export default class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			msg: "",
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		e.preventDefault();
		login(this.email.value, this.password.value).catch((error) => {
			this.setState({
				msg: "Wrong Email or password",
			});
		});
	}
	render() {
		return (
			<section className="limiter">
				<LandingMenu
					name="HOME"
					url="/"
					name2="REGISTER"
					url2="/register"
				/>
				<div className="container-register">
					<div className="wrap-register">
						
						<form className="register-form validate-form">
							<span className="register-form-title">
								Member Login
							</span>

							<div className="wrap-input ">
								<input
									className="input"
									type="text"
									name="email"
									placeholder="Email"
									required
									ref={(email) => (this.email = email)}
								/>
							</div>

							<div
								className="wrap-input "
								data-validate="Password is required"
							>
								<input
									className="input"
									type="password"
									name="pass"
									placeholder="Password"
									required
									ref={(password) =>
										(this.password = password)
									}
								/>
							</div>

							<div className="container-register-form-btn">
								<button
									type="submit"
									className="register-form-btn"
									onClick={(event) => this.handleClick(event)}
								>
									Login
								</button>
							</div>


							<div className="text-center">
							<span className="txt2">
								<Link to="forgot">
								<u className="link">
										Forgot Password?
										</u>
										</Link>
								</span>
								
							</div>
							
							{this.state.msg !== "" ? (
								<h3 className="error">{this.state.msg}</h3>
							) : (
								<div />
							)}
						</form>
					</div>
				</div>
			</section>
		);
	}
}
