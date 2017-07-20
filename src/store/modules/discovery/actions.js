import * as types from '../../mutation-types'

//专栏列表
export const initForumList = ({ commit, state, rootState } , callback) => {

    myApp.requestApi(
        rootState.request.forum_list,
        {},
        function (dataset){
            //数据准备
            const data = dataset.data
            data.serverTime = dataset.serverTime

            //专栏数据状态入库
            commit(types.UPDATE_FORUM, data)

            if(callback) callback();
        },
        //true
    )

}

//专栏详情
export const initForumPage = ({ commit, state, rootState } , callback) => {

    myApp.requestApi(
        rootState.request.forum_page,
        {forum_id: rootState.current.forumId},
        function (dataset){
            //数据准备
            const data = dataset.data
            data.serverTime = dataset.serverTime

            //文章列表状态入库
            if( _.has(data, 'topic') && !_.isNull(data.topic) ){
                commit(types.UPDATE_TOPIC, data.topic)
            }

            //专栏数据状态入库
            commit(types.UPDATE_FORUM, data)

            if(callback) callback();
        },
        //true
    )

}


//文章详情
export const initArticlePage = ({ commit, state, rootState } , callback) => {

    myApp.requestApi(
        rootState.request.article_page,
        {topic_id: rootState.current.topicId},
        function (dataset){
            const data = dataset.data
            data.serverTime = dataset.serverTime

            //文章状态入库
            commit(types.UPDATE_TOPIC, data)

            if(callback) callback();
        },
        //true
    )

}


//搜索结果
export const initSearchList = ({ commit, state, rootState } , callback) => {

    myApp.requestApi(rootState.request.search_results, {}, function(obj){
        const data = obj.data
        commit(types.INIT_SERACHE_RESULTS, data)
        if(callback) callback();
    }, true)

}
