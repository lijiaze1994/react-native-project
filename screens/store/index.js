import { applyMiddleware,createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';
import { middleware } from '../route/route';

const middlewares = [
    middleware
];

/**
 * 创建store
 */
export default createStore(reducers,applyMiddleware(...middlewares));