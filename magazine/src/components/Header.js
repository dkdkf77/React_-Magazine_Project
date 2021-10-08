import React from 'react';
import styled from 'styled-components';
import Permit from '../shared/Permit';
import { Text, Grid, Button } from '../elements/index';
import { getCookie, deleteCookie } from '../shared/Cookie';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
// 리덕스 훅 , 로그아웃을 하면 딜리트 쿠키를 해주는게 아니라 로그아웃 액션을 불러 와주는게 좋을 것 같다고 한다.
import { history } from '../redux/configureStore';
import {apiKey} from "../shared/firebase";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  // useEffect를 사용하여 쿠키를 들고 온다
	const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  //is_login의 쿠키를 확인 해주는 친구
	const is_session = sessionStorage.getItem(_session_key)? true : false;
	
	console.log(is_session)
	// && = AND
  if (is_login && is_session) {
    return (
					<React.Fragment>
						<Grid is_flex padding="4px 16px">
							<Grid>
								<Text margin="0px" size="24px" bold>
									🛳 Voyage Magazine
								</Text>
							</Grid>
							<Grid is_flex>
								<Button text="내 정보"></Button>
								<Button text="알림"></Button>
								<Button text="로그아웃" _onClick ={()=>{dispatch(userActions.logOut({}));}}></Button>
							</Grid>
						</Grid>
					</React.Fragment>
				)
		}

  return (
    <React.Fragment>
      <Grid is_flex padding="4px 16px">
        <Grid>
          <Text margin="0px" size="24px" bold>
            🛳 Voyage Magazine
          </Text>
        </Grid>
        <Grid is_flex>
          <Button
            text="로그인"
            _onClick={() => {
              history.push('/login');
            }}
          ></Button>
          <Button
            text="가입go"
            _onClick={() => {
              history.push('/signup');
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
