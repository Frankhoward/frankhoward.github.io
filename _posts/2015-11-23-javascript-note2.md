---
layout: post
title:  "Javascript学习笔记（2）"
date:   2015-11-23 
categories: [笔记]
---

#第九章 客户端检测

##9.1 能力检测

1. 先检测达成目的的最常用的特性
1. 一个特性存在，不一定意味着另一个特性也存在

###9.1.1 更可靠的能力检测

    //在IE8及之前版本中不行
    function hasCreateElement() {
    return typeof document.createElement=="function";
    }

    result=isHostMethod(xhr,"open");//ture
    result=isHostMethod(xhr,"foo"); //false

###9.1.2 能力检测，不是浏览器检测

最好一次行检测所有相关特性，而不要分开检测

    //确定浏览器是否支持Netscape风格的插件
    var hasNSPlugins=!!(navigator.plugins&&navigator.plugins.length);

##9.2 怪癖检测

bug检测

##9.3 用户代理检测

###9.3.1 用户代理字符串的历史

###9.3.2 用户代理字符串检测技术
