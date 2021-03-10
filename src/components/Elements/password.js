import React from "react";

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
		resetPassword(this.email.value).catch((error) => {
			this.setState({
				msg:"Email not registered",
			})
		})
        this.setState({
            msg:"Email sent :)",
        })
	}
	render() {
		return (
			<section className="limiter">
				<LandingMenu
					name="HOME"
					url="/"
					name2="LOGIN"
					url2="/login"
				/>
				<div className="container-register">
					<div className="wrap-register">
						<form className="register-form validate-form">
							<span className="register-form-title">
								Forgot Password
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

							<div className="container-register-form-btn">
								<button
									type="submit"
									className="register-form-btn"
									onClick={(event) => this.handleClick(event)}
								>
									Reset Password
								</button>
							</div>
							
							{this.state.msg !== "" ? (
								<h3>{this.state.msg}</h3>
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
