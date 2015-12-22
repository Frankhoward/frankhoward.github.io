---
layout: post
title:  "Javascript学习笔记（1）"
date:   2015-11-22 
categories: [笔记]
---

# Netease作业（一） #

## HTML作业##

好久没更新了，主要是这段时间实在是忙，把课程又从头开始过一遍，把作业重新吃了一遍，确实收获不少，废话不多说，上代码。

![My helpful screenshot](/images/1.jpg)

    
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>云阅读畅销书排行榜</title>
      <style type="text/css">
    .booktap{width: 269px;padding-left: 30px;font-size: 17px;}
     .booktap h2{border-bottom: 1px solid #dddddd;padding-bottom: 22px;margin-bottom: 0px;font-size: 17px;}
     .bookl{list-style-type: none;padding: 0px;margin-top: 0px;}
     .bookl li{padding:12px 0px;border-bottom: 1px dotted #dddddd;}
     .bookl a{text-decoration: none;color: #393742;}
     .bookl a:link{color: #32303b;}
     .bookl a:hover{color: #963928;}
     .bookl span{border:1px solid #c4c2c3;padding:1px 4px;margin-right: 12px;color: #4f5e75;}
     .bookl li:nth-child(1) span,.bookl li:nth-child(2) span,.bookl li:nth-child(3) span{border-color: #963928;color: #963928;}
      </style>
    </head>  
    <body>
      <div class="booktap">
    <h2>图书畅销榜</h2>
    <ol class="bookl">
      <li><a href="#" title="当我足够好，才会遇见你"><span>1</span>当我足够好，才会遇见你</a>
      <li><a href="#" title="皮囊"><span>2</span>皮囊</a>
      <li><a href="#" title="李光耀论中国与世界"><span>3</span>李光耀论中国与世界</a>
      <li><a href="#" title="乖，摸摸头"><span>4</span>乖，摸摸头</a>
      <li><a href="#" title="男女内参"><span>5</span>男女内参</a>
    </ol>
      </div>
    </body>
    

![My helpful screenshot](/images/2.jpg)

    <!DOCTYPE html>
    <html>
    <head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
    h2{width: 540px;font-size: 17px;text-align: center;}
    .table{width: 540px;border-collapse: collapse;}
    .table th,.table td{border: 1px solid #eaeaea;padding: 10px 10px;text-align: left;}
    .table th{white-space: nowrap;background: #f7f7f7;color: #666666;font-weight: bold;}
    </style>
    </head>
    <body>
    <h2>运费详情</h2>
    <table class="table">
    <thead>
    <tr><th>区域</th><th>寄达地</th><th>首重（元/1000g）</th><th>续重（元/1000g）</th></tr>
    </thead>
    <tbody>
    <tr><th rowspan="2">一区</th><td>浙江、上海、江苏</td><td>6</td><td>1</td></tr>
    <tr><td>江西、安徽</td><td>7</td><td>1</td></tr>
    <tr><th>二区</th><td>吉林、黑龙江、云南</td><td>10</td><td>6</td></tr>
    <tr><th>三区</th><td>新疆、西藏</td><td>15</td><td>10</td></tr>
    </tbody>
    </table>
    </body>
    </html>

![My helpful screenshot](/images/3.jpg)

    <!DOCTYPE html>
    <html>
    <head lang="en">
    <meta charset="UTF-8">
    <title>注册表</title>
    <style type="text/css">
    form label.title{
    font-size: 17px;
    font-family: "Microsoft Yahei";
    width: 92px;
    height: 61px;
    line-height: 61px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    }
    form .txt{
    width: 200px;
    height: 42px;
    }
    form #delivery{
    width: 90px;
    height: 40px;
    }
    form textarea{
    width: 308px;
    height: 86px;
    }
    form button{
    margin-top: 18px;
    margin-left: 103px;
    width: 125px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    font-family: "Microsoft Yahei";
    color: #ffffff;
    background-color: #d753b8;
    border: none;
    }
    </style>
    </head>
    <body>
    <form action="/login" method="post" class="m-form">
    <div>
    <label class="title" for="file">头像</label>
    <input type="file" id="file">
    </div>
    <div>
    <label class="title" for="name">昵称</label>
    <input class="txt" type="text" id="name">
    </div>
    <div>
    <label class="title">学历</label>
    <select id="delivery">
    <option value="0" selected="selected">大专</option>
    <option value="1">本科</option>
    </select>
    </div>
    <div>
    <label class="title">性别</label>
    <input class="rd" type="radio" name="sexy" id="rd_0" value="male">
    <label for="rd_0">男</label>
    <input class="rd" type="radio" name="sexy" id="rd_1" value="female">
    <label for="rd_1">女</label>
    </div>
    <div>
    <label class="title">爱好</label>
    <input class="cb" type="checkbox" name="hobby" id="cb_0" value="movie" checked>
    <label for="cb_0">电影</label>
    <input class="cb" type="checkbox" name="hobby" id="cb_1" value="photo">
    <label for="cb_0">摄影</label>
    <input class="cb" type="checkbox" name="hobby" id="cb_2" value="music">
    <label for="cb_0">音乐</label>
    <input class="cb" type="checkbox" name="hobby" id="cb_3" value="read" checked>
    <label for="cb_0">阅读</label>
    </div>
    <div style="position:relative">
    <label class="title" for="autograph" style="position:absolute;top: 10%;" >签名</label>
    <textarea name="autograph" rows="4" id="autograph" style="margin-left:103px" st></textarea>
    </div>
    <div>
    <button type="submit">保存</button>
    </div>
    </form>
    </body>
    </html>

##CSS随堂测验##

![My helpful screenshot](/images/4.png)

    <!DOCTYPE html>
    <html>
    <head lang="en">
    <meta charset="UTF-8">
    <title>Tab</title>
    <style>
    body{
    font: 14px;"微软雅黑";
    }
    ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
    }
    .box{
    width: 572px;
    border: 1px solid #999;
    }
    .clearfix:after{
    content: ".";
    display: block;
    clear: both;
    height: 0;
    overflow: hidden;
    }
    .tab li{
    width: 190px;
    line-height: 30px;
    background: #f1f1f1;
    border-bottom: 1px solid #cecece;
    border-right: 1px solid #cecece;
    text-align: center;
    float: left;
    cursor: default;
    }
    li:last-of-type{
    border-right: none;
    }
    .tab li.on{
    background: #fff;
    border-bottom: none;
    }
    .content{
    display: none;
    background: #fff;
    padding: 20px;
    }  
    </style>
    </head>
    <body>
    <div class="box">
       <ul class="tab clearfix">
       <li class="on">课程</li>
       <li>学习计划</li>
       <li>技能图谱</li>
       </ul>
    <div class="content" style="display:block">课程内容</div>
    <div class="content">学习计划内容</div>
    <div class="content">技能图谱内容</div>
    </div>
    </body>
    </html>

![My helpful screenshot](/images/5.png)

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>弹窗</title>
    <style type="text/css">
    *{
    padding: 0px;
    margin: 0px;
    }
    body{
    height: 2700px;
    }
    .wrap{
    width: 300px;
    border:1px solid #cccccc;
    border-radius: 5px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    z-index: 999;
    }
    .head{
    height: 40px;
    padding: 0 20px;
    font:14px "微软雅黑";
    background: #eeeeee;
    line-height: 40px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    }
    .body{
    display: block;
    padding: 20px;
    background: white;
    font: 12px "宋体";
    }
    p{
    line-height: 1.5em;
    }
    button{
    display: block;
    width: 80px;
    height: 30px;
    background: #0066FF;
    color: white;
    border:0px;
    border-radius: 5px;
    margin: 0px auto 20px auto;
    }
    img{
    width: 10px;
    height: 10px;
    position: absolute;
    margin: 10px 0px 0px 280px;
    cursor: pointer;
    }
    </style>
    </head>
    <body>
    <div class="wrap">
    <img src="../x.png" alt="关闭">
    <div class="head">标题栏标题栏标题栏标题栏标题栏标题栏标题栏标题栏</div>
    <div class="body">
       <p>内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容段落内容内容</p>
       <button>确定</button>
    </div>
    </div>
    </body>
    </html>

##CSS作业##

![My helpful screenshot](/images/6.png)
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>侧主栏</title>
    <style type="text/css">
    .perent{
    width: 810px;
    height: 200px;
    margin-left: 30px;
    font:48px "微软雅黑";
    color: #ffffff;
    text-align: center;
    line-height: 200px;
    }
    .side{
    width: 200px;
    background-color: #c00000;
    float: left;
    }
    .main{
    width: 600px;
    background-color: #4f81bd;
    margin-left: 210px;
    }
    .clearfix:after{
    content: ".";
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
    }
    .clearfix{
    zoom: 1;
    }
    </style>
    </head>
    <body>
    <div class="perent clearfix">
    <div class="side">侧栏</div>
    <div class="main">主栏</div>
    </div>
    
    </body>
    </html>

![My helpful screenshot](/images/7.png)

    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title>新闻标题</title>
    	<style>
    	h2{
    		width: 200px;
    		font-size:16px;
    		font-weight: bold;
    		font-family: "SimSun";
    		color: #000000;
    		line-height: 25px;
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    	}
    	</style>
    </head>
    <body>
    	<h2>标题标题标题标题标题标题标题标题标题标题标题标题标题</h2>
    </body>
    </html>
    
![My helpful screenshot](/images/8.png)
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title>轮播图</title>
    	<style>
    	.slid{
    		width: 200px;
    		height: 100px;
    		background-color: #bdd7ee;
    		position: relative;
    	}
    .pointer{
    	position: absolute;
    	bottom: 10px;
    	right: 10px;
    	line-height: 10px;
    }
    i{
    	width: 10px;
    	height: 10px;
    	border-radius: 10px;
    	background-color: #000000;
    	display: inline-block;
    margin: auto 2.5px;
    
    }
    .current{
    	background-color: #ffffff;
    }
    	</style>
    </head>
    <body>
    	<div class="slid">
    		<div class="pointer"><i class="current"></i><i></i><i></i></div>
    	</div>
    </body>
    </html>

![My helpful screenshot](/images/9.png)
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>网易新闻</title>
    <style type="text/css">
    img{
    width: 100px;
    height: 100px;
    background-color: #0079be;
    float: left;
    }
    .text{
    margin-left: 15px;
    font-family: "Simsun";
    width: 181px;
    height: 100px;
    line-height: 25px;
    float: left;
    overflow: hidden;
    }
    h2{
    margin:0px; 
    font-size: 16px;
    font-weight: bold; 
    text-overflow:ellipsis;
    overflow: hidden;
    white-space: nowrap;
    }
    p{
    margin: 0;
    font-size: 14px;
    color: #666;
    }
    
    </style>
    </head>
    <body>
    <img src="http://163.com/x.jpg" alt="图片新闻">
    <div class="text">
    <h2>标题文字标题文字标题文字标题文字标题文字标题文字</h2>
    <p>段落文字段落文字段落文字段落文字段落文字段落文字段落文字段落文字段落文字段落文字段落文字段落文字段落文字段落文字段落文字段落文字</p>
    </div>
    </body>
    </html>
 
![My helpful screenshot](/images/10.png)

    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title>登录表单</title>
    	<style>
       form p{
       	font-size: 14px;
       	font-weight: bold;
       	font-family: "Microsoft Yahei";
       	line-height: 16px;
       }
       form label{
       	display: inline-block;
       	width: 60px;
       	font-size: 12px;
       	font-family: "Simsun";
       	vertical-align: middle;
       }
       form input{
       	width: 200px;
       	height: 20px;
       	box-sizing:border-box;
       	border: 1px solid #ddd;
       	margin-top: 15px;
       }
       button{
       	box-sizing:content-box;
       	width: 40px;
       	height: 20px;
       	background-color: #54aede;
       	color: #ffffff;
       	border: none;
       	font-size: 12px;
       	font-family: "Simsun";
       	text-align: center;
       	line-height: 20px;
       	margin-left: 60px;
       	margin-top: 15px;
       }
    
    	</style>
    </head>
    <body>
    <form method="/login">
    	<p>登录网易通行证</p>
    	<div>
    	   <label for="username">用户名：</label><input type="text" id="username" name="username">
    	</div>
    	<div>
    	   <label for="password">密码：</label><input type="text" id="password" name="password">
    	</div>
    	<button type="submit">登录</button>
    </form>
    </body>
    </html>

![My helpful screenshot](/images/11.png)

    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title>照片价格表</title>
    	<style>
    
    	</style>
    </head>
    <body>
    <table border="1">
    	<caption>照片冲印价格详情</caption>
    	<thead>
    	<tr>
    	   <th rowspan="2">相片尺寸</th>
    		   <th colspan="2">相纸（元/张）</th>
    	</tr>
    	<tr>	
    		   <th>富士</th>
    		   <th>柯达</th>
    		</tr>   
    	</thead>
    <tbody>
    	<tr>
    		<th>6寸</th>
    		<td>0.45</td>
    		<td>0.6</td>
    	</tr>
    	<tr>
    		<th>10寸</th>
    		<td>3.89</td>
    		<td>5</td>
    	</tr>
    	<tr>
    	<td colspan="3">运费8元/单，满99元免运费</td>
    	</tr>
    </tbody>
    </table>
    </body>
    </html>

![My helpful screenshot](/images/12.png)

    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title>下拉菜单</title>
    <style>
    .main{
    	font-size:12px;
    	font-family: "Simsun";
    }
    .btn{
    	width: 50px;
    	height: 28px;
    	line-height: 28px;
    	text-align: center;
    	border: 1px solid #ddd;
    	background-color: #eee;
    }
    .menu{
    	display: inline-block;
    	border:1px solid #ddd;
    	margin-top: 1px;
    }
    .menu span:not(:first-child){
    	border-top: 1px solid #ddd;
    }
    .menu .sub{
    	height: 30px;
    	line-height: 30px;
    	text-align: center;
    	padding-left: 10px;
    	padding-right: 10px;
    	background-color: #ffffff;
    	display: block;
    }
    .menu span:hover{
    	background-color: #ddd;
    }
    	</style>
    </head>
    <body>
    <div class="main">
    <div class="btn">按钮</div>
    	<div class="menu">
    		<span class="sub">下拉菜单项</span>
    		<span class="sub">下拉菜单项</span>
    		<span class="sub">下拉菜单项</span>
    		<span class="sub">下拉菜单项</span>
    	</div>
    	</div>
    </body>
    </html>

写累了。。最后来首歌吧，打打鸡血，继续自虐。[《Problem》](http://music.163.com/#/song?id=28461430)