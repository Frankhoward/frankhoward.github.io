window.onload=function(){var a=document.querySelector(".back-top");100<=document.documentElement.scrollTop+document.body.scrollTop&&(a.style.display="inline");a.addEventListener("click",function(a){a.preventDefault();setTimeout(function(){document.documentElement.scrollTop-=document.documentElement.scrollTop/3;document.body.scrollTop-=document.body.scrollTop/3;0<document.documentElement.scrollTop+document.body.scrollTop&&setTimeout(arguments.callee,30)},30)},!1);document.addEventListener("scroll",
function(){clearTimeout(b);var b=setTimeout(function(){100>document.documentElement.scrollTop+document.body.scrollTop&&(a.style.display="none");100<=document.documentElement.scrollTop+document.body.scrollTop&&(a.style.display="inline")},200)},!1)};