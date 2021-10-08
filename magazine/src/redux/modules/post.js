import { createAction, handleActions } from "redux-actions";
import {produce} from "immer";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}))

const initialState = {
	 list: [],

}

const initialPost = {
	id : 0,
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
}

export default handleActions(
	{
			[SET_POST] : (state, action) => produce(state, (draft) =>{

			}),

			[ADD_POST] : (state, action) => produce(state, (draft) =>{

			}),
	}, initialState
);


const actionCreators = {
	setPost,
	addPost,
}

export {actionCreators};