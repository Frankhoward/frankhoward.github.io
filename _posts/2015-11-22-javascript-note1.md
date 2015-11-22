---
layout: post
title:  "Javascript学习笔记（1）"
date:   2015-11-22 
categories: [笔记]
---

# 第八章 BOM #

## 8.1 window对象

###8.1.1全局作用域
全局变量不能通过delete操作符删除，而直接在window对象上的定义的属性可以

###8.1.2窗口关系及框架
- window.frames[0]
- window.frames[1]
- window.parent=window.top

###8.1.3窗口位置
- IE、Safari、Opera、Chrome--window.screenLeft/window.screenTop
- Firefox--window.screenX/window.screenY
1. moveTo()--新位置的x、y坐标值
1. moveBy()--水平、垂直方向上移动的像素数

###8.1.4窗口大小
    var pageWidth=window.innerWidth(),
    pageHight=window.innerHeight();
    
    if (typeof pageWidth !="number" {
    	if (document.compateMode=="CSS1Compat") {
    		pageWidth=document.documentElement.clientWidth;
    		pageHight=document.documentElement.clientHight;
    	}else{
    		pageWidth=document.body.clientWidth;
    		pageHight=document.body.clientHight;
    	}
    
    }; 
1. resizeTo()接收浏览器窗口的新宽度和新高度
1. resizeBy()接收新窗口与原窗口的宽度和高度之差

###8.1.5导航和打开窗口
window.open()</br>
1.弹出窗口</br>
2.安全限值</br>
3.弹出窗口屏蔽程序

    var blocked=false;
    
    try {
    	var wroxWin=window.open("http://www.wrox.com","_blank");
    	if (wroxWin==null) {
    		blocked=true;
    	}
    } catch(ex){
    	blocked=true;
    }
    if (blocked) {
    	alert("The popup was blocked");
    };

###8.1.6超时调用
    setTimeout(function(){
    	alert("Hello world!");
    },1000);

###8.1.7系统对话框
1. alert()
1. confirm()
1. prompt()

##8.2 location对象
1. 保存当前文档信息
1. 将URL解析为独立的片段，让开发人员可以通过不同的属性访问这些片段

###8.2.1 查询字符串参数
    function getQueryStringArgs(){
    //取得查询字符串并去掉开头的问号
    var qs=(location.search.length>0?location.search.substring(1):""),
    //保存数据的对象
    args={},
    //取得每一项
    items=qs.length?qs.split("&"):[],
    item=null,
    name=null,
    value=null,
    //在for循环中使用
    i=0，
    len=items.length;
    //逐个将每一项添加到args对象中
    for(i=0,i<len;i++){
    	item=items[i].split("=");
    	name=decodeURIComponent(item[0]);
    	value=decodeURIComponent(item[1]);
    
    	if (name.length){
    		args[name]=value;
    	}
    }
    return args;
    }

###8.2.2 位置操作
可以“后退”

- location.hash()
- location.search()
- location.hostname()
- location.pathname()
- location.port()

不可以“后退”

- location.replace()

##8.3 navigator对象

###8.3.1 检测插件
- 检测常规</br>
hasPlugin()
- 检测Flash</br>
hasFlash()
- 检测QuickTime</br>
hasQuickTime()

###8.3.2 注册处理程序
- registerContentHandler()</br>
navigator.registerContentHandler("application/rss+xml","http://www.somereader.com?feed=%s","Some Reader");</br>
1.RSS源的MIME类型</br>
2.应该接收RSS源URL的URL</br>
3.应用程序的名称
- registerProtocolHandler()

##8.4 screen对象

##8.5 history对象
