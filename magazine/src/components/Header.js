import React from 'react';
import styled from 'styled-components';
import { Text, Grid, Button } from '../elements/index';
import { getCookie, deleteCookie } from '../shared/Cookie';

const Header = (props) => {
	// 로그인 안한 상태 를 나타냄
	const [is_login, setIsLogin] = React.useState(false);
	// useEffect를 사용하여 쿠키를 들고 온다 
	React.useEffect(()=> {

		let cookie = getCookie("user_id");
		console.log(cookie);

		if (cookie){
			setIsLogin(true);
		}else{
			setIsLogin(false);
		}
	});
	
	//is_login의 쿠키를 확인 해주는 친구
	if(is_login){
		return(
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
						<Button text="로그아웃" _onClick ={()=>{deleteCookie("user_id");}}></Button>
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
          <Button text="로그인"></Button>
          <Button text="가입go"></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
