import React, { Component } from 'react';
import 'header/Header.css'
import { MediaBox } from 'react-materialize';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<MediaBox className="header-profile-picture" src="https://github.com/pk400.png" width="150"/>
				<h1 className="header-name">Joel Aro</h1>
				<h4 className="header-title">C++, Python, Full-Stack Software Developer</h4>
			</div>
		);
	}
};

export default Header;