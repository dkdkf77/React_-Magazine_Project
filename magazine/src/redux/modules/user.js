//편하게 만들어 주는 액션 툴 !
import { createAction, handleAction, handleActions } from 'redux-actions';
//불변성 관리 임머
import { produce } from 'immer';
import { getCookie, setCookie, deleteCookie } from '../../shared/Cookie';

import { auth } from '../../shared/firebase';
import firebase from 'firebase/app';

// actions
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

//action creators
const setUser = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

//initialState => 디폴트 프롭스 같은 것 => 초기 값 같은것
// 밑에 로그인 되면 user 값에 정보가 들어가고 is_login은 로그인이 되었으니 true가 되어야 한다.
const initialState = {
  user: null,
  is_login: false,
};

const user_initial = {
  user_name: 'YG0828',
};

// middleware action
// user라는 값을 받아 오고 function 리턴 해준다.

const loginFB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
      auth
        .signInWithEmailAndPassword(id, pwd)
        .then((user) => {
          console.log(user);
          dispatch(
            setUser({
              user_name: user.user.displayName,
              id: id,
              user_profile: '',
              uid: user.user.uid,
            })
          );

          history.push('/');
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    });
  };
};

const signupFB = (id, pwd, user_name) => {
  return function (dispatch, getState, { history }) {
    auth
      .createUserWithEmailAndPassword(id, pwd)
      .then((user) => {
        console.log(user);

        auth.currentUser
          .updateProfile({
            displayName: user_name,
          })
          .then(() => {
            dispatch(
              setUser({
                user_name: user_name,
                id: id,
                user_profile: '',
                uid: user.user.uid,
              })
            );
            history.push('/');
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };
};

const loginCheckFB = () => {
  return function (dispatch, getState, { history }) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          setUser({
            user_name: user.displayName,
            user_profile: '',
            id : user.email,
            uid: user.uid,
          })
        );
      }else{
        dispatch(logOut());
      }
    });
  };
};

const logoutFB = () => {
  return function (dispatch, getState, {history}) {
    auth.signOut().then(()=> {
      dispatch(logOut());
      history.replace('/');
    })
  }
}

//reducer => 넘겨 주는 것
//임머가 동작하는 방법, 불변성 유지 방법
// 자바스크립스 프롭시?를 알아야 한다는데?
// produce = 원본 값을 가지고 () , 어떤 작업을 하고 싶다 {};
// produce 사용법
// action 안에 payload에 우리가 보낸 정보가 담김 ?
// 리듀서에 이니셜스테이트도 줘야 한다.
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        setCookie('is_login', 'success');
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie('is_login');
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export=> 내보내기
const actionCreators = {
  setUser,
  logOut,
  getUser,
  signupFB,
  user_initial,
  loginFB,
  loginCheckFB,
  logoutFB,
};

export { actionCreators };
