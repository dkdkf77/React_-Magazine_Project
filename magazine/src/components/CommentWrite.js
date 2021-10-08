import React from "react";
import { Grid, Input, Button } from "../elements";

const CommentWrite = (props) =>{

	return (
		<React.Fragment>
			<Grid padding = "16px" is_flex>
				<Input placeholder ="글을 입력해 주세요"/>
				<Button width = "50px">작성</Button>
			</Grid>
		</React.Fragment>
	)
}

export default CommentWrite;