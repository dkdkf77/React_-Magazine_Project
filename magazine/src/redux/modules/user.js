//편하게 만들어 주는 액션 툴 !
import { createAction, handleAction, handleActions } from 'redux-actions';
//불변성 관리 임머
import { produce } from 'immer';
import { getCookie, setCookie, deleteCookie } from '../../shared/Cookie';

// actions
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

//action creators
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

//initialState => 디폴트 프롭스 같은 것 => 초기 값 같은것
// 밑에 로그인 되면 user 값에 정보가 들어가고 is_login은 로그인이 되었으니 true가 되어야 한다.
const initialState = {
  user: null,
  is_login: false,
};

//reducer => 넘겨 주는 것
//임머가 동작하는 방법, 불변성 유지 방법
// 자바스크립스 프롭시?를 알아야 한다는데?
// produce = 원본 값을 가지고 () , 어떤 작업을 하고 싶다 {};
// produce 사용법
// action 안에 payload에 우리가 보낸 정보가 담김 ?
// 리듀서에 이니셜스테이트도 줘야 한다.
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie('is_login', 'success');
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) => {},
    [GET_USER]: (state, action) => {},
  },
  initialState
);

//action creator export=> 내보내기

const actionCreators = {
  logIn,
  logOut,
  getUser,
};

export { actionCreators };
