import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Input, Button } from '../elements/index';
import {useDispatch} from "react-redux";

import { actionCreators as userActions } from '../redux/modules/user';
 
const Signup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] =React.useState("");
  const [pwd, setPwd] =React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");
  const [user_name, setUserName] =React.useState("");

  const signup = () => {

    if(id === '' || pwd === '' || user_name === ''){
      return;
    }
    if(pwd !== pwd_check){
      return; 
    }



    dispatch(userActions.signupFB(id, pwd, user_name));
  }


  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text size="32px" bold>
          회원가입
        </Text>
        <Grid padding="16px 0">
          <Input
            label="아이디"
            placeholder="아이디를 입력해주세요"
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
				</Grid>
				<Grid padding="16px 0">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            _onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
				</Grid>
				<Grid padding="16px 0">
          <Input
            label="패스워드"
            placeholder="패스워드를 입력해주세요"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
				</Grid>
				<Grid padding="16px 0">
          <Input
            label="패스워드 확인"
            placeholder="패스워드를 확인 해주세요"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </Grid>
				<Button text="회원가입하기" _onClick={signup}></Button>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;
