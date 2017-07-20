import Vue from 'vue'
import Vuex from 'vuex'

import state from './state' //state
import discovery from './modules/discovery/index' //discovery modules
import myProfile from './modules/my-profile/index' //my profile modules
import search from './modules/search/index' //modules
import user from './modules/userinfo/index' //modules
import * as actions from './actions'    //actions
import mutations from './mutations'     //mutations

Vue.use(Vuex)

//init store
export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        discovery,
        myProfile,
        search,
        user
    },
})
