import { combineReducers } from 'redux';
import theme from './theme';
import home from './home';
import { rootCom,RootNavigator} from "../route/route";

/**
 * 指定默认的State
 * @type {State}
 */
const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

/**
 * 创建自己的navigation reducer
 */
const navReducer = (state = navState,action)=>{
    const nextState = RootNavigator.router.getStateForAction(action,state);
    //如果 nextState 为null或未定义，只需要返回原始state
    return nextState || state;
};

/**
 * 合并reducer
 */
const index = combineReducers({
    nav: navReducer,
    theme:theme,
    home:home
});

export default index;
