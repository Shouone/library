function newOpen(){
var mask=document.createElement('div');
document.body.appendChild(mask);
mask.id='mask';
var maskH=document.documentElement.scrollHeight;
mask.style.height=maskH+'px';
var loin=document.createElement('div');
document.body.appendChild(loin);
loin.id='loin';
loin.innerHTML='<div id="loincon">'+
         '<div class="loincon_1">'+
           " <h3>"+"快速安全登录"+'</h3>'+
           '<p class="tip">'+'请使用'+'<a href="#">'+'QQ手机版'+'</a>'+'扫描二维码，'+
            '安全登录，防止盗号。'+'</p>'+
         ' <a href="#">'+'<img src="22.png" alt="">'+'</a>'+
          '<p class="btn">'+'<a href="#">'+'意见反馈'+'</a>'+'<a href="#">'+'注册新帐号 |'+'</a>'+  '<a href="">'+'帐号密码登录 |'+'</a>'+ ' </p>'+
          '</div>'+
         ' <div id="button">'+'<a href="#" id="close"><img src="close.png" alt=""></a></div>'+
          '</div>';
var cuntentH=document.documentElement.clientHeight;
var cuntentW=document.documentElement.clientWidth;
loin.style.top=(cuntentH-loin.offsetHeight)/2+'px';
loin.style.left=(cuntentW-loin.offsetWidth)/2+'px';
var closebtn=document.getElementById('close');
    mask.onclick=closebtn.onclick=function(){
  document.body.removeChild(mask);
  document.body.removeChild(loin);
}
}


   // console.log(oScroll);
   // console.log(oScroll);
   // 


window.onload=function(){
var loinBtn=document.getElementById('index_nav_entry');
loinBtn.onclick=function(){
     newOpen();
    }
var oTop=document.getElementById('side_fix_gotop');
var time;
var oTrue=true;
window.onscroll=function(){
    if(!oTrue)
      clearInterval(time);
    oTrue=false;
    if(document.documentElement.scrollTop>=100||document.body.scrollTop>=100)
      oTop.style.display='block';
    else
      oTop.style.display='none';
}
oTop.onclick=function(){
   
    time = setInterval(function(){
      var oScroll=document.documentElement.scrollTop||document.body.scrollTop;
      var a=Math.floor(-oScroll/10);
      document.documentElement.scrollTop+=a;
      if(document.documentElement.scrollTop<=0)
      clearInterval(time);
       oTrue=true;
    },30);
   
}
}
