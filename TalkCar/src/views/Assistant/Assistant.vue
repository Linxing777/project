<template>
    <div class="chatPage bg-center bg-cover" :style="{ backgroundImage: 'url(https://ts1.tc.mm.bing.net/th/id/R-C.3165c13211567eae12a050512f07083d?rik=ctNjD06yL1jdnQ&riu=http%3a%2f%2fimage.xcar.com.cn%2fattachments%2fa%2fday_160505%2f2016050500_bbc33969585ac512a2ceD8kA7Vw4q7tJ.jpg&ehk=vSQ3TpZcQ1IADmWd%2fm5FUd9TvttLYGzIbcXH7puC7p0%3d&risl=&pid=ImgRaw&r=0)' }">
        <!-- 头部 -->
        <div class="chat-header h-[calc(10vh)] w-full flex items-center justify-between border-red px-4 bg-gray-200 ">
            <div class="talk">
                <van-icon name="other-pay" size="2rem"/>
            </div>
            <div class="title">
                <h2>AI 论车助手</h2>
            </div>
            <div class="avatar">
                <van-icon name="https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png" size="2rem" />
            </div>
        </div>
        <!-- 聊天内容 -->
        <div class="chat-content h-[calc(72vh)] px-4 pt-4  overflow-y-auto">
            <div 
              class="chat-item w-full"
              v-for="(item, index) in items"
              :key="index"
            >
                <component :is="item.type == 1 ? AI : Users" :msg="item.msg" />
            </div>
                
        </div>
        <!-- 底部 -->
        <!-- 搜索框 -->
        <div class="chat-footer h-[calc(11vh)] w-full bottom-0 bg-gray-200 pt-1" v-show="falg">
            <van-search
                v-model="searchField"
                placeholder="请输入您的问题"
                show-action
                shape="round"
                background="transparent"
                @keydown.enter="onEnterSubmit($event)"
                clearable
            >
                <template #action>
                    <div class="text-white transform translate-y-1 " @click="SubmitEvent">
                        <van-icon name="guide-o" class="text-blue-500" size="1.25rem" />
                    </div>
                </template>
            </van-search>

        </div>
        <!-- 加载 -->
        <div v-show="!falg">
            <van-loading vertical class="text-black">
                <template #icon>
                    <van-icon name="star-o" size="30" color="red" />
                </template>
                  加载中...
            </van-loading>
        </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import  getCozeData  from "@/api/index";
import AI from "@/components/Assistant/AI.vue";
import Users from "@/components/Assistant/Users.vue";

type msgItem = {
  type: number; // 1:AI 2:用户
  msg: string;
};

const items = ref<msgItem[]>([
  {
    type: 1,
    msg: "你好，我是AI 论车助手，请问有什么可以帮到您的？"
  }
]) 
// 搜索框内容双向绑定
const searchField = ref("");
// 底部判断是否显示加载内容
const falg = ref(true);
// 提交事件
const SubmitEvent = async () => {
  if(searchField.value == ""){
    // items.value.push({
    //   type: 1,
    //   msg: "请输入您的问题"
    // })
    return;   
  } 
  const msg = searchField.value;
  falg.value = false;
  items.value.push({
    type: 2,
    msg: msg
  })
  searchField.value = "";
  try{
    const datas = await getCozeData(msg);
    falg.value = true;
    const result = datas.data.messages;
    console.log(result);
    const elements = result.forEach(element => {
      if(element.type == "answer"){
        items.value.push({
        type: 1,
        msg: element.content,
      });
    }
    });
  }catch(error){
    console.log(error);
    items.value.push({
      type: 1,
      msg: "服务器异常，请稍后再试"
    })
    falg.value = true;
  }
}
const onEnterSubmit = (event) => {
  event.stopPropagation(); // 阻止事件冒泡
  SubmitEvent();
}
</script>

<style scoped>

</style>