import React from "react";

import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

class Footer extends React.Component {
	render() {
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								className="profile-links"
								name="github"
								href="https://github.com/maqsood1ahmed"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} alt=""/>
								<span class="tooltiptext">Github profile.</span>
							</a>
							<a
								className="profile-links"
								href="https://www.linkedin.com/in/maqsood-ahmed-ned-university/"
								target="_blank"
								name="linkedin"
								rel="noopener noreferrer">
								<img src={linkedin} alt=""/>
								<span class="tooltiptext">LinkedIn profile.</span>
							</a>
						</div>
					</div>
					{/* <h5 className="pt-4">Frank Izquierdo &copy; 2018</h5> */}
				</div>
			</div>
		);
	}
}

export default Footer;
