<template>
  <van-tabbar v-model="active" 
  class=" shadow-black shadow-2xl opacity-90"
  >
    <van-tabbar-item to="/assistant">
      <template #icon>
        <van-icon class="iconfont icon-zhinengAIzhushou" />
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/home">
      <template #icon>
        <van-icon class="iconfont icon-zhuye" />
      </template>
      首页
    </van-tabbar-item>
    <van-tabbar-item to="/shopping">
      <template #icon>
        <van-icon class="iconfont icon-gouwu" />
      </template>
      商城
    </van-tabbar-item>
    <van-tabbar-item to="/mine">
      <template #icon>
        <van-icon class="iconfont icon-gerenxinxi" />
      </template>
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";


const active = ref<number>(1);
onMounted(() => {
    const router = useRouter();
    if(router.currentRoute.value.path == "/home"){
        active.value = 1; 
    }   
    else if(router.currentRoute.value.path == "/shopping"){
        active.value = 2;  
    }
    else if(router.currentRoute.value.path == "/mine"){
        active.value = 3; 
    }else if(router.currentRoute.value.path == "/assistant"){
        active.value = 0;
    }
});
</script>

<style scoped></style>
