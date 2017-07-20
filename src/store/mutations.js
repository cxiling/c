import {
    CHANGE_CURRENT_POSITION,
    UPDATE_FORUM,
    UPDATE_TOPIC,
    UPDATE_CONCEPT,
    UPDATE_FAVORITES,
    UPDATE_USERS,
    UPDATE_USER_PROFILE
} from './mutation-types'


export default {
    //更新当前要访问的页面
    [CHANGE_CURRENT_POSITION] (state, { obj }) {
        if(obj){
            _.extend(state.current, obj)
        }
    },

    //专栏
    [UPDATE_FORUM] (state, data) {

        const svrTime = data.serverTime  //服务器时间
        const localTime = _.now()   //当前时间

        //如果专栏是列表结构
        if (_.has(data, 'list') && _.isArray(data.list)) {

            state.forum.total = _.has(data, 'total') ? data.total : state.forum.total //获取所有专栏的总数

            //遍历并更新专栏信息
            $$.each(data.list, function(index, item){
                initForumState(item)
            })
        }
        else { //针对进入专栏详情的数据接口
            initForumState(data)
        }


        function initForumState( data ) {

            //包含本地和服务器时间
            data.serverTime = svrTime
            data.localTime = localTime

            //数据在store中的索引
            const recordIndex = _.findLastIndex(state.forum.list, function(obj){
                return obj.id == data.id
            })

            //如果数据存在则更新,不存在则增加
            if (recordIndex != -1){

                //文章列表处理: 如果存在文章列表, 则滤掉id外的字段
                if(_.has(data, 'topic') && !_.isNull(data.topic) && _.isArray(data.topic.list)) {

                    const topicIds = []
                    $$.each(data.topic.list, function(index, item){
                        topicIds.push({
                            id: item.id
                        })
                    })

                    data.topic.list = topicIds //转换为只包含id的对象数组


                    //如果state该专栏存在文章列表,则合并列表并更新state
                    if ( _.has(state.forum.list[recordIndex], 'topic') && !_.isNull(state.forum.list[recordIndex].topic) && _.isArray(state.forum.list[recordIndex].topic.list) ) {

                        data.topic.list = _.union(data.topic.list, state.forum.list[recordIndex].topic.list)

                        //去重
                        data.topic.list = _.uniq(data.topic.list, function(num) {
                            return num.id
                        })

                    }

                }else {
                    //去除为null的topic字段
                    data = _.omit(data, 'topic')
                }

                //属性覆盖
                _.extend(state.forum.list[recordIndex], data)
            }
            else {
                state.forum.list.push(data)
            }
        }


    },

    //文章
    [UPDATE_TOPIC] (state, data) {

        const svrTime = data.serverTime  //服务器时间
        const localTime = _.now()   //当前时间

        //如果文章是列表结构
        if (_.has(data, 'list') && _.isArray(data.list)) {
            state.topic.total = _.has(data, 'total') ? data.total : state.topic.total //获取文章的总数

            //遍历并更新专栏信息
            $$.each(data.list, function(index, item) {
                initArticleState(item)
            })
        }
        else {
            initArticleState(data)
        }


        function initArticleState(data) {

            //增加本地和服务器时间
            data.serverTime = svrTime
            data.localTime = localTime

            //获取数据在store中的索引
            const recordIndex = _.findLastIndex(state.topic.list, function(obj){
                return obj.id == data.id
            })

            //如果数据存在则更新,不存在则增加
            if (recordIndex != -1){

                //作者列表处理


                //属性覆盖
                _.extend(state.topic.list[recordIndex], data)
            }
            else {
                state.topic.list.push(data)
            }
        }
    },


    //概念
    [UPDATE_CONCEPT] (state, data) {

        const svrTime = data.serverTime  //服务器时间
        const localTime = _.now()   //当前时间

        //增加本地和服务器时间
        data.localTime = localTime

        //获取数据在store中的索引
        const recordIndex = _.findLastIndex(state.concept.list, function(obj){
            return obj.id == data.id
        })

        //如果数据存在则更新,不存在则增加
        if(recordIndex != -1){
            _.extend(state.concept.list[recordIndex], data)
        }else {
            state.concept.list.push(data)
        }
    },


    //用户
    [UPDATE_USERS] (state, data) {

        const svrTime = data.serverTime  //服务器时间
        const localTime = _.now()   //当前时间

        //增加本地和服务器时间
        data.localTime = localTime

        //获取数据在store中的索引
        const recordIndex = _.findLastIndex(state.users.list, function(obj){
            return obj.id == data.id
        })

        //如果数据存在则更新,不存在则增加
        if(recordIndex != -1){
            _.extend(state.users.list[recordIndex], data)
        }else {
            state.users.list.push(data)
        }
    },


    //收藏夹
    [UPDATE_FAVORITES] (state, data) {

        const svrTime = data.serverTime  //服务器时间
        const localTime = _.now()   //当前时间

        //增加本地和服务器时间
        data.localTime = localTime

        //获取数据在store中的索引
        const recordIndex = _.findLastIndex(state.favorites.list, function(obj){
            return obj.id == data.id
        })

        //如果数据存在则更新,不存在则增加
        if(recordIndex != -1){
            _.extend(state.favorites.list[recordIndex], data)
        }else {
            state.favorites.list.push(data)
        }
    },

    //当前用户信息
    [UPDATE_USER_PROFILE] (state, data) {
        //增加本地时间
        data.localTime = _.now()
        state.userProfile = data
    },


}
