import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";

import type {
    HomeTopBarItem,
    PopularItem,
    HomeNavBarItem,
    ShareItem
} from "@/types/home";

export const useHomeStore = defineStore('home', () => {
    //topBarState 响应式状态 topBarState topBarState.value
    const topBarState = ref<HomeTopBarItem[]>([
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
    const popularState = ref<PopularItem[]>([
        {
            msg: "今日热门",
            type: "奥迪A8L",
            img:
                "https://www.audi.cn/content/dam/OneWeb/faw_vw/model/a8/allnew_a8lpa/pc/pc1_banner_1920x970_1.jpg",
        },
        {
            msg: "今日热门",
            type: "奥迪RS",
            img:
                "https://x0.ifengimg.com/ucms/2020_45/E6689646943A2EB3A31191441C5B249FADE5DE7B_w1920_h1080.jpg",

        },
        {
            msg: "今日热门",
            type: "帕拉梅拉",
            img:
                "https://tse1-mm.cn.bing.net/th/id/OIP-C.0xj-wGQnEmdK1CQUnq53eQHaD7?rs=1&pid=ImgDetMain",

        },
        {
            msg: "今日热门",
            type: "GTR",
            img:
                "https://ts1.tc.mm.bing.net/th/id/R-C.63cf03b5497762d0069eba71ad8fca7b?rik=34%2fKTzZC8zYZ4Q&riu=http%3a%2f%2fwww.largus.fr%2fimages%2fimages%2f2016-nissan-gtr-01_1.jpg&ehk=3og4hDEI7aqEJfUDTRJYN85P5IzK78zYJUhjKkesKno%3d&risl=&pid=ImgRaw&r=0",

        },
        {
            msg: "今日热门",
            type: "宝马745i",
            img:
                "https://img1.xcarimg.com/parts/1724/18443/33542/846_635_20190214180731538306238066934.jpg",

        },
        {
            msg: "今日热门",
            type: "奔驰E300",
            img:
                "https://www.icauto.com.cn/car/images/202208/20220830103206d91a2debe4b9f.jpg",

        },
        {
            msg: "今日热门",
            type: "奔驰C260",
            img:
                "https://tse4-mm.cn.bing.net/th/id/OIP-C.u9HwOHfb1vrJgUaNG-FCnAHaEK?rs=1&pid=ImgDetMain",
        },
        {
            msg: "今日热门",
            type: "奔驰S680",
            img:
                "https://x0.ifengimg.com/ucms/2022_35/71A3D6B0D922277A9529E5DE951171FB4D318647_size69_w1080_h720.jpg",
        }
    ])
    const navBarState = ref<HomeNavBarItem[]>([
    {
        title: "分享记录",
        icon: "logistics",
        msg: "记录汽车"
    },
    {
        title: "车辆管理",
        icon: "shopping-cart-o",
        msg: "管理爱车"
    },
    {
        title: "优惠活动",
        icon: "coupon-o",
        msg: "经济实惠"
    }
    ])
    const shareState = ref<ShareItem[]>([
        {
            nickName: "九九旅游日记",
            title: "一条视频讲清厦门怎么玩～附攻略",
            img: "https://img2.baidu.com/it/u=1224357212,4252795804&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
            loveNum: 9865
        },
        {
            nickName: "穷游特种兵",
            title: "大学生穷游特种兵之杭州两天一夜游",
            img: "https://img1.baidu.com/it/u=124748371,2878554213&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
            loveNum: 4750
        },
        {
            nickName: "小张旅游记",
            title: "我宣布！这个夏天我要去这里！",
            img: "https://img0.baidu.com/it/u=1388664807,2615899105&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=692",
            loveNum: 9899
        },
        {
            nickName: "小李爱旅游",
            title: "北京旅游攻略|终于有人一次性说清楚了！",
            img: "https://img1.baidu.com/it/u=1709212598,131203521&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
            loveNum: 4315
        },
        {
            nickName: "星星",
            title: "穷游海边城市千万不要错过 甚至一天300",
            img: "https://img1.baidu.com/it/u=1389924459,2280418880&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
            loveNum: 780
        },
        {
            nickName: "爱旅游的小王",
            title: "可遇不可求的蓝眼泪",
            img: "https://img0.baidu.com/it/u=2302978910,4270623494&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
            loveNum: 9520
        },
        {
            nickName: "小张旅游记",
            title: "我宣布！这个夏天我要去这里！",
            img: "https://img0.baidu.com/it/u=2302978910,4270623494&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
            loveNum: 9899
        },
        {
            nickName: "小李爱旅游",
            title: "北京旅游攻略|终于有人一次性说清楚了！",
            img: "https://img1.baidu.com/it/u=1709212598,131203521&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
            loveNum: 4315
        },
        {
            nickName: "星星",
            title: "穷游海边城市千万不要错过 甚至一天300",
            img: "https://img1.baidu.com/it/u=1389924459,2280418880&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=666",
            loveNum: 780
        },
        {
            nickName: "爱旅游的小王",
            title: "可遇不可求的蓝眼泪",
            img: "https://img0.baidu.com/it/u=1388664807,2615899105&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=692",
            loveNum: 9520
        },
        {
            nickName: "穷游特种兵",
            title: "大学生穷游特种兵之杭州两天一夜游",
            img: "https://img0.baidu.com/it/u=2897933825,1666004784&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
            loveNum: 4750
        },
        {
            nickName: "九九旅游日记",
            title: "一条视频讲清厦门怎么玩～附攻略",
            img: "https://img2.baidu.com/it/u=1224357212,4252795804&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=1067",
            loveNum: 9865
        },
    ])
    return {
        topBarState,
        popularState,
        navBarState,
        shareState
    }
})