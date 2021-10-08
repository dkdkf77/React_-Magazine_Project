import React, { children } from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  // 2. 밑에 디폴트 프롭스 값 가져오는 함수
  const { is_flex, width, margin, padding, bg , children } = props;
  // 3. sytle 관련 함수를 만든다 
  const styles = {
    is_flex : is_flex,
    width : width,
    margin : margin,
    padding: padding,
    bg : bg,
  }; //4. 적용
  return(
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  children : null,
  is_flex: false,
  width: '100%',
  padding: false,
  margin: false,
  bg: false,
};

// 1. width : ${(props) => props.width} 프롭스에서 설정된 값 가져오기
const GridBox = styled.div`
  width : ${(props) => props.width};
  height : 100%
  box-sizing : border-box;
  ${(props) => (props.padding ? `padding : ${props.padding}` : '')};
  ${(props) => (props.margin ? ` margin : ${props.margin}` : '')};
  ${(props) => (props.bg ? ` background-color :${props.bg}` : '')};
  ${(props) =>
    props.is_flex
      ? `display :flex; align-item:center; justify-contents : space-between`
      : ''}
`;

export default Grid;
