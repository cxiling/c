
export default {
    forumList (state, getters, rootState) {
        return rootState.forum
    },

    currentForumPage (state, getters, rootState) {

        //查找当前专栏索引
        const recordIndex = _.findLastIndex(rootState.forum.list, function(item){
            return item.id == rootState.current.forumId
        })
        //返回数据
        if(recordIndex != -1){

            const cache = rootState.forum.list[recordIndex]

            //如果专栏存在文章列表
            if(_.has(cache, 'topic') && !_.isNull(cache.topic) && _.isArray(cache.topic.list)){

                //遍历该专栏的文章列表
                $$.each(cache.topic.list, function(index, item){

                    //找出state中对应文章索引
                    const recordIndex = _.findLastIndex(rootState.topic.list, function(obj){
                        return obj.id == item.id
                    })

                    //state存在对应文章, 则组合到cache
                    if(recordIndex != -1){
                        cache.topic.list.splice(index, 1, rootState.topic.list[recordIndex])
                    }

                })

            }
            return cache
        }else {
            return false
        }

    },

    currentArticle (state, getters, rootState) {

        let topicData = false

        //定位文章的索引
        const recordIndex = _.findLastIndex(rootState.topic.list, function(obj){
            return obj.id == rootState.current.topicId
        })

        //有则返回, 没有返回false
        if(recordIndex != -1) {
            topicData = rootState.topic.list[recordIndex]
            if (topicData.content && topicData.content != '') {
                topicData.content = topicData.content.toString().replace(/src=/,'class="lazy lazy-fadeIn" data-src=')
            }
        }

        return topicData

    },

    currentConcept (state, getters, rootState) {

        let topicData = false

        //定位文章的索引
        const recordIndex = _.findLastIndex(rootState.topic.list, function(obj){
            return obj.id == rootState.current.topicId
        })

        //有则返回, 没有返回false
        if(recordIndex != -1) {
            topicData = rootState.topic.list[recordIndex]
            if (topicData.content && topicData.content != '') {
                topicData.content = topicData.content.toString().replace(/src=/,'class="lazy lazy-fadeIn" data-src=')
            }
        }

        return topicData

    }
}
