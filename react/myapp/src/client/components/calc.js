import "./calc.scss";
import React, {Component} from "react";

class CalcContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			result: ""
		};
		this._clicked = this._clicked.bind(this);
	}

	_clicked(e) {
		//console.log(e.currentTarget.innerHTML);//textContent
		const value = e.currentTarget.innerHTML;
		let result = this.state.result;
		if (value === "AC") {
			let stop = result.slice(0, result.length -1);
			this.setState({result: stop});
		} else if (value === "=") {
			let re = eval(result);
			if (re.toString().length >= 15) {
				re = re.toString().substring(0, 9);
				this.setState({result: re});
			} else {
				this.setState({result: re.toString()});
				console.log(re);
			}
		} else {
			this.setState({result: result + value});
			console.log({result: result + value});
		}	  
	}

	render() {
		return ( 
			<div id="calc-parent">
				<div className="row">
					<Display result={this.state.result} />
				</div>
				<div className="row">
					<div className="calc-btn column" id="calc-clear" onClick={this._clicked}>AC</div>
					<div className="calc-btn column" id="calc-backspace" value="del">&#8676;</div>
					<div className="calc-btn calc-btn-operator column" id="calc-divide" value="/" onClick={this._clicked}>/</div>
				</div>
				<div className="row">
					<div className="calc-btn calc-btn-num column" id="calc-seven" value="7" onClick={this._clicked}>7</div>
					<div className="calc-btn calc-btn-num column" id="calc-eight" value="8" onClick={this._clicked}>8</div>
					<div className="calc-btn calc-btn-num column" id="calc-nine" value="9" onClick={this._clicked}>9</div>
					<div className="calc-btn calc-btn-operator column" id="calc-multiply" value="*" onClick={this._clicked}>*</div>
				</div>
				<div className="row">
					<div className="calc-btn calc-btn-num column" id="calc-four" value="4" onClick={this._clicked}>4</div>
					<div className="calc-btn calc-btn-num column" id="calc-five" value="5" onClick={this._clicked}>5</div>
					<div className="calc-btn calc-btn-num column" id="calc-six" vlaue="6" onClick={this._clicked}>6</div>
					<div className="calc-btn calc-btn-operator column" id="calc-minus" value="-" onClick={this._clicked}>-</div>
				</div>
				<div className="row">
					<div className="calc-btn calc-btn-num column" id="calc-one" value="1" onClick={this._clicked}>1</div>
					<div className="calc-btn calc-btn-num column" id="calc-two" vlaue="2" onClick={this._clicked}>2</div>
					<div className="calc-btn calc-btn-num column" id="calc-three" value="3" onClick={this._clicked}>3</div>
					<div className="calc-btn calc-btn-operator column" id="calc-plus" value="+" onClick={this._clicked}>+</div>
				</div>
				<div className="row">
					<div className="calc-btn calc-btn-num column" id="calc-zero" value="0" onClick={this._clicked}>0</div>
					<div className="calc-btn column" id="calc-decimal" value="." onClick={this._clicked}>.</div>
					<div className="calc-btn calc-btn-operator column" id="calc-equals" value="=" onClick={this._clicked}>=</div>
				</div>
			</div>
		);
	}
}

class Display extends Component {
	render() {
		return (
			<div className="row">
				<div className="column" id="calc-display-val">{this.props.result}</div>
			</div>
		);
	}
}

class CalcSidebar extends Component {
	render() {
		return ( 
			<p> CalcSidebar! </p>
		);
	}
}

export default {
	main:CalcContainer,
	display:Display,
	sidebar: CalcSidebar
};