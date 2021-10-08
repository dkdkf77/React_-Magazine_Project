import React from "react"
import styled from "styled-components"

const Button = (props) => {
	const {text, _onClick, is_float, children} = props;

	if(is_float){
		return(
			<React.Fragment>
				<FloatButton  onClick={_onClick}>{text? text : children}</FloatButton>
			</React.Fragment>
		)
	}

	

	return (
		<React.Fragment>
			<ElButton onClick = {_onClick}>{text? text: children}</ElButton>
		</React.Fragment>
	)
}

Button.defaultProps = {
	text : false,
	children : null,
	_onClick : () => {},
	is_float : false,
	margin : false,
	width : "100px",
}

const ElButton = styled.button`
	width : 80px;
	background-color : royalblue;
	color : #ffffff;
	padding : 12px 0px;
	box-sizing : border-box;
	border: none;
	margin : 0 2px 0 10px
`;

const FloatButton = styled.button`
	width: 50px;
	height : 50px;
	background-color : royalblue;
	color: #ffffff;
	padding: 16px;
	box-sizing: border-box;
	font-size: 36px;
	font-weight: 800;
	position: fixed;
	bottom: 50px;
	right: 16px;
	text-align: center;
	border: 6px dashed white;
	border-radius : 50px;
	align-items: center;
	justify-content: center;
	display: flex;
`;

export default Button