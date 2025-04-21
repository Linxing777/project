<template>
    <div class="home">
        <!-- 框架背景图 -->
        <div class="top-bg absolute h-[35rem] w-full -z-10 w-screen bg-cover bg-center "
            style="background-image: url('https://img.keaitupian.cn/newupload/05/1685418107468810.jpg');" 
            />
        <!-- 头部部分 -->
        <header class="search flex justify-between items-center px-5 py-4 text-sm bg-blue-100 bg-opacity-20">
            <!-- 左侧箭头 -->
            <div class="flex space-x-1">
                <van-icon name="arrow-double-right" size="1.25rem" class="text-blue-400/80 hover:text-blue-300 transition-colors" />
                <van-icon name="arrow-double-right" size="1.25rem" class="text-blue-400/80 hover:text-blue-300 transition-colors" />
                <van-icon name="arrow-double-right" size="1.25rem" class="text-blue-400/80 hover:text-blue-300 transition-colors" />
            </div>
            <div class="font-bold text-lg px-6 py-1 text-center font-mono tracking-widest 
               text-blue-400 
               hover:text-blue-300 transition-colors 
               drop-shadow-[0_0_5px_rgba(59,130,246,0.7)] 
               hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.9)]">
                论车TalkCar
            </div>
            <!-- 右侧箭头 -->
            <div class="flex space-x-1">
                <van-icon name="arrow-double-left" size="1.25rem" class="text-blue-400/80 hover:text-blue-300 transition-colors" />
                <van-icon name="arrow-double-left" size="1.25rem" class="text-blue-400/80 hover:text-blue-300 transition-colors" />
                <van-icon name="arrow-double-left" size="1.25rem" class="text-blue-400/80 hover:text-blue-300 transition-colors" />
             </div>
        </header>
        <!-- 主体部分 -->
        <main class="flex flex-col space-y-1">
                <!-- 主体头部部分导航栏 -->
            <header class="min-h-18 rounded-2xl p-2 shadow-md mx-4 my-4 border bg-blue-200 bg-opacity-60">
                <!-- 导航栏 -->
                <section class="topbar flex justify-around my-[0.5rem]">
                    <div
                    class="topbar-item flex flex-col items-center"
                    v-for="item in topBarState"
                    :key="item.title"
                    >
                        <div class="topbar-item__icon">
                            <van-icon class="iconfont" :class="'icon-' + item.icon" size="2rem" />
                        </div>
                        <div class="topbar-item__text text-xs font-bold text-[white]">
                            {{ item.title }}
                        </div>
                    </div>
                </section>
            </header>
            <!-- 导航栏 -->
            <section class="flex justify-around px-2 py-3">
                <div
                class="navbar-item group flex flex-col rounded-lg bg-white w-24 h-24 p-3 shadow-sm hover:shadow-md border border-gray-100 hover:border-blue-200 bg-opacity-60"
                v-for="item in navBarState"
                 :key="item.title"
                >
                    <div class="icon-container self-start p-1 ">
                        <van-icon :name="item.icon" size="1.5rem" class="text-gray-500" />
                    </div>
                    <div class="text-container mt-auto w-full">
                        <div class="text-sm font-semibold text-gray-800 group-hover:text-blue-600 ">
                            {{ item.title }}
                        </div>
                        <div class="text-xs font-medium text-gray-600 group-hover:text-blue-500 ">
                            {{ item.msg }}
                        </div>
                    </div>
                </div>
            </section>
            <!-- 车辆推荐 -->
            <section>
                <div class="flex justify-between items-center px-6 text-sm text-white">
                    <h2 class="title font-bold text-lg text-red-500">热门推荐</h2>
                    <span
                    class="flex flex-row items-center justify-center text-xs text-white"
                    >
                        查看更多
                        <van-icon name="arrow" size="1rem" class="ml-1" />
                    </span>
                </div>
                <PopularCard :items="popularState" />
            </section>
            <!-- 分享 -->
            <section>
                <div class="flex justify-between items-center px-5  text-sm">
                    <h2 class="title font-bold text-lg font-mono text-yellow-500">MyShare</h2>
                    <van-search
                    v-model="searchField"
                    placeholder="搜索喜爱的分享"
                    clearable
                    background="transparent"
                    shape="round"
                    class="w-full rounded-full"
                    />
                </div>
                <ShareCard :items="shareState" />
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
// pinia 数据管理 + 组件显式
import { ref } from "vue";
import { toRefs } from "vue";
import { useHomeStore } from "@/stores/homeStore";
import PopularCard from "@/components/Home/PopularCard.vue";
import ShareCard from "@/components/Home/ShareCard.vue";
const homeStore = useHomeStore();
const searchField = ref("");
const { topBarState,
        popularState,
        navBarState,
        shareState 
    } = toRefs(homeStore);


</script>

<style scoped>

</style>