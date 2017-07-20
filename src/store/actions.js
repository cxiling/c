import * as types from './mutation-types'

//更新应用的当前页面位置
export const changeCurrentPosition= ({ commit, state } , obj) => {

    commit(types.CHANGE_CURRENT_POSITION, { obj })

}

//export const getCurrentUserProfile= ({ commit, state } , obj) => {
//
//    commit(types.UPDATE_USER_PROFILE, { obj })
//
//}

