import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题
import type {
   MineTopBarItem
} from "@/types/mine";

export const useMineStore = defineStore('mine', () => {
    //topBarState 响应式状态 topBarState topBarState.value
    const topBarState = ref<MineTopBarItem[]>([
        {
            title: "我的订单",
            icon: "renwuA",
        },
        {
            title: "我的喜爱",
            icon: "tuijianA",
        },
        {
            title: "福利中心",
            icon: "hongbao",
        },
        {
            title: "我的收藏",
            icon: "guanzhuA",
        }
    ])
    
    return {
        topBarState,
    }

})