import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { get, includes } from 'lodash';
import rootReducer from '../redux/reducers/index';
import * as actionType from '../redux/actionTypes';

const client = axios.create({ // all axios can be used, shown in axios documentation
  options: {
    responseType: 'json',
  },
});

function getErrorObject(errorMsg) {
  const error = {
    message: errorMsg,
  };
  return error;
}
const axiosMiddlewareConfig = {
  interceptors: {
    response: [
      {
        success: (...rest) => rest[1].data,
      },
    ]
  },
  onError: async ({
    dispatch, action, error, next
  }) => {
    let errorObj;
    console.log('Api error response', error.response);
    console.log('Api error response', error);
    const status = get(error.response, 'status', 400);
    if (status === 401 || status === 403) {
      dispatch({ type: actionType.LOGOUT_SUCCESSFUL });
      errorObj = {
        status,
        data: getErrorObject(get(error, 'response.data', 'Something went wrong')),
      };
    } else if (status === 503 || status === 504) {
      errorObj = {
        status,
        data: getErrorObject('The server appears to be temporarily unavailable. Please try after some time.'),
      };
    } else {
      errorObj = {
        status,
        data: get(error, 'response.data.error', getErrorObject('The system encountered an unexpected error. Please try again.')),
      };
    }
    if (errorObj.data && includes(errorObj.data.message, '<title>HTTP Status 401 – Unauthorized</title>')) {
      errorObj.data = getErrorObject('Session expired! Please login again.');
    }
    const nextAction = {
      error: errorObj,
      meta: {
        previousAction: action,
      },
    };
    if (action.types && action.types.length === 3) {
      nextAction.type = action.types[2];
    } else {
      nextAction.type = `${action.type}_FAIL`;
    }
    next(nextAction);
    return nextAction;
  }
};

function configureStoreProd(initialState) {
  const middlewares = [
    thunk,
    axiosMiddleware(client, axiosMiddlewareConfig),
  ];

  return createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
}

function configureStoreDev(initialState) {
  const middlewares = [
    thunk,
    axiosMiddleware(client, axiosMiddlewareConfig),
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares, logger)));

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../redux/reducers/index', () => {
  //     const nextReducer = require('../redux/reducers/index').default; // eslint-disable-line global-require
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
