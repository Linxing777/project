<template>
<div class="shopping">
    <!-- 框架背景图 -->
    <div class="fixed top-0 left-0 w-full h-[35rem] -z-10 transform -translate-y-0 bg-cover bg-center overflow-hidden"
     style="background-image: url('https://ts1.tc.mm.bing.net/th/id/R-C.0970ba40ebca3d0ecb8299b714139c0b?rik=HTkpJu4RF3l%2f2Q&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20181113%2f131064397ea5446995311aac3822e4c4.jpeg&ehk=ByQirVOZE5nnBeTl1WbMS%2ft%2bMoHrgdWa0diG6v5%2bIZs%3d&risl=&pid=ImgRaw&r=0');" />
    <!-- 头部部分 -->
     <header class="search flex items-center text-sm mt-4 mx-4 bg-white rounded-full shadow-md">
        <!-- 车辆品牌选择框 -->
        <div class="place font-bold text-lg font-serif">
            
            <div
            @click="showPicker = true"
            class="flex items-center w-24 justify-center"
            >
            <span class="place text-[blue]">{{ fieldValue }}</span>
            <van-icon class="text-[red]" name="arrow-down" />
            </div>

            <van-popup v-model:show="showPicker" round position="bottom">
            <van-picker
            :columns="columns"
            @cancel="showPicker = false"
            @confirm="onConfirm"
            />
            </van-popup>

        </div>
        <!-- 搜索栏 -->
        <van-search
            v-model="searchField"
            placeholder="商品/关键字"
            clearable
            shape="round"
            class="w-full rounded-full bg-opacity-50"
            >
        </van-search>

    </header>
    <!-- 主体部分 -->
    <main class="menu">
        <!-- 主体头部部分 -->
        <header class="min-h-18 rounded-2xl p-2 shadow-md mx-4 my-4 border bg-blue-200 bg-opacity-50">
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
        <!-- 主体主要内容 -->
        <body>
            <section class="recommend mx-4 p-2 text-sm text-black bg-white bg-opacity-80 rounded-2xl shadow-md">
                <div class="flex justify-between items-center">
                    <h2 class="title font-bold text-lg flex items-center">
                        车辆推荐</h2>

                    <p class="ml-2 text-xs justify-center mr-2 mb-2">
                        <van-tag type="warning">{{ fieldValue }}</van-tag>
                    </p>
                 </div>
                 <!-- 车辆类型选择 -->
                 <van-tabs v-model:active="active">
                    <!-- 类型选择栏 -->
                    <van-tab
                        :title="items.title"
                        v-for="items in recommendItemState"
                    >
                        <!-- 显示车辆类型的款式 -->
                        <div v-for="item in items.items"  class="item" :class="item.type">
                            <div v-if="showRec(item.type)" class="text my-2 py-1 flex bg-gray-100 rounded-lg " >
                                <div class="item-img w-[10rem] h-[8rem] overflow-hidden rounded-lg">
                                    <van-image :src="item.image" class="w-full h-full object-cover"></van-image>
                                </div>
                                <div class="ml-1 mt-2 ">
                                    <div class="font-bold text-md text-left">{{item.title}}</div>
                                    <div class="text-mms text-left mt-2 text-gray-800 line-clamp-2 w-28">{{ item.place }}</div>
                                    <div class=" text-left font-semibold mt-4">￥{{ item.price }}元</div>
                                    <div class="text-ls text-left text-gray-500 ">已售{{ item.market }}份</div>
                                </div>
                                <van-icon name="cart-o" color="#1989fa" class="relative bottom-[-6.5rem] right-[-1rem]" size="1.5rem" />
                            </div>
                        </div>
                    </van-tab>
            
                </van-tabs>
            </section>

        </body>

    </main>
</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { toRefs } from "vue";
import { useShopStore } from "@/stores/shopStore";

const shopStore = useShopStore();
// const searchField = ref("");
const { topBarState, recommendItemState } = toRefs(shopStore);

const columns = [
  { text: "奥迪", value: "1" },
  { text: "宝马", value: "2" },
  { text: "奔驰", value: "3" },

];
const fieldValue = ref(columns[0].text);
const showPicker = ref(false);
const action = ref('1');
const onConfirm = ({ selectedOptions }) => {
  showPicker.value = false;
  fieldValue.value = selectedOptions[0].text;
  action.value = selectedOptions[0].value;
};
const searchField = ref("");

let showRec=(val)=>{

return val==action.value
}

</script>

<style scoped>

</style>