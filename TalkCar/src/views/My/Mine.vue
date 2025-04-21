<template>
    <div class="mine h-100rem">
        <!-- 页面背景 -->
        <div
            class="minePage container h-[8rem] relative shadow-md
            bg-[url('https://photo.16pic.com/00/56/92/16pic_5692571_b.jpg')] 
            bg-cover bg-center"
        >
        <div class="text-center text-lg text-white font-bold pt-[2rem] "> 
            个人中心
        </div>
        <!-- 头像 -->
        <img
            src="https://p9-passport.byteacctimg.com/img/user-avatar/cefd3c82d3dcb0e695edbd5c19a96fe7~60x60.awebp"
            alt=""
            class="rounded-full w-20 h-20 mx-auto border-2 border-white shadow-md shadow-gray-400 absolute bottom-0 left-5 transform translate-y-[3rem]"
        />
        </div>
        <!-- 个人页面主体内容 -->
        <main class="mine-main">
            <!-- 登入组件 -->
            <div class="login-register container text-right px-5 pt-2">
                <van-button round type="success" color="red" class="font-bold">
                    &nbsp;&nbsp;登录&nbsp;&nbsp;
                </van-button>
            </div>
            <!-- 菜单栏 -->
            <section
              class="rounded-xl mt-[1rem] pb-[0.5rem] shadow-md bg-blue-200 mx-2 border "
            >
                <div class="topbar flex justify-around mt-[1.5rem]">
                    <div
                        class="topbar-item flex flex-col items-center"
                        v-for="item in topBarState"
                        :key="item.title"
                    >
                        <div class="topbar-item__icon">
                            <van-icon class="iconfont" :class="'icon-' + item.icon" size="2rem" color='rgb(77 127 195)'/>
                        </div>
                        <div class="topbar-item__text text-xs font-bold text-[green]">
                            {{ item.title }}
                        </div>
                    </div>
                </div>
            </section>
            <!-- 发布记录 -->
            <section
              class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-blue-100 mx-2 mt-3 border relative"
            >
                <div class="font-bold">
                    <van-icon
                      class="iconfont text-[1rem] mr-2"
                      color="black"
                      class-prefix="icon"
                      name="a-lvhanglvyoujilu"
                    />
                    分享记录
                </div>
                <div class="text-[0.8rem] text-gray-500 mt-4">分享你的喜爱记忆</div>
                <div class="absolute right-0 top-0 mt-5 mr-3">
                    <van-button round type="success" color="#00BFFF">立即发布</van-button>
                </div>
            </section>
            <!-- 足迹 -->
            <section
              class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-blue-100 mx-2 mt-3 border relative"
            >
                <div class="font-bold">
                    <van-icon
                      class="iconfont text-[1rem] mr-2"
                      color="black"
                      class-prefix="icon"
                      name="zuji2"
                    />
                    足迹
                </div>
                <div class="text-[0.8rem] text-gray-500 mt-4">记录购买记录</div>
                <div class="absolute right-0 top-0 mt-5 mr-3">
                    <van-button round type="success" color="#00BFFF">查看记录</van-button>
                </div>
            </section>

            <!-- 设置 -->
            <section
                class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-blue-100 mx-2 mt-3 border relative"
            >
                 <div class="font-bold">
                    <van-icon
                     class="iconfont text-[1rem] mr-2"
                     color="black"
                     class-prefix="icon"
                     name="shezhi"
                    />
                    设置
                </div>
                <div class="text-[0.8rem] text-gray-500 mt-4">管理你的个人信息</div>
                <div class="absolute right-0 top-0 mt-5 mr-3">
                    <van-button round type="success" color="#00BFFF">更改设置</van-button>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { useMineStore } from "@/stores/mineStore";

const mineStore = useMineStore();
const { topBarState } = toRefs(mineStore);
</script>

<style scoped>

</style>