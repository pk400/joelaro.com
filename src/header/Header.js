import React, { Component } from 'react';
import 'header/Header.css'

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="avatar-wrapper">
					<img className="header-profile-picture" src={ require("profile.jpg") } />
				</div>
				<h1 className="header-name">Joel Aro</h1>
				<span className="header-title">Software Developer @ Spire Trading Inc.</span>
			</div>
		);
	}
};

export default Header;