import { applyMiddleware, createStore, compose } from 'redux';
import promise from 'redux-promise-middleware';
import rootReducer from '../reducers';

const initialState = {};
const enhancers = [];
const middleware = [promise];

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
