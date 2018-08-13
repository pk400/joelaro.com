import React, { Component } from 'react';
import Navigation from './components/Navigation';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

class App extends Component {
	render() {
		return (
			<div className="row h-100">
				<div className="offset-md-2 col-12 col-md-8 content_wrapper mt-5 row">
					<div className="col-md-12 top_navbar border-bottom mb-3">
						<Navigation pages={["home", "about", "projects", "blog"]} />
					</div>
					<div className="col-md-3 left_col">
						<LeftPanel />
					</div>
					<div className="col-md-9 right_col">
						<RightPanel />
					</div>
				</div>
			</div>
		);
	}
};

export default App;