<template>
    <div class="page">
        <Search/>
        <div class="swiper-container" v-if="pageSort">
            <div class="swiper-wrapper">
                <ul class="swiper-slide page_ul" v-for="(list, index) of pageSort" :key="index">
                    <li class="page_ul_item" v-for="i of list" :key="i.linkId" @click="link(i.linkToSrc)">
                        <div :style="{backgroundImage: `url(${i.linkIco})`}"></div>
                        <p>{{i.linkName}}</p>
                    </li>
                </ul>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper'
    import Search from '../../components/Search/Search.vue'
    export default {
        watch: {
            pageSort: function () {
                this.$nextTick(() => {
                    new Swiper('.swiper-container', {
                        loop: true,
                        // 分页器
                        pagination: {
                            el: '.swiper-pagination'
                        }
                    })
                })
            }
        },
        components: {
            Search
        },
        computed: {
            pageSort () {
                if (this.$store.state.saveList.dataList) {
                    const list = this.$store.state.saveList.dataList
                    let res = []
                    let item = []
                    for (let i = 0, len = list.length; i < len; i++) {
                        item.push(list[i])
                        if (item.length === 10) {
                            res.push(item)
                            item = []
                        } else if (i + 1 === len) {
                            res.push(item)
                        }
                    }
                    return res
                }
            }
        },
        methods: {
            link (url) {
                window.location.href = url
            }
        }
    }
</script>
<style lang="less">
    .page {
        margin-top: -5vmax
    }
    .swiper-container {
        width: 50vmax;
        height: 24vmax;
        margin: 0 auto;
    }
    .page_ul {
        display: flex;
        flex-flow: wrap;
    }
    .page_ul_item {
        display: flex;
        flex-flow: column;
        width: 6vmax;
        height: 12vmax;
        margin: 0 2vmax;
        div {
            width: 6vmax;
            height: 6vmax;
            background: no-repeat center center;
            background-size: 100% 100%;
            border-radius: 50%;
        }
        p {
            margin-top: 1vmax;
            text-align: center;
        }
    }
</style>
