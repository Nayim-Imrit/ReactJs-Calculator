import "./dual.scss";
import React, {Component} from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import dualen from "./lang/dualen";
import dualfr from "./lang/dualfr";

counterpart.registerTranslations("en", dualen);
counterpart.registerTranslations("enfr", dualfr);

//counterpart.setLocale("en");

class DualConatiner extends Component {
		state ={
			lang:""
		};

	onLangChange = (e) => {
		this.setState({lang: e.target.value});
		counterpart.setLocale(e.target.value);
	}

	render() {
		const link =<link content="link"/>;

		const link1 = (props) => {
			return <Translate content={props.p4} component="a" href="//google.com" target="_blank"/>;
		};

		return ( 
			<div>
				<select value={this.state.lang} onChange={this.onLangChange}>
					<option value="en">en</option>
					<option value="enfr">fr</option>
				</select>
				<Translate content="title" component="h1"/>
				<Translate content="p2" component="p"/>
				<Translate content="p3" component="p" unsafe={true}/>
				<Translate content="p4" component="p" with={{link1}}/>
				<Translate component="input" type="text" attributes={{placeholder:"placeholder"}}/>
			</div>
		);
	}
}

class DualSidebar extends Component {
	render() {
		return <p > Sidebar </p>;
	}
}

export default {
	main: DualConatiner,
	sidebar: DualSidebar
};