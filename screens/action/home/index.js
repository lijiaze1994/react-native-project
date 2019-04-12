import Types from '../types';
import DataStore from '../../expand/dao/DataStore';

/**
 * 获取首页数据的异步action
 * @param theme
 * @returns {{theme: *, type: string}}
 */
export function onLoadHomeData(storeName, url, pageSize) {
    return dispatch => {
        dispatch({
            type:Types.HOME_REFRESH,
            storeName:storeName
        });
        let dataStore = new DataStore();
        dataStore.fetchData(url) //异步action与数据流
            .then(data =>{
                handleData(dispatch,storeName,data,pageSize)
            })
            .catch(error =>{
                console.log(error);
                dispatch({
                    type:Types.LOAD_HOME_FAIL,
                    storeName:storeName,
                    error});
            })
    }
}

/**
 *
 * @param storeName
 * @param pageIndex 第几页
 * @param pageSize 每页显示条数
 * @param dataArray 原始数据
 * @param callBack 回调函数
 */
export function onLoadMoreHome(storeName,pageIndex,pageSize,dataArray=[],callBack){
    return dispatch => {
        setTimeout(() =>{
            //模拟网络请求
            if ((pageIndex - 1)* pageSize >= dataArray.length){
                if(typeof callBack === 'function'){
                    callBack('no more')
                }
                dispatch({
                    type:Types.LOAD_HOME_MORE_FAIL,
                    error: 'no more',
                    storeName:storeName,
                    pageIndex: --pageIndex,
                    projectModes: dataArray
                })
            } else {
                //本次和载入最大的数据量
                let max = pageSize * pageIndex >dataArray.length ? dataArray.length : pageSize * pageIndex  ;
                dispatch({
                    type: Types.LOAD_HOME_MORE_SUCCESS,
                    storeName:storeName,
                    pageIndex,
                    projectModes:dataArray.slice(0,max)
                })
            }

        },500);
    }
}

/**
 * 处理下拉刷新的数据
 * @param dispatch
 * @param storeName
 * @param data
 * @param pageSize
 */
function handleData(dispatch,storeName,data,pageSize){
    let fixItems =[];
    if (data && data.data && data.data.items){
        fixItems = data.data.items;
    }
    dispatch({
        type:Types.LOAD_HOME_SUCCESS,
        items:fixItems,
        projectModes:pageSize > fixItems.length ? fixItems : fixItems.slice(0,pageSize),//第一次要加载的数据
        storeName,
        pageIndex:1
    })
}