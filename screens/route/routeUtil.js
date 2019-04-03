export default class RouteUtil{
    /**
     * 跳转到指定页面
     * @param params 要传递的参数
     * @param page 要跳转的页面
     */
    static goPage(params,page){
        const navigation = RouteUtil.navigation;
        if (!navigation){
            console.log('error');
            return;
        }
        navigation.navigate(page,{...params})
    }
}