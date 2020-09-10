---
tags:
  - vue
  - 插件
---
## vue-awesome-swiper 4.1.1
比较知名的轮播框架，一般都会优先使用这个库，功能丰富，适用于各种轮播场景，什么 左右按钮，动态指示点、进度条指示器、垂直切换、一次性显示多个 slides……功能简直不要太完善
but
体积有点大！！！

![vue](https://img.shields.io/badge/MADE%20WITH-VUE-42a97a?style=for-the-badge&labelColor=35495d)
[![GitHub stars](https://img.shields.io/github/stars/surmon-china/vue-awesome-swiper.svg?style=for-the-badge)](https://github.com/surmon-china/vue-awesome-swiper/stargazers)
[![npm](https://img.shields.io/npm/v/vue-awesome-swiper?color=c7343a&label=npm&style=for-the-badge)](https://www.npmjs.com/package/vue-awesome-swiper)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/surmon-china/vue-awesome-swiper/Publish?label=publish&style=for-the-badge)](https://github.com/surmon-china/vue-awesome-swiper/actions?query=workflow%3APublish)
[![GitHub issues](https://img.shields.io/github/issues-raw/surmon-china/vue-awesome-swiper.svg?style=for-the-badge)](https://github.com/surmon-china/vue-awesome-swiper/issues)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](https://github.com/surmon-china/vue-awesome-swiper/blob/master/LICENSE)

[![NPM](https://nodei.co/npm/vue-awesome-swiper.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/vue-awesome-swiper)

[vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)

Old 版本:
- Swiper 4: [v3.1.3](https://github.com/surmon-china/vue-awesome-swiper/tree/v3.1.3)
- Swiper 3: [v2.6.7](https://github.com/surmon-china/vue-awesome-swiper/tree/v2.6.7) 
### Install
```
npm install swiper vue-awesome-swiper --save
```
```javascript
//在 main,js 里引入（全局）
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper)
```
- 配置
```javascript
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
```
- 实例
```javascript
<template>
  <swiper ref="mySwiper" :options="swiperOption">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        swiperOption: {
          // 所有的参数同 swiper 官方 api 参数一样
          // 
          pagination:{
              el:'.swiper-pagination'
          },
          //设置显示容器同时显示的数量
          slidesPerView:1,
          //初始化首页的索引
          //initialSlide:1,
          //自动切换时间
          autoplay:{
              delay:1000,
              //操作swiper后，不停止切换
              disableOnInteraction:true
          },
          spaceBetween:30,
          loop:true
        }
      }
    }
  }
</script>
```
### 参数配置
所有参数配置API和官网基本一致
[Swiper](https://www.swiper.com.cn/api/index.html)