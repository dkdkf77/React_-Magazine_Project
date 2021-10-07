import React from "react";
import styled from "styled-components";
import {Text, Grid} from "../elements/index"

const Input = (props) => {
	const {label, placeholder, _onChange, type} = props;

	return (
		<React.Fragment>
			<Grid>
				<Text margin ='0px'>{label}</Text>
				<ElInput type ={type} placeholder ={placeholder} onChange = {_onChange}/>
			</Grid>
		</React.Fragment>
	)
}

Input.defaultProps = {
	label : '텍스트',
	placeholder : '텍스트를 입력해 주세요.',
	type : "text",
	_onChage: () => {} , // 콜백 함수 텍스트가 바뀔때 마다 입력 화살표 함수 사용.
}

const ElInput = styled.input`
	border: 1px solid #212121;
	width: 100%;
	padding: 12px 4px;
	box-sizing : border-box;
`;

export default Input