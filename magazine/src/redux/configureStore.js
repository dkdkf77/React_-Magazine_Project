//리덕스에서 나한테 필요 한 것을 가져 왔다.
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

import User from './modules/user';
// 유저에 리듀서를 불러옴

// 히스토리 객체를 만들어 줌
export const history = createBrowserHistory();

//configureStore는 리듀서 들을 하나로 묶어 주는 곳
//router : connectRouter(history) = 우리가 만든 히스토리와 라우터가 연결이 완료
const rootReducer = combineReducers({
  user: User,
	router : connectRouter(history),
});

// 미들웨어 트렁크만 들어가 있는데 만약 더 쓰고 싶은게 있으면 여기다 넣어줘야 한다는데 뭐를?
// withExtraArgument => 다른 인수를 더 넘겨 줄게 라는 거란다..
const middlewares = [thunk.withExtraArgument({history:history})];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV;

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
// env가 개발환경일때에 logger라는 것을 가지고 오삼!
// require 는 패키지 가지고 올때 씀.

if (env === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

// typeof window 가 브라우저 일때만 돌아가게 해준다
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;


// 미들웨어 하나로 묶기,  composeEnhancers가 미들웨어를 묶어주는 역할
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// 스토어는 기본 스토어 받아 다가 크리에이터 스토어 안에 루트 리듀서와 인핸스를 묶어서 만듬
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
