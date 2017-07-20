//init state
export default {

    //接口
    request: {
        user_profile: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetUserProfile', //请求当前用户信息,  uid（必填, 用户id), token (必填, 用户的providerKey)
        get_uptoken: 'http://datacenter.ttyuyin.com:8080/o/cdn/getUptoken.do', //获取上传图片token http://120.132.50.115:8080/o/cdn/getUptoken.do
    },

    //我的关注
    focus: {
        //相关专栏
        forum: {
            list: [
                {
                    id: 500012,
                }
            ],
            total: 1,
        },
        //相关概念
        concept : {
            list: [
                {
                    id: 500012,
                }
            ],
            total: 1,
        },
        //作者
        users : {
            list: [
                {
                    uid: 1024, //uid
                }
            ],
            total: 1,
        },
        //其他人的收藏夹
        favorites: {
            list: [
                {
                    id: 1101,
                    topic : { //文章列表
                        list: [
                            {
                                id: 1002, //文章id
                            },
                        ],
                        total: 0
                    }
                }
            ],
            total: 0,
        }
    },

    //我的收藏夹
    favorites: {
        list: [
            {
                id: 1101,
                topic : { //文章列表
                    list: [
                        {
                            id: 1002, //文章id
                        },
                    ],
                    total: 0
                }
            }
        ],
        total: 0,
    },

    //我最近浏览过的
    browsed: {
        //文章
        topic : { //文章列表
            list: [
                {
                    id: 1002, //文章id
                },
            ],
            total: 0
        }
    },

    //我的草稿
    draft: {
        //文章
        topic : {
            list: [
                {
                    id: 1002, //文章id
                },
            ],
            total: 0

        }
    }

}
