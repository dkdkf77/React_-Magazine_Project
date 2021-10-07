import React from 'react';
import styled from 'styled-components';
import { Grid, Text, Input, Button } from '../elements/index';

const Signup = (props) => {
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
            _onChange={() => {
              console.log('아이디를 입력했어요!');
            }}
          />
				</Grid>
				<Grid padding="16px 0">
          <Input
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            _onChange={() => {
              console.log('닉네임을 입력했어요!');
            }}
          />
				</Grid>
				<Grid padding="16px 0">
          <Input
            label="패스워드"
            placeholder="패스워드를 입력해주세요"
            _onChange={() => {
              console.log('패스워드를 입력했어요!');
            }}
          />
				</Grid>
				<Grid padding="16px 0">
          <Input
            label="패스워드 확인"
            placeholder="패스워드를 확인 해주세요"
            _onChange={() => {
              console.log('패스워드를 확인했어요!');
            }}
          />
        </Grid>
				<Button text="회원가입하기"></Button>
      </Grid>
    </React.Fragment>
  );
};

Signup.defaultProps = {};

export default Signup;
