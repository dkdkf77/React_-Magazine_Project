import React from "react"
import { Grid, Image, Text } from "../elements";

const CommentList = () => {
	
	return (
		<React.Fragment>
			<Grid padding = "16px">
				<CommentItem/>
				<CommentItem/>
				<CommentItem/>
				<CommentItem/>
				<CommentItem/>
				<CommentItem/>
				<CommentItem/>
			</Grid>
		</React.Fragment>
	)
}

export default CommentList;

const CommentItem = (props) => {

	const {contents, user_profile, user_name, user_id, post_id, insert_dt } = props;
 
	return(
		<Grid is_flex>
			<Grid is_flex width="auto">
				<Image shape = "circle"/>
				<Text bold>{user_name}</Text>
			</Grid>
			<Grid is_flex margin ="0px 6px">
				<Text margin ="0px">{contents}</Text>
				<Text margin ="0px">{insert_dt}</Text>
			</Grid>
		</Grid>
	)

}

CommentItem.defaultProps = {
		user_profile: "",
		user_name: "YG0828",
		user_id: "",
		post_id : 1,
		insert_dt : '2021-01-01 19:00:00',
		contents : "바다를 사랑하지만 배는 타기 싫은 뱃놈",
}
