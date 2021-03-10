import React from "react";

import LandingMenu from "./LandingMenu";

const LandingPage = () => (
	<div className="landing-page">
		<LandingMenu
			name="LOGIN"
			url="/login"
			name2="REGISTER"
			url2="/register"
		/>
		<div className="landing-page__heading">
			<h1>Stalk your favourite stocks and buy them with virtual money!!!</h1>
			<img
				src={require("../../images/land.png")}
				alt="IMG"
							/>
		</div>
		<div className="landing-page__background">
			<svg viewBox="0 0 500 500" width="40%" xmlns="http://www.w3.org/2000/svg"id="blobSvg">
			<path id="blob" d="M403.5,323Q334,396,240,413.5Q146,431,94,340.5Q42,250,84.5,143.5Q127,37,229.5,72Q332,107,402.5,178.5Q473,250,403.5,323Z" fill="#6FCF9705"></path>
			</svg>
			
		</div>
	</div>
);
export default LandingPage;
