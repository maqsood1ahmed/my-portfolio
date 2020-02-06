import React from "react";
import LivePinSite from "../img/LivePinSite.png";
import LivePinApp from "../img/LivePinApp.png";
import whatsapp from "../img/whatsapp.png";
import LINE_Chat from "../img/LINE_Chat_test_Assignment.png";
import PropTypes from "prop-types";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
	LivePinApp,
	LivePinSite
  ];

export default class Projects extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			photoIndex: 0,
			isOpen: false,
		  };
	}

	render() {
		const { photoIndex, isOpen } = this.state;

		let projectInfoDiv = <div id="projectInfoDiv">
								<a href="https://app.livepin.tv/">
									<h3>Go to WebApp</h3>
								</a>
							</div>
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"testbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>LivePin</h2>
									</div>
									<div>
										<button
											id="livepin-button"
											className="project-button"
											onClick={() => this.setState({ isOpen: true })}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"aguabg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>WhatsApp Wrapper</h2>
									</div>
									<div>
										<button
											id="agua-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var aguaModal = document.getElementById(
													"agualuz"
												);
												modalBG.style.display = "block";
												aguaModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"todobg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>LINE Test project</h2>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="agualuz" className="modal-card">
						<div className="visual">
							<img src={whatsapp} alt=""/>
						</div>
						<div className="modal-info">
							<h2>WhatsApp Wrapper</h2>
							<div className="modal-description">
								<ul>
									<li>
										Frontend Development with ReactJS and Redux
									</li>
									<li>
										Backend Development with Python Flask API and Selenium
									</li>
									<li>
										<b>Features:</b>
										<ol>
											<li>Whats App message send scheduler</li>
											<li>Receive and auto-reply to message</li>
											<li>Delete messages when needed</li>
											<li>Delete Client conversation</li>
											<li>Auto initiate conversation with client</li>
										</ol>
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a></a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var aguaModal = document.getElementById(
											"agualuz"
										);
										modalBG.style.display = "none";
										aguaModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card">
						<div className="visual">
							<img src={LINE_Chat} alt=""/>
						</div>
						<div className="modal-info">
							<h2>Line Chat Test Project</h2>
							<div className="modal-description">
								<ul>
									<li>
										Simple Test Assignment by Fanar Tech for Job purpose.
									</li>
									<ol>
										<li><a href="https://github.com/maqsood1ahmed/Line-Chat-App"> Frontend code </a></li>
										<li><a href="https://github.com/maqsood1ahmed/Line-Chat-App-BackEnd"> Backend code </a></li>
									</ol>
								</ul>
							</div>
							<div className="modal-bottom">
								<a></a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
				{isOpen && (
				<Lightbox
					imageTitle={projectInfoDiv}
					mainSrc={images[photoIndex]}
					nextSrc={images[(photoIndex + 1) % images.length]}
					prevSrc={images[(photoIndex + images.length - 1) % images.length]}
					onCloseRequest={() => this.setState({ isOpen: false })}
					onMovePrevRequest={() =>
					this.setState({
						photoIndex: (photoIndex + images.length - 1) % images.length,
					})
					}
					onMoveNextRequest={() =>
					this.setState({
						photoIndex: (photoIndex + 1) % images.length,
					})
					}
				/>
				)}
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
