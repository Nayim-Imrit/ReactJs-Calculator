import "./app.scss";
import React, {Component} from "react";

class AppContainer extends Component {

	componentDidMount(){
		console.log("Mamamia");
	}

	render() {
		const {main,sidebar,display} = this.props;
		return (
			<div className={`c-application`}>
				<div className="inner">
					<div className="sidebar">
						{display}
						{sidebar}
					</div>
					<div className="main">
						{main}
					</div>
				</div>
			</div>
		);
	}

}

export default AppContainer;