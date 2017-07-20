<template>
    <div class="article-content media-list list-block">
        <div class="item-content"><h1>{{item.title}}</h1></div>
        <div class="item-content" v-if="item">
            <div v-if="item.creator.head != ''" class="item-media">
                <img class="header-small-img lazy lazy-fadeIn" :data-src="item.creator.head" />
            </div>
            <div class="item-inner">
                <div class="item-title">{{item.creator.name}}</div>
                <div class="item-subtitle">{{item.creator.name}}</div>
            </div>
            <div class="item-after">
                <a href="#" class="button button-small">关注</a>
            </div>
        </div>
        <div class="banner" v-if="item.banner && item.banner != ''">
            <img class="lazy" :data-src="item.banner" />
        </div>
        <div class="item-content header-button-group">
            <div class="item-inner">
                <a href="#" class="link">
                    <i class="icon icon-heart-gray"></i>
                    <span>100</span>
                </a>
                <a href="#" class="link">
                    <i class="icon icon-chats-gray"></i>
                    <span>200</span>
                </a>
            </div>
            <div class="item-after">创建于{{item.createTime | format_time}}</div>

        </div>
        <div class="content-block" v-html="item.content">

        </div>

    </div>
</template>

<script type="text/javascript">
    export default{
        name: "article-content",
        props: ['item'],
    }
</script>
