import * as types from '../../mutation-types'


//用户信息
export const initUserInfo = ({ commit, state , rootState } , callback) => {

    myApp.requestApi(
        state.request.user_profile,
        {uid: rootState.current.uid},
        function (dataset){
            //数据准备
            const data = dataset.data
            data.serverTime = dataset.serverTime

            //专栏数据状态入库

            commit(types.UPDATE_USER_PROFILE, data)

            if(callback) callback();
        },
        //true
    )

}

//七牛上传初始化图片
export const initQiniuToken = ({ commit, state } , callback) => {

    myApp.requestApi(
        state.request.get_uptoken,
        {},
        function (dataset){
            //数据准备
            const data = dataset.data
            data.serverTime = dataset.serverTime

            const obj = { }
            Object.keys(data).forEach(k => { obj[k] = data[k] }) //提交参数

            //传入当前的七牛的token&domain参数
            commit(types.CHANGE_CURRENT_POSITION, { obj })

            if(callback) callback();
        },
        true
    )

}

