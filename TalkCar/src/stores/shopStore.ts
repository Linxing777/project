import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题
import type {
    ShopTopBarItem,
    recommendItem
} from "@/types/shop";

export const useShopStore = defineStore('shop', () => {
    //topBarState 响应式状态 topBarState topBarState.value
    const topBarState = ref<ShopTopBarItem[]>([
        {
            title: "二手车",
            icon: "meirong",
        },
        {
            title: "车商城",
            icon: "shangjia",
        },
        {
            title: "口碑",
            icon: "xingping",
        },
        {
            title: "资讯",
            icon: "fabu",
        },
        {
            title: "排行榜",
            icon: "fenlei",
        }
    ])
    const recommendItemState = ref<recommendItem[]>([
        {
            title: "轿车",
            items: [
                {
                    type: '1',
                    title: "奥迪A6L",
                    image: "https://img3.bitautoimg.com/autoalbum/files/20220726/974/202207263472.JPG", 
                    price: "36W",
                    place: "奥迪官方店",
                    market: "6750"
                },
                {   type: '1',
                    title: "奥迪A7L",
                    image: "https://tse1-mm.cn.bing.net/th/id/OIP-C.ls-LcCUjNai4Wa86A72_0QHaEK?w=278&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
                    price: "90w",
                    place: "奥迪官方店",
                    market: "518"
                },
                {   type: '1',
                    title: "奥迪A8L",
                    image: "https://tse1-mm.cn.bing.net/th/id/OIP-C.9dRuyXmtu9AqnXN0MfCLjgHaFj?w=253&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7",
                    price: "135w",
                    place: "奥迪官方店",
                    market: "456"
                },
                {   
                    type: '2',
                    title: "宝马5i",
                    image: "https://tse4-mm.cn.bing.net/th/id/OIP-C.ZtJAkeqGF6mTfm7fHbQHTQHaEK?w=270&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
                    price: "43w",
                    place: "宝马官方店",
                    market: "4562"
                },
                {
                    type: '2',
                    title: "宝马3i",
                    image: "https://tse1-mm.cn.bing.net/th/id/OIP-C.SoT9RtPJzEhSthaWhbrnCQHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
                    price: "26w",
                    place: "宝马官方店",
                    market: "1235"
                },
                {
                    type: '2',
                    title: "宝马7i",
                    image: "https://tse1-mm.cn.bing.net/th/id/OIP-C.0QHF75AM9YUVV7IVf0U1fAHaFj?w=202&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
                    price: "125w",
                    place: "宝马官方店",
                    market: "3432"
                },
                {
                    type:'3',
                    title: "奔驰S",
                    image: "https://tse3-mm.cn.bing.net/th/id/OIP-C.Kl2GNDw3FjL0yOuPZnaktwHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7",
                    place: "奔驰官方店",
                    price: "110w",
                    market: "8689"
                },
                {
                    type: '3',
                    title: "奔驰C",
                    image: "https://img1.xcarimg.com/b85/s8693/2000_1500_20170517114433294118735748232.jpg",
                    place: "奔驰官方店",
                    price: "30w",
                    market: "3444"
                },
                {
                    type: '3',
                    title: "奔驰E",
                    image: "https://tse2-mm.cn.bing.net/th/id/OIP-C.-8LJb8tbLE4eShfxLrFxKQHaEK?w=244&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
                    place: "奔驰官方店",
                    price: "60w",
                    market: "1243"
                }
            ]
        },
        {
            title: "SUV",
            items: [
            ]
        },
        {
            title: "商务",
            items: []
        },
        {
            title: "跑车",
            items: []
        },
        {
            title: "其他",
            items: []
        }
    ])
    return {
        topBarState,
        recommendItemState
    }
})