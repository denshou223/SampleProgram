import { applyMiddleware, createStore as reduxCreateStore ,combineReducers} from "redux";

import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { createPromise } from 'redux-promise-middleware';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import tweetsReducer from "./reducers/tweetsReducer";
import userReducer from "./reducers/userReducer";
import commonReducer from "./reducers/commonReducer";
import payReducer from "./reducers/payReducer";
import couponReducer from "./reducers/couponReducer";

const promise = createPromise({ types: { fulfilled: 'success' } });

export default function createStore(history){
    return reduxCreateStore(
        combineReducers({
          commonReducer,
          tweetsReducer,
          userReducer,
          payReducer,
          couponReducer,
          router: connectRouter(history)
        }),
        applyMiddleware(
          promise,
          thunk,
          createLogger(),
          routerMiddleware(history)
        )
    );
}