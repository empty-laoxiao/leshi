"use strict";window.onload=function(){$(".username").blur(function(){/^\w{4,9}$/.test($(".username").val())||layer.msg("用户名不合法")}),$(".password").blur(function(){/^\w{5,10}$/.test($(".password").val())||layer.msg("密码不合法")}),$("#login-btn").click(function(){var a=$(".username").val(),n=$(".password").val();$.ajax({url:"/logon",type:"post",data:{username:a,password:n},success:function(e){var s=JSON.parse(e);if(console.log(s),1==s.code){layer.msg("登录成功"),window.location="./index.html";var o=new Date;o.setTime(o.getTime()+864e5),document.cookie="username="+a+";expires="+o,document.cookie="password="+n+";expires="+o}2==s.code&&layer.msg("请先注册!")}})})};