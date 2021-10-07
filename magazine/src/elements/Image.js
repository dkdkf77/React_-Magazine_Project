import React from "react";
import styled from "styled-components";

//최소 단위 컴포넌트로 스타일 관련 자료가 있다.


const Image = (props) => {
	const {shape, src, size} = props;
	// 윗 쪽의 값을 styles로 하나로 묶어서 사용하면 편리 하다.
	const styles = {
		src : src,
		size : size,
	}
	// 값에 따라 사진 모양을 변경 해준다 postlist에 들어가는 이미지 값은 2개 이므로 네모 값과 원형 값을 준다.
	if(shape === "circle"){
		return(
			<ImageCircle {...styles}></ImageCircle>
		)
	}
	if(shape === "rectangle"){
		return(
			<AspectOutter>
				<AspectInner {...styles}></AspectInner>
			</AspectOutter>
		)
	}

	return (
		<React.Fragment>
			이미지 
		</React.Fragment>
	)
}

// user_profile에 관한 이미지 스타일 프롭스에서 받아오기.
Image.defaultProps = {
	shape : "circle",
	src : "https://d33wubrfki0l68.cloudfront.net/66d33eda140aa5ceceaf81be2cfbce488f4d4871/0c990/static/288cb1fa6f64fe39f00046c4e0eae297/0b533/meme.png",
	size : 36,
};

// 바깥 값과 안에 값 
const AspectOutter = styled.div `
	width : 100%;
	min-width: 25%;
`;
const AspectInner = styled.div `
	position: relative;
	padding-top: 75%;
	overflow: hidden;
	background-image : url("${(props) => props.src}");
	background-size : cover;
`;


//user_profile 에 관한 이미지 스타일 설정
// --size 하면 변수 설정 하는 것 , 변수 내용은 프롭스에서 받아온 싸이즈를 변수로 설정하여 사용한다.
const ImageCircle = styled.div`
 --size :  ${(props) => props.size}px;
 width : var(--size);
 height: var(--size);
 border-radius: var(--size);
 background-image : url("${(props) => props.src}");
 background-size : cover;
 margin : 4px;
`;


export default Image;