import React, { Component } from 'react';
import 'footer/Footer.css'
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<span className="social-icons">
					<FaGithubSquare className="icon-square" />
					<FaLinkedin className="icon-square" />
					<FaEnvelopeSquare className="icon-square" />
				</span>
			</div>
		);
	}
};

export default Footer;