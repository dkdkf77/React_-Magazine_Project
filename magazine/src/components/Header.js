import React from "react";
import styled from "styled-components";
import {Text, Grid, Button} from "../elements/index";


const Header = (props)=> {
	
	return (
		<React.Fragment>
			<Grid is_flex padding = "4px 16px">
				<Grid>
					<Text margin = "0px" size="24px" bold>🛳 Bon-Voyage Magazine</Text>
				</Grid>
				<Grid is_flex>
					<Button text = "로그인"></Button>
					<Button text = "가입go"></Button>
				</Grid>
			</Grid>
		</React.Fragment>
	)
}

Header.defaultProps = {

}

export default Header