import React, { Component } from 'react';
import 'footer/Footer.css'
import { FaGithubSquare, FaLinkedin, FaEnvelopeSquare } from 'react-icons/fa';

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<span className="social-icons">
					<a href="https://github.com/pk400">
						<FaGithubSquare className="icon-square" />
					</a>
					<a href="https://www.linkedin.com/in/joelaro/">
						<FaLinkedin className="icon-square" />
					</a>
					<a href="mailto:joelaro.to@gmail.com?Subject=Hello" target="_top">
						<FaEnvelopeSquare className="icon-square" />
					</a>
				</span>
			</div>
		);
	}
};

export default Footer;