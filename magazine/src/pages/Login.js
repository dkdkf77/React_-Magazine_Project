import React from 'react';
import Text from '../elements/Text';
import { Grid, Button, Input } from '../elements';
import { getCookie, setCookie, deleteCookie } from '../shared/Cookie';


const Login = (props) => {
  return (
    <React.Fragment>
      <Grid padding ="0px 16px">
        <Text size="32px" bold>
          로그인
        </Text>
        <Grid padding="16px 0px">
          <Input
            label="아이디"
            placeholder="아이디를 입력해 주세요."
            _onChange={() => {
              console.log('아이디를 입력했어요');
            }}
          />
        </Grid>
        <Grid padding="16px 0px">
          <Input
            label="패스워드"
            placeholer="패스워드를 입력해 주세요"
            _onChange={() => {
              console.log('패스워드를 입력했어요');
            }}
          />
        </Grid>
        <Button
          text="로그인 하기"
          _onClick={() => {
            console.log('로그인 완료');
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
