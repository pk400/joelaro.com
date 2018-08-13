import React, { Component } from 'react';

class NavLink extends Component {
	constructor(props) {
		super(props);
		this.href = props.href;
	}

	render() {
		return (
			<li>
				<a class="t_navbar_link" href={ this.href }>{ this.href }</a>
			</li>
		);
	}
}

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.pages = props.pages;
	}

	listPages() {
		let links = [];
		for(let i = 0; i < this.pages.length; i++) {
			links.push(<NavLink href= { this.props.pages[i] } />);
		}

		return links;
	}

	render() {
		return (
			<ul>
				{ this.listPages() }
			</ul>
		);
	}
};

export default Navigation;