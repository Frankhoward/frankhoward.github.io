---
layout: post
title:  "Netease作业（二）"
date:   2016-1-14 
categories: [笔记]
---

###Javascript随堂讨论###

如果说HTML、CSS不足以称之为编程语言（其实确实不是，只不过是个网页解释语言罢了，汗~~(⊙﹏⊙)b），那么JS算是进入了编程的范畴内了，这个只花了10天就创造出来的东东，虽说目前还是有许多短板，但确实是越来越惊艳了~~全球编程语言排行榜TOP10的排名正在上升，预祝未来越来越牛掰，随声附一句：“PHP是世界上最好的语言！”（严肃脸）(。・＿・。)ﾉ

依旧是废话不多说，上代码！！

**1. JSON.STRINGIFY兼容**

JSON.stringify函数在ie6/7中不支持，如何兼容？

    if(!window.JSON){
    window.JSON = {
    parse: function(sJson){
    return eval("(" + sJSON + ")");
    },
    stringify: function(obj){
    var result = "";
    for(var key in obj){
    if(typeof obj[key] == "string"){
    // 如果属性值是String类型，属性值需要加上双引号
    result += "\"" + key + "\":\"" + obj[key] + "\",";
    }else if(obj[key] instanceof RegExp){
    // 如果属性是正则表达式，属性值只保留一对空大括号{}
    result += "\"" + key + "\":{},";
    }else if(typeof obj[key] == "undefined" || obj[key] instanceof Function){
    // 如果属性值是undefined, 该属性被忽略。忽略方法。
    }else if(obj[key] instanceof Array){
    // 如果属性值是数组
    result += "\"" + key + "\":[";
    var arr = obj[key];
    for(var item in arr){
    if(typeof arr[item] == "string"){
    // 如果数组项是String类型，需要加上双引号
    result += "\"" + arr[item] + "\",";
    }else if(arr[item] instanceof RegExp){
    // 如果属数组项是正则表达式，只保留一对空大括号{}
    result += "{},";
    }else if(typeof arr[item] == "undefined" || arr[item] instanceof Function){
    // 如果数组项是undefined, 则显示null。如果是函数，则显示null?。
    result += null +",";
    }else if(arr[item] instanceof Object){
    //如果数组项是对象(非正则，非函数，非null)，调用本函数处理
    result += this.stringify(arr[item]) +",";
    }else{
    result += arr[item] + ",";
    }
    }
    result = result.slice(0,-1)+"],"
     
    }else if(obj[key] instanceof Object){
    // 如果属性值是对象(非null，非函数，非正则)，调用本函数处理
    result += "\"" + key + "\":" + this.stringify(obj[key]) + ",";
    }else{
    result += "\"" + key + "\":" + obj[key] + ",";
    }
    }
    // 去除最后一个逗号,两边加{}
    return "{" + result.slice(0,-1) + "}";
    }
    };
    }
    
**2. 实现一个Circle类**

编程实现：
a.创建一个圆（Circle）的类，并定义该类的一个属性（半径）和两个方法（周长和面积），其中圆的半径可以通过构造函数初始化
b.创建圆的一个对象，并调用该对象的方法计算圆的周长和面积

    function Circle(r){
    this.r=r;
    }
    Circle.prototype.premeter=function(){
    return Math.round(Math.PI*2*this.r);
    Circle.prototype.area=function(){
    return Math.area(Math.PI*this.r*this.r);
    }
    var newCircle=new Circle(10);
    newCircle_premeter=newCircle.premeter();
    newCircle_area=newCircle.area();

**3. 请使用Js代码写出一个类继承的模型**

请使用Js代码写出一个类继承的模型，需包含以下实现：
定义父类和子类，并创建父类和子类的属性和方法
子类继承父类的属性和方法
在创建子类对象时，调用父类构造函数

    function ClassParent(property){
    //父类属性
    this.prototype_parent=property;
    }
    //父类方法
    ClassParent.prototype.api_parent=function(){
    console.log("api_parent");
    };
     
    function ClassChild(property1,property2){
    //子类添加新属性
    this.prototype_child=property1;
    //调用父类构造函数，以便在子类上继承父类属性
    ClassParent.call(this,property2)
    }
    //子类property指向一个父类的实例，以便继承父类的方法
    ClassChild.prototype=new ClassParent();
    ClassChild.prototype.constructor=ClassChild;
    //在子类上添加新方法
    ClassChild.prototype.api_child=function(){
    console.log("api_child");
    }
    //子类的实例obj不仅有子类的属性和方法，同时还继承了父类的属性和方法
    var obj=new ClassChild('子属性','父属性');
    console.log(obj.prototype_child);
    obj.api_child();
    console.log(obj.prototype_parent);
    obj.api_parent();

###Javascript作业###

**1.函数random用于生成0-999之间的随机整数。
**
    
    //var number = random();
    //number是0-999之间的整数。

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>RandomNum</title>
    </head>
    <body>
    <script>
    function getRandomNum(start,end){
    var num;
    var len=end+1-start;
    num=Math.floor(Math.random()*len+start);
    return num;
    }
    var RandomNum=getRandomNum(0,9);
    alert(RandomNum);
    </script>
    </body>
    </html>

**2.函数parseQuery用于解析url查询参数。**
    
    //var obj = parseQuery(query)
    //query是被解析的查询参数，函数返回解析后的对象。
    //使用范例如下：
    //var jerry = parseQuery("name=jerry&age=1");
    //jerry; 	返回值：{name: " jerry ", age: "1"}
    //var tom = parseQuery("name= tom &age=12&gender&");
    //tom; 	返回值：{name: "tom", age: "12", gender: ""}
    //请写出函数parseQuery的实现代码。
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>parseQuery</title>
    </head>
    <body>
    <script>
    function parseQuery(query){
    var arr = query.split("&"),
    obj = {};
    for(var i=0,len=arr.length;i<len;i++){
    obj[arr[i].split("=")[0]] = arr[i].split("=")[1] ? arr[i].split("=")[1] : "";
    }
    return JSON.stringify(obj);}
       var jerry = parseQuery("name=jerry&age=1");
       var tom = parseQuery("name= tom &age=12&gender&");
       alert(jerry);
       alert(tom);
    </script>
    </body>
    </html>

**3.函数multiply用于计算多个数字的乘积。**

    //var product = multiply (number0, number1[, number2, ….])；
    //使用范例如下：
    //multiply(2, 3);	 返回值： 6
    //multiply(-1, 3, 4);	返回值： -12
    //multiply(1, 2, 3, 4, 5);返回值： 120
    //请写出函数multiply的实现代码。
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>multiply</title>
    </head>
    <body>
    <script type="text/javascript">
    function  multiply(){
    var length = arguments.length,
    sum = 1,
    parameter;
    for (var i = 0; i < length; i++) {
    parameter = arguments[i];
    sum = sum * parameter;
    }
    return sum;
    }
    alert(multiply(2,3));//6
    alert(multiply(-1, 3, 4));//-12
    alert(multiply(1, 2, 3, 4, 5));//120
    </script>
    </body>
    </html>

**4.构造函数Person用于构造人**

    //function Person(name, age){
    // 函数体
    //}
    //使用范例如下：
    //var jerry = new Person("Jerry", 2);
    //jerry.introduce();		返回值： "I am Jerry, I am 2 years old! "
    //var tom = new Person("Tom", 12);
    //tom.introduce();		返回值： "I am Tom, I am 12 years old! "
    //请写出构造函数Person的实现代码。
    
    <!DOCTYPE html>
    <html>
    <head lang="en">
    <meta charset="UTF-8">
    <title>Person</title>
    </head>
    <body>
    <script>
    function Person(name,age){
    this.name=name;
    this.age=age;
    Person.prototype.introduce=function(){
    console.log("I am " + this.name + ",I am " + this.age + " years old!");
    }
    }
    var jerry=new Person("Jerry",2);
    var tom=new Person("Tom",12);
    jerry.introduce();//"I am Jerry, I am 2 years old! "
    tom.introduce();//"I am Tom, I am 12 years old! "
    </script>
    </body>
    </html>

**5.函数escapeHTML用于转义html字符串中的特殊字符(<>"&)。**

    //var escapedStr = escapeHTML(htmlStr);
    //使用范例如下：
    //escapeHTML('<div>Tom&Jerry</div> '); 		
    //返回值：
    //'&lt;div&gt;Tom&amp;Jerry&lt;/div&gt; '
    //escapeHTML('<input type="text" name="mobile"> '); 		
    //返回值：
    //'&lt;inputtype=&quot;text&quot; name=&quot;mobile&quot;&gt; '
    //请写出函数escapeHTML的实现代码。
    
    <!DOCTYPE html>
    <html>
    <head lang="en">
    <meta charset="UTF-8">
    <title>escapeHTML</title>
    </head>
    <body>
    <script>
    var entityMap={
    "<":"&lt;",
    ">":"&gt;",
    '"':'&quot;',
    "&":"&amp;"
    };
    function escapeHTML(htmlStr){
    return String(htmlStr).replace(/[<>"&]/g,function(s){return entityMap[s];});
    }
    var escapedStr = escapeHTML('<div>Tom&Jerry</div> ');
    console.log(escapedStr);//'&lt;div&gt;Tom&amp;Jerry&lt;/div&gt;'
    var escapedStr = escapeHTML('<input type="text" name="mobile"> ');
    console.log(escapedStr);//'&lt;inputtype=&quot;text&quot; name=&quot;mobile&quot;&gt;'
    </script>
    </body>
    </html>

6.实现type函数用于识别标准类型和内置对象类型

    <!DOCTYPE html>
    <html>
    <head lang="en">
    <meta charset="UTF-8">
    <title>type</title>
    </head>
    <body>
    <script>
    function type(obj){
    if(typeof (obj)!="object"){
    return typeof (obj);
    }
    return obj&&obj.constructor&&obj.constructor.toString().match(/function\s*([^(]*)/)[1];
    }
       var t = type(1)// t==="number"
       var t = type(new Number(1)) // t==="number"
       var t = type("abc") // t==="string"
       var t = type(new String("abc")) // t==="string"
       var t = type(true) // t==="boolean"
       var t = type(undefined) // t==="undefined"
       var t = type(null) // t==="null"
       var t = type({}) // t==="object"
       var t = type([]) // t==="array"
       var t = type(new Date) // t==="date"
       var t = type(/\d/) // t==="regexp"
       var t = type(function(){}) // t==="function"
       alert('t==="'+t+'"');
    </script>
    </body>
    </html>

**7.ES5中定义的Object.create(proto)方法，会创建并返回一个新的对象，这个新的对象以传入的proto对象为原型。**

//Object.create(proto)  （注：第二个参数忽略）
//proto —— 作为新创建对象的原型对象
//使用示例如下：
//var a = Object.create({x: 1, y: 2});
//alert(a.x);
//Object.create在某些浏览器没有支持，请给出Object.create的兼容实现。

    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title>Object.create(proto)</title>
    </head>
    <body>
    <script>
    	function _prototype(obj){
    		if (Object.prototype.creat) {
    			return Object.prototype.creat(obj);
    		}else{
    			this.prototype=new obj;
    		}
    	}
    	var a = Object.create({x: 1, y: 2});
    alert(a.x);
    </script>
    </body>
    </html>

**8.高版本的firefox,chrome及ie10以上的浏览器实现了Function.prototype.bind方法**

    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title>Function.prototype.bind</title>
    </head>
    <body>
    <script>
    	function move(x, y) {
    this.x += x;
    this.y += y;
    };
    if (Function.prototype.bind !="function") {
    	Function.prototype.bind = function(obj){
    		var _self = this,
    		args = arguments;
    		return function(){
    			_self.apply(obj,Array.prototype.slice.call(args,1));
    		}
    	};
    };
    var point = {x:1, y:2};
    var pointmove = move.bind(point, 2, 2);
    pointmove(); // {x:3, y:4}
    </script>	
    </body>
    </html>


**9.斐波那契数列（Fibonacci Sequence）由 0 和 1 开始，之后的斐波那契数就由之前的两数相加。在数学上，斐波那契数列是以递归的方法来定义的：**

    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title>Fibonacci Sequence</title>
    </head>
    <body>
    <script>
    	function fibonacci(n) { 
    return (function(n) { 
    if (n == 1 || n == 2) 
    return 1;
    return arguments.callee(n - 1) + arguments.callee(n - 2);
    })(n);
    } 
    var num = fibonacci(3);
    alert(num);// num值等于2
    var num = fibonacci(5);
    alert(num); // num值等于5
    </script>
    </body>
    </html>


###Javascript考试###

**1.函数myType用于根据输入参数返回相应的类型信息。**

    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="UTF-8">
    	<title>myType</title>
    </head>
    <body>
    <script>
    	function myType(obj){
    if(typeof (obj)!="object"){
    return typeof (obj);
    }
    return obj&&obj.constructor&&obj.constructor.toString().match(/function\s*([^(]*)/)[1];
    }
    var str = myType (1);//"number"
    var str = myType (false);//"boolean"
    var str = myType ({});//"object"
    var str = myType ([]);//"Array"
    var str = myType (function(){});//"function"
    var str = myType (new Date());//"Date"
    alert(str);
    </script>
    </body>
    </html>

**2.函数search用于在一个已排序的数字数组中查找指定数字。**

    //var index = search(arr, dst);
    //使用范例如下： 
    //var arr = [1, 2, 4, 6, 7, 9, 19,20, 30, 40, 45, 47];
    //search(arr, 45);		返回值： 10
    //请写出函数search的实现代码 请给出函数，要求不能使用Array的原型方法，且算法时间复杂度低于O(n)。
    
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Person</title>
    </head>
    <body>
    <script>
    function search(arr,dst){
    var index=pareseInt(arr.length/2);
    for(var i=0;i<=Math.sqrt(arr.length);i++){
    if(arr[index]==dst){
    return index--;
    }
    if(arr[index]>dst){
    index=pareseInt(index/2);
    }
    if(arr[index]<dst){
    index=pareseInt((index+arr.length)/2);
    }
    }
    }
    var arr=[1,2,4,6,7,9,19,20,30,40,45,47];
    alert(search(arr,45));
    </script>
    </body>
    </html>

**3.函数formatDate用于将日期对象转换成指定格式的字符串**

    //var str = formatDate(date, pattern);
    //其中pattern的全格式为"yyyy-MM-dd HH:mm:ss"
    //使用范例如下：
    //var date = new Date(2001, 8, 11, 8, 26, 8);
    //formatDate(date, "yyyy");		返回值： "2001"
    //formatDate(date, "yyyy-MM-dd");	返回值： "2001-09-11"
    //formatDate(date, "yyyy-MM-dd HH");		返回值： "2001-09-11 08"
    //formatDate(date, "yyyy-MM-dd HH:mm:ss");返回值： "2001-09-11 08:26:08"
    //请写出函数formatDate的实现代码。
    
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title>Person</title>
    </head>
    <body>
    <script>
    var date=new Date(2001,8,11,8,26,8);
    function formaDate(date,pattern){
    var toDouble=function(n){
    return n<10?'0'+n:n;
    };
    var reg=/([yY]{4}|MM|[dD]{2}|[hH]{2}|mm|[sS]{2})/g;
    var str=pattern.replace(reg,function(item){
    if(item=='MM')
    return toDouble(date.getMonth()+1);
    item=item.toLowerCase();
    switch (item){
    case 'yyyy':
    return date.getFullYear();
    case 'dd':
    return toDouble(date.getData());
    case 'hh':
    return toDouble(date.getHours());
    case 'mm':
    return toDouble(date.getMinutes());
    case 'ss':
    return toDouble(date.getSeconds());
    }
    });
    return str;
    }
    console.log(formaDate(date,'yyYy-MM-dD hh:mm:ss'));
    </script>
    </body>
    </html>

累死宝宝了。。╮(╯▽╰)╭老传统。。送上一支好歌~
[《海になれたら（听见涛声主题曲）》](http://music.163.com/#/song?id=542047)

宫爷爷的老片子，确实是清新到极点，以至于我怀疑我这年纪的人是否适合观影，BUT！经典就是经典，包括主题曲，真真的能勾起高中时代那个懵逼少年的点点回忆！