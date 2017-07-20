//init state
export default {
    //localStorage
    cache:{
        key:'tt_km'
    },

    user:{
        userinfo:{
            token:''
        }
    },

    //接口
    request: {
        get_forum_list: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetForumList', //请求专栏列表,  pageNumber（可选，页码0 - n，默认为0), pageSize (可选, 默认为20条)
        get_forum_page: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetForumPage', //请求专栏信息和话题列表, forum_id(专栏id), pageNumber（可选，页码0 - n，默认为0), pageSize (可选, 默认为20条话题)
        set_forum_content: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/PostForumContent', //创建和更新专栏
        get_topic_page: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetTopicPage', //请求文章详情, topic_id(文章id), pageNumber（可选，页码0 - n，默认为0), pageSize (可选, 默认为20条话题)
        set_topic_content: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/PostTopicContent', //更新文章内容
        get_user_profile: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetUserProfile', //获取用户信息
        set_user_profile: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/PostUserProfile', //更新用户信息
        get_search_results: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetSearchResults', //搜索结果
        get_user_focus: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetUserFocus', //获取用户关注内容
        set_user_focus: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/PostUserFocus', //更新关注内容: 专栏,作者,收藏夹,概念
        get_user_actions: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetUserActions', //获取用户的动态
        get_user_topic: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetUserTopic', //获取用户的文章列表
        get_user_favorites: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetUserFavorites', //获取用户的收藏夹列表
        get_user_favorites_folder: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetUserFavoritesFolder', //获取用户的收藏夹详情
        set_user_favorites_folder: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/PostUserFavoritesFolder', //更新用户的收藏夹详情
        get_user_browsed: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetUserBrowsed', //获取用户最近浏览
        get_user_draft: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetUserDraft', //获取用户的草稿列表
        set_as_favorites: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/PostAsFavorites', //收藏文章和取消收藏
        set_as_liked: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetAsLiked', //赞文章和取消赞

        set_comments: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/PostTopicComments', //更新评论
        set_concept_content: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/PostConceptContent', //更新概念

        get_interest_content: '	http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetInterestContent', //获取用户感兴趣的内容(文章)
        get_user_message_list: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetUserMessageList', //获取消息列表
        get_user_message_timeline: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetUserMessageTimeline', //获取当前消息的时间轴内容
        set_user_signup: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/PostUserSignup', //注册
        get_user_login: 'http://dev_cms_3.52tt.com/umbraco/api/ForumApi/GetUserLogin', //登录
    },

    //当前位置
    current : {
        topicId: 0, //文章id
        forumId: 0, //专栏id
        commentsId: 0, //评论id
        pageName:'', //页名称
    },

    //当前用户信息
    user : {
        uid: 1067, //uid
        head:'',
        mobile:'12321231231',
        account:'1234',
        nick_name:'是是是',
        guild:1234,
        register_time:'2014-11-11 11:12:12',
        last_login_time:'2014-11-11 11:12:12',
        guild_before:2121,
        level:23,
        exp:2343,
        diamond:333,
        invite_number:2323,
        vaild:1,
        operating_system:'Android 5.5.5',
        device_mo:'df',
        account: 'my_account', //账号
        name: '月小薇',
        sex: true, //true为女性
        head: 'http://app.52tt.com/api/face?cpid=1&uid=16640085&gid=1&account=tt3773119&ver=1', //头像
        comments : '御风小卫士', //个性签名
        concerned: 100, //多少人关注
        liked: 500, //获得多少次赞
        providerKey: '47eaf7b9-38d1-434f-974f-0ced3546d74b', //token
    },

    //作者
    users: {
        list: [
            {
                uid: 1067, //uid
                account: 'my_account', //账号
                name: '月小薇',
                sex: 1, //1为男性, 2为女性, 3为其他
                head: 'http://app.52tt.com/api/face?cpid=1&uid=16640085&gid=1&account=tt3773119&ver=1', //头像
                comments : '御风小卫士', //个性签名
                concerned: 100, //多少人关注
                liked: 500, //获得多少次赞
            },
            {
                uid: 1162, //uid
                account: 'my_account', //账号
                name: '昵称',
                sex: 1, //1为男性, 2为女性, 3为其他
                head: 'http://app.52tt.com/api/face?cpid=1&uid=16640085&gid=1&account=tt3773119&ver=1', //头像
                comments : '御风小卫士', //个性签名
                concerned: 1000, //多少人关注
                liked: 300, //获得多少次赞
            },
            {
                uid: 1163,
                account: 'my_account',
                name: 'WOWer',
                sex: 1,
                head: 'http://app.52tt.com/api/face?cpid=1&uid=16640085&gid=1&account=tt3773119&ver=1',
                comments : '御风小卫士',
                concerned: 100, //多少人关注
                liked: 200, //获得多少次赞
            }
        ]
    },

    //文章列表
    topic : {
        list: [
            {
                id: 1002, //文章id
                forumId: 1008,   //专栏id
                title: 'Announcing Vue.js 2.0', //文章标题
                intro: '今天我们非常激动的首发',   //内容摘要
                content: '今天我们非常激动的首发 Vue 2.0 preview 版本，这个版本带来了很多激动人心的改进和新特性。我们来看看这里面都有些什么！', //富文本内容
                type: 1, //1为玩家,2为官方,3为商业推广
                banner: 'http://zhitu.isux.us/assets/img/imgSample/test-60.jpg', //横幅图片
                liked: {    //点赞列表
                    list: [
                        {
                            uid: 1162
                        }
                    ],
                    total: 10001    //该文章被点赞次数
                },
                comments: { //评论列表
                    list: [
                        {
                            id: 141414, //评论id
                            topicId: 114141, //文章id
                            forumId: 1515, //专栏id
                            content: '不好意思哈,只玩魔兽', //评论内容
                            createTime: 14741882873820, //创建时间
                            creator: { //评论者的信息
                                uid: 1163
                            },
                            reply: { //只用于评论了某人的评论, 这里是原始评论信息
                                id: 141414,
                                topicId: 114141,
                                forumId: 1515,
                                content: '王者荣耀可以吗',
                                createTime: 14741882873820,
                                creator: {
                                    uid: 1162,
                                }
                            },
                            liked: 10 //评论被赞次数
                        }

                    ],
                    total: 1,   //该文章的评论总数
                },
                visitorStatus: { //当前用户的状态
                    isLike: true, //是否点赞
                    isComment: true, //是否评论
                    isFavorites: true, //是否收藏
                },
                creator: {
                    uid: 1162, //文章作者id
                },

                commentTime: 14741882873820, //最近的一次评论发布时间
                updateTime: 14741882873820, //更新时间
                createTime: 14741882873820, //创建时间
                serverTime: 14741882873820, //获取数据返回的服务器时间戳
                localTime: 14741882873820,  //获取数据的本地时间戳
            },
        ]

    },


    //专栏
    forum : {
        list: [
            {
                id: 1008,
                name: '移动端框架技术专栏', //专栏名称
                icon:'', //图标
                intro: '移动端框架技术讨论和知识沉淀', //简介
                concerned: 10000, //关注用户数
                posts: 100,//发帖数
                admin: [
                    {
                        uid: 500013,
                    }
                ],
                topic : { //文章列表
                    list: [
                        {
                            id: 1002 //文章id
                        },
                    ],
                    total: 1000 //服务器上此专栏的发帖数量
                },
                updateTime: 14741882873820, //最近更新
                createTime: 14741882873820, //创建时间
                serverTime: 14741882873820, //获取数据返回的服务器时间戳
                localTime: 14741882873820,  //获取数据的本地时间戳
            }
        ],
        total:100
    },

    //概念
    concept : {
        list:[
            {
                id: 1100,
                name: 'Javascript', //概念
                icon:'http://dev_cms_3.52tt.com/media/1036/javascript_p.jpg', //图标
                intro: '直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言。', //简介
                concerned: 10000, //关注用户数

                creator: { //创建者的信息
                    uid: 1603,
                },
                topic: {
                    list: [
                        {
                            id: 1002 //文章id
                        },
                    ],
                    total: 100 //服务器上此概念包含的文章数
                },

                updateTime: 14741882873820, //最近更新
                createTime: 14741882873820, //创建时间
                serverTime: 14741882873820, //获取数据返回的服务器时间戳
                localTime: 14741882873820,  //获取数据的本地时间戳
            }
        ]
    },


    //收藏夹
    favorites: {
        list: [
            {
                id: 1101,
                name: '我的收藏夹', //文件夹名称
                intro: 'HTML5 + CSS3', //简介
                concerned: 100, //关注用户数

                creator: { //创建者的信息
                    uid: 1067,
                },
                topic: {
                    list: [
                        {
                            id: 1002 //文章id
                        },
                    ],
                    total: 100 //服务器上此收藏夹包含文章数
                },

                updateTime: 14741882873820, //最近更新
                createTime: 14741882873820, //创建时间
                serverTime: 14741882873820, //获取数据返回的服务器时间戳
                localTime: 14741882873820,  //获取数据的本地时间戳
            }
        ]
    }


}
