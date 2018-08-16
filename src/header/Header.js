import React, { Component } from 'react';
import 'header/Header.css'
import { MediaBox } from 'react-materialize';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<MediaBox className="header-profile-picture" src="https://github.com/pk400.png" width="100"/>
				<h1 className="header-name">Joel Aro</h1>
				<span className="header-title">C++, Python, Full-Stack Software Developer</span>
			</div>
		);
	}
};

export default Header;