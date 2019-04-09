import {
    createStackNavigator,
    createMaterialTopTabNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer
} from "react-navigation";
/**
 * 引入页面
 */
import WelcomePage from "../page/welcome/WelcomePage";
import BottomTabPage from "../page/home/BottomTabPage";
import DetailPage from "../page/detail/DetailPage";
import {connect } from "react-redux";
import { createReactNavigationReduxMiddleware,createReduxContainer} from 'react-navigation-redux-helpers';
export const rootCom = 'Init'; //设置跟路由

const InitNavigator = createStackNavigator({
    WelcomePage:{
        screen: WelcomePage,
        navigationOptions:{header:null}
    }
});
/**
 * 主导航器
 * @type {NavigationContainer}
 */
const MainNavigator = createStackNavigator({
    HomePage:{
       screen: BottomTabPage,
       navigationOptions:{
           header:null,
       }
    },
    DetailPage:{
        screen: DetailPage,
        navigationOptions: {

        }
    }
});

export const RootNavigator = createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
},{
    navigationOptions: {
        header : null,
    }
});

// export default createAppContainer(RootNavigator);
export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root',
);
/**
 * 将根导航器组件传递给 reduxifyNavigator 函数
 * 并返回一个将navigation state 和 dispatch 函数作为props的新组件
 */
const AppWithNavigationState = createReduxContainer(RootNavigator,'root');

/**
 * State到Props的映射关系
 * @param state
 * @returns {{state: NavigationState}}
 */
const mapStateToProps = state => ({
    state:state.nav
});

/**
 * 连接React组件与Redux store
 */
export default connect(mapStateToProps)(AppWithNavigationState);