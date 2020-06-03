import React from "react";
import teacherView from '../img/classroom-teacher-view.jpg';
import studentView from '../img/classroom-student-view.jpg';
import hotelsonImg0 from "../img/hotelson-sample.png";
import hotelsonImg1 from "../img/ciarus-2.png";
import LivePinSite from "../img/LivePinSite.png";
import LivePinApp from "../img/LivePinApp1.png";
import whatsapp from "../img/whatsapp.png";
import SAS_SITE1 from "../img/sas_group_official_site.png";
import SAS_SITE2 from "../img/sas_group_official_site_2.png";
import PropTypes from "prop-types";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { Button } from 'antd';


const cr_images = [
	teacherView,
	studentView
];

const hotelson_images = [
	hotelsonImg0,
	hotelsonImg1
];

const images = [
	LivePinSite,
	LivePinApp
];

const sas_images = [
	SAS_SITE1,
	SAS_SITE2
];

export default class Projects extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			photoIndex: 0,
			isClassRoomOpen: false,
			isHotelsonSlideOpen: false,
			isLivePinSlideOpen: false,
			isSasSlideOpen: false
		  };
	}

	goToWeb = (url) => {
		window.open(url);
	}

	render() {
		const { photoIndex, isClassRoomOpen, isHotelsonSlideOpen, isLivePinSlideOpen, isSasSlideOpen } = this.state;

		let projectLivePinInfoDiv = <Button onClick={()=> this.goToWeb("https://app.livepin.tv/")} type="primary">
										Go To Web App
									</Button>;

		let SASInfoDiv = <Button onClick={()=> this.goToWeb("http://sasgroup-pk.com/")} type="primary">
							Go To Website
						</Button>;
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Work History
						</h1>
						<div className="row my-5">
							<div
								className={
									"crBg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Get My Call</h2>
									</div>
									<div>
										<button
											id="livepin-button"
											className="project-button"
											onClick={() => this.setState({ isClassRoomOpen: true })}>
											Details
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"LpBg col-12 col-sm-12 col-md-4 " +
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
											onClick={() => this.setState({ isLivePinSlideOpen: true })}>
											Details
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"CiarusBg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Ciarus</h2>
									</div>
									<div>
										<button
											id="livepin-button"
											className="project-button"
											onClick={() => this.setState({ isHotelsonSlideOpen: true })}>
											Details
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"whatsAppBg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>WhatsApp Wrapper</h2>
										<small>Fanar Tech</small>
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
											Details
										</button>
										{/* <Button
											// id="agua-button"
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
											}}
											>
											Details
										</Button> */}
									</div>
								</div>
							</div>
							<div
								className={
									"SasBg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>SAS Official Site</h2>
									</div>
									<div>
										<button
											id="livepin-button"
											className="project-button"
											onClick={() => this.setState({ isSasSlideOpen: true })}>
											Details
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
							<div>
								<h2>WhatsApp Wrapper <small style={{fontSize: "12px"}}> with Fanar Technologies</small></h2>
							</div>
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
							<img src={SAS_SITE1} alt=""/>
						</div>
						<div className="modal-info">
							<h2>SAS Group Official Site</h2>
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
				{isHotelsonSlideOpen && (
				<Lightbox
					// imageTitle={projectLivePinInfoDiv}
					mainSrc={hotelson_images[photoIndex]}
					nextSrc={hotelson_images[(photoIndex + 1) % images.length]}
					prevSrc={hotelson_images[(photoIndex + hotelson_images.length - 1) % hotelson_images.length]}
					onCloseRequest={() => this.setState({ isHotelsonSlideOpen: false })}
					onMovePrevRequest={() =>
					this.setState({
						photoIndex: (photoIndex + hotelson_images.length - 1) % hotelson_images.length,
					})
					}
					onMoveNextRequest={() =>
						this.setState({
							photoIndex: (photoIndex + 1) % hotelson_images.length,
						})
					}
				/>
				)}
				{isClassRoomOpen && (
				<Lightbox
					// imageTitle={projectLivePinInfoDiv}
					mainSrc={cr_images[photoIndex]}
					nextSrc={cr_images[(photoIndex + 1) % cr_images.length]}
					prevSrc={cr_images[(photoIndex + cr_images.length - 1) % cr_images.length]}
					onCloseRequest={() => this.setState({ isClassRoomOpen: false })}
					onMovePrevRequest={() =>
					this.setState({
						photoIndex: (photoIndex + cr_images.length - 1) % cr_images.length,
					})
					}
					onMoveNextRequest={() =>
						this.setState({
							photoIndex: (photoIndex + 1) % cr_images.length,
						})
					}
				/>
				)}
				{isLivePinSlideOpen && (
				<Lightbox
					imageTitle={projectLivePinInfoDiv}
					mainSrc={images[photoIndex]}
					nextSrc={images[(photoIndex + 1) % images.length]}
					prevSrc={images[(photoIndex + images.length - 1) % images.length]}
					onCloseRequest={() => this.setState({ isLivePinSlideOpen: false })}
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
				{isSasSlideOpen && (
				<Lightbox
					imageTitle={SASInfoDiv}
					mainSrc={sas_images[photoIndex]}
					nextSrc={sas_images[(photoIndex + 1) % sas_images.length]}
					prevSrc={sas_images[(photoIndex + sas_images.length - 1) % sas_images.length]}
					onCloseRequest={() => this.setState({ isSasSlideOpen: false })}
					onMovePrevRequest={() =>
					this.setState({
						photoIndex: (photoIndex + sas_images.length - 1) % sas_images.length,
					})
					}
					onMoveNextRequest={() =>
					this.setState({
						photoIndex: (photoIndex + 1) % sas_images.length,
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
