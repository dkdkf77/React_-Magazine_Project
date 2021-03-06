import React from "react";
import {Grid, Text, Button, Input, Image} from "../elements"
import Upload from "../shared/Upload";

const PostWrite = (props) => {
	return (
		<React.Fragment>
			<Grid padding="16px">
				<Text size = "36px" bold>글 작성</Text>
				<Upload/>
			</Grid>
			<Grid>
				<Grid padding ="16px">
					<Text margin="0px" size="24px" bold>미리보기</Text>
				</Grid>

				<Image shape = "rectangle"/>
			</Grid>

			<Grid padding="16px">
				<Input label="글 내용" placeholder ="내용을 적으세요" multiLine/>
		  </Grid>
			<Grid padding="16px">
				<Button>글 작성</Button>
			</Grid>
		</React.Fragment>
	)
}

export default PostWrite;