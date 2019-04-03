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

const Route = createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
},{
    navigationOptions: {
        header : null,
    }
});

export default createAppContainer(Route);
