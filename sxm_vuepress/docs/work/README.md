---
tags:
 - 知识笔记
---

## 笔记
俗话说，好记性不如烂笔头，工作项目中出现的一些零碎的知识，在此做一下记录，防止以后工作中需要而去各处查找！！
## css
### css移动端制作横竖屏切换提示
```
@media screen and (orientation: portrait) {
	/* 竖屏 */
}
@media screen and (orientation: landscape) {
	/* 横屏 */
}
```
```html
<!--html-->
<div id="orientLayer" class="layertip"> 
    <div class="layercontent">
        <i class="pt-page-rotatePushLeft"></i>
        <div class="txttip">为了更好的体验，请使用竖屏浏览</div>
    </div>
</div>
<div class="content">
    内容内容
</div>
<!--css-->
<style>
.layertip{display:none;width:100%;height:100%;min-width:320px;position:fixed; background:#000;z-index:9999;left:0;}
.layercontent{position: absolute;width: 100%;top: 45%;margin-top: -75px;text-align: center;}
.layertip i{width:73px;height:128px; background:url(http://app.cctv.com/special/2020/0426travelvote/img/bgiphone.png) left center no-repeat scroll; background-size:100% auto; display:inline-block;-webkit-animation:rotation infinite 1.5s ease-in-out;animation:rotation infinite 1.5s ease-in-out; -webkit-transform:rotate(90deg);transform:rotate(90deg);}
.layertip .txttip{margin-top: 20px;font-size: 15px;color:#1daae8;}
@media screen and (orientation : landscape) { 
    #orientLayer{display:block;}
} 
@media screen and (orientation : portrait){ 
    #orientLayer{display:none;}
}  
@keyframes rotation {
10% {
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg)
    }
    50% {
        transform: rotate(0);
        -webkit-transform: rotate(0)
    }
    60% {
        transform: rotate(0);
        -webkit-transform: rotate(0)
    }
    90% {
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg)
    }
    100% {
        transform: rotate(90deg);
        -webkit-transform: rotate(90deg)
    }
}
</style>
```

## vue

## js