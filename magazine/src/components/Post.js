import React from 'react';
// 그리드 컴포넌트에 있는 스타일 값을 들고 올수 있다.
// 그리드 컴포넌트 안에 확인 해보면 ${(props) => .... }  라고 있는게 프롭스에서 받아오는 스타일 설정
import Grid from '../elements/Grid';
import Image from '../elements/Image';
import Text from '../elements/Text';

//중간 단위 페이지;

const Post = (props) => {
  //Image 컴포넌트와 Text 컴포넌트를 만든다
  return (
    // 디브 안의 값들이 Grid.js 의 children 값으로 넘어간다.
    // 
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image shape = "circle" src = {props.src}/>
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding = "16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape ="rectangle" src ={props.src} />
        </Grid>
        <Grid padding = "16px">
          <Text bold>좋아요 {props.like_btn}개</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: 'seunghwan12',
    user_profile:
      'https://d33wubrfki0l68.cloudfront.net/66d33eda140aa5ceceaf81be2cfbce488f4d4871/0c990/static/288cb1fa6f64fe39f00046c4e0eae297/0b533/meme.png',
  },
  image_url:
    'https://d33wubrfki0l68.cloudfront.net/66d33eda140aa5ceceaf81be2cfbce488f4d4871/0c990/static/288cb1fa6f64fe39f00046c4e0eae297/0b533/meme.png',
  contents: '뚱이의 자바스크립트 이거 진짜 웃김 ㅋㅋㅋㅋㅋ',
  like_btn: 4,
  insert_dt: '2021-10-06 02:50:20',
};

export default Post;
