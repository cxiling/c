import {
    MY_FOUCES_CENTER, 
    MY_USER_PROFILE, 
    MY_FAVOURITE_LIST,
    MY_FAVOURITE_PAGE,
    MY_RENCENT_BROWSE_LIST,
    MY_DRAFT_PAGE
} from '../../mutation-types'


//mutations
export default {
	//我的关注
	[MY_FOUCES_CENTER](state, dataset) {

		//文章贴子列表 在各列表加多标志 比如 focus: 0,1 增加判断
		if(_.has(dataset, 'forum') && _.has(dataset.forum, 'list') && _.isArray(dataset.forum.list) ){
			//关注的
			state.focus.forum.total = dataset.forum.total ? dataset.forum.total : state.focus.forum.total
			//循环遍历贴子列表
			$$.each(dataset.forum.list,function(index, item) {
				
				const recordIndex = _.findLastIndex(state.forum.list, function(obj){
	                return obj.id == item.id
	            })
				if(recordIndex !== -1){
					_.extend(state.focus.forum.list[recordIndex], item);
				}else{
					state.focus.forum.list.push(item)
				}

			});
		}
		//相关概念
		if(_.has(dataset, 'concept') && _.has(dataset.concept, 'list') && _.isArray(dataset.concept.list) ){
			//关注的
			state.focus.concept.total = dataset.concept.total ? dataset.concept.total : state.focus.concept.total
			//循环遍历贴子列表
			$$.each(dataset.concept.list,function(index, item) {

				const recordIndex = _.findLastIndex(state.concept.list, function(obj){
	                return obj.id == item.id
	            })
				if(recordIndex !== -1){
					_.extend(state.focus.concept.list[recordIndex], item);
				}else{
					state.focus.concept.list.push(item)
				}

			});
		}
		//相关概念
		if(_.has(dataset, 'concept') && _.has(dataset.concept, 'list') && _.isArray(dataset.concept.list) ){
			//关注的
			state.focus.concept.total = dataset.concept.total ? dataset.concept.total : state.focus.concept.total
			//循环遍历贴子列表
			$$.each(dataset.concept.list,function(index, item) {

				const recordIndex = _.findLastIndex(state.concept.list, function(obj){
	                return obj.id == item.id
	            })
				if(recordIndex !== -1){
					_.extend(state.focus.concept.list[recordIndex], item);
				}else{
					state.focus.concept.list.push(item)
				}

			});
		}
		//相关作者
		if(_.has(dataset, 'user') && _.has(dataset.user, 'list') && _.isArray(dataset.user.list) ){
			//关注的
			state.focus.user.total = dataset.user.total ? dataset.user.total : state.focus.user.total
			//循环遍历贴子列表
			$$.each(dataset.user.list,function(index, item) {

				const recordIndex = _.findLastIndex(state.user.list, function(obj){
	                return obj.id == item.uid
	            })
				if(recordIndex !== -1){
					_.extend(state.focus.user.list[recordIndex], item);
				}else{
					state.focus.user.list.push(item)
				}

			});
		}
		//相关关注的收藏夹
		if(_.has(dataset, 'favorites') && _.has(dataset.favorites, 'list') && _.isArray(dataset.favorites.list) ){
			//关注的
			state.focus.favorites.total = dataset.favorites.total ? dataset.favorites.total : state.focus.favorites.total
			//循环遍历贴子列表
			$$.each(dataset.favorites.list,function(index, item) {

				const recordIndex = _.findLastIndex(state.favorites.list, function(obj){
	                return obj.id == item.id
	            })
				if(recordIndex !== -1){
					_.extend(state.focus.favorites.list[recordIndex], item);
				}else{
					state.focus.favorites.list.push(item)
				}

			});
		}
	},
	//我收藏的列表
	[MY_FAVOURITE_LIST](state,dataset){
		//相关概念
		if(_.has(dataset, 'list')  && _.isArray(dataset.list) ){
			//收藏的
			state.favorites.total = dataset.total ? dataset.total : state.favorites.total
			//循环遍历收藏列表
			$$.each(dataset.list,function(index, item) {

				const recordIndex = _.findLastIndex(state.favorites.list, function(obj){
	                return obj.id == item.id
	            })
				if(recordIndex !== -1){
					_.extend(state.favorites.list[recordIndex], item);
				}else{
					state.favorites.list.push(item)
				}

			});
		}
	},
	//我最近浏览的列表
	[MY_RENCENT_BROWSE_LIST](state,dataset){
		//传入的dataset均为文章帖子列表
		if(_.has(dataset, 'list') && _.isArray(dataset.list)){
			//最近浏览的文章标题
			state.browsed.topic.total = dataset.total ? dataset.total : state.browsed.topic.total
			//循环遍历浏览列表
			$$.each(dataset.list,function(index, item) {

				const recordIndex = _.findLastIndex(state.browsed.topic.list, function(obj){
	                return obj.id == item.id
	            })
				if(recordIndex !== -1){
					_.extend(state.browsed.topic.list[recordIndex], item);
				}else{
					state.browsed.topic.list.push(item)
				}
			});
		}
	},
	//我的草稿箱
	[MY_DRAFT_PAGE](state,dataset){
		//传入的dataset均为文章帖子列表 
		if(_.has(dataset, 'list') && _.isArray(dataset.list)){
			//最近浏览的文章标题
			state.draft.topic.total = dataset.total ? dataset.total : state.draft.topic.total
			//循环遍历草稿箱
			$$.each(dataset.list,function(index, item) {

				const recordIndex = _.findLastIndex(state.draft.topic.list, function(obj){
	                return obj.id == item.id
	            })
				if(recordIndex !== -1){
					_.extend(state.draft.topic.list[recordIndex], item);
				}else{
					state.draft.topic.list.push(item)
				}
				
			});
		}
	}
}
