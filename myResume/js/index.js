/*解析URL方法,将这个方法加在String.prototype*/
// ~function (pro) {
//     function queryURL() {
//         //this->字符串String的实例,就是所有的字符串
//         //?a=1&b=2 ->{a:1,b:2}
//         //=两端只要不是?,&,=,#其他的内容都可以
//         var reg = /([^?&=#]+)=([^?&=#]+)/g;
//         var obj = {};
//         this.replace(reg, function () {
//             obj[arguments[1]] = arguments[2];
//         });
//         return obj;
//     }

//     pro.queryUrl = queryURL;
// }(String.prototype);

let loadingRender=function () {
    let $loadingBox=$('.loadingBox'),
        $progressU=$loadingBox.find('.progressU');
    let imgs=["img/zf_course.png","img/zf_course1.png","img/zf_course2.png","img/zf_course3.png","img/zf_course4.png","img/zf_course5.png","img/zf_course6.png","img/zf_cube1.png","img/zf_cube2.png","img/zf_cube3.png","img/zf_cube4.png","img/zf_cube5.png","img/zf_cube6.png","img/zf_cubeBg.jpg","img/zf_cubeTip.png","img/zf_messageArrow1.png","img/zf_messageArrow2.png","img/zf_messageChat.png","img/zf_messageKeyboard.png","img/zf_messageLogo.png","img/zf_messageStudent.png","img/zf_outline.png","img/zf_phoneBg.jpg","img/zf_phoneDetail.png","img/zf_phoneListen.png","img/zf_phoneLogo.png","img/zf_return.png","img/zf_teacher4.png"];
    let total=imgs.length,
        cur=null;
    let loadingImg=()=>{
        imgs.forEach((item)=>{
            let tempImg=new  Image;
            tempImg.src=item;
            tempImg.onload=()=>{
                tempImg=null;
                cur++;
                run();
            }
        })

     let run=()=>{
          $progressU.css('width',cur/total*100+'%');
          if(cur==total){
              let playTime=setTimeout(()=>{
                  clearTimeout(playTime);
                  playTime=null;
                  $loadingBox.remove();
                  phoneRender.init();
              },1000);

          }
     }

    }
    return {
        init:function () {
            $loadingBox.css('display','block');
            loadingImg();
        }
    }
}();
     // loadingRender.init();
let phoneRender=function () {
     let $phoneBox=$('.phoneBox'),
         $time=$phoneBox.find('.time'),
         $listen=$phoneBox.find('.listen'),
         $touch=$listen.find('.touch'),
         $detail=$phoneBox.find('.detail'),
         $pause=$detail.find('.pause'),
         dream=$('#dream')[0],
         younth=$('#younth')[0];
    let timeT1=null;

     let $phonePlan=$.Callbacks();

          $phonePlan.add(()=>{
              $listen.css('display','none');
              $detail.css('transform','translateY(0)')
          });
          $phonePlan.add(()=>{
              dream.pause();
              younth.play();
              $time.css('display','block');
              playTime();
          });
          $phonePlan.add(()=>{
             $pause.tap(playEnd);
    });
          let playTime=()=>{
              let play=function(){
                  let duration=Math.floor(younth.duration);
                  let currentTime=younth.currentTime,
                      minus=Math.floor(currentTime/60),
                      seconds=Math.floor(currentTime-minus*60);
                      minus<10?minus='0'+minus:null;
                      seconds<10?seconds='0'+seconds:null;
                  $time.html(`${minus}:${seconds}`);
                  if(currentTime>=duration){
                      clearInterval(timeT1);
                      timeT1=null;
                      playEnd();
                  }
              };
              timeT1=setInterval(play,1000);
          };
          let playEnd=()=>{
              clearInterval(timeT1);
              timeT1=null;
              younth.pause();
              $phoneBox.remove();
              messageRender.init();
          };

    return  {
        init:function () {
           $phoneBox.css('display','block');
           $touch.tap($phonePlan.fire);
            dream.play();
        }
    };
}();
    // phoneRender.init();
let messageRender=function () {
    let $messageBox=$('.messageBox'),
        $talk=$messageBox.find('.talk'),
        $aryLi=$talk.find('li'),
        $keybord=$messageBox.find('.keybord'),
        $contain=$keybord.find('.contain'),
        music=$('#music')[0],
        $send=$keybord.find('.send');

    let $messagePlan=$.Callbacks();
    let n=-1,
        translateY=0,
        autoTime=null;
    $messagePlan.add(()=>{

        let shouList=()=>{
            n++;
            console.log(autoTime);
            $aryLi.eq(n).css({
                'opacity':1,
                'transform':'translateY(0)'
            })
            if(n===2){
                clearInterval(autoTime);
                autoTime=null;
                $aryLi.eq(2).one('transitionend',()=>{
                    $keybord.css('transform','translateY(0)');
                    keyplay();

                })
                return;
            }
            if(n>=4){
                if(n===$aryLi.length-1)
                {
                    translateY+=(($aryLi.eq(n))[0].offsetHeight+80)/100;
                }else {
                    translateY+=(($aryLi.eq(n+1))[0].offsetHeight+80)/100;
                }
                $talk.css('transform',`translateY(-${translateY}rem)`);
            }
            if(n>=$aryLi.length-1){
                clearInterval(autoTime);
                autoTime=null;
                let tempT=null;
                    tempT=setTimeout(()=>{
                    music.pause();
                    $messageBox.remove();
                    cubeRender.init();
                    clearTimeout(tempT);
                    tempT=null;
                    clearInterval(autoTime);
                    autoTime=null;
                },1000);
            }
        }
        autoTime=setInterval(shouList,1000);
    });

    let keyplay=()=>{
        let step=-1;
        let tempkey=$contain.html();
        $contain.html('');
        $contain.css('display','block');
        let autoplay=()=>{
            step++;
            $contain[0].innerHTML+=tempkey[step];
            if(step>=tempkey.length-1){
                clearInterval(playT);
                playT=null;
                $send.css('display','block');
                $send.tap(sendFn);
                return;
            }
        };
        let playT=null;
            playT=setInterval(autoplay,300);
    };
    let sendFn=()=>{
        $contain.css('display','none');
        $keybord.css('transform','translateY(3.7rem)');
        $messagePlan.fire();
    };

    return {
        init:function () {
            $messageBox.css('display','block');
            $messagePlan.fire();
            music.play();
        }
    };
}();
    // messageRender.init();
let cubeRender=function () {
   let $cubeBox=$('.cubeBox'),
       $cubeList=$cubeBox.find('.cubeList'),
       $li=$cubeBox.find('li');
    let touchStart=function(e){
           let touchX=e.changedTouches[0].clientX,
               touchY=e.changedTouches[0].clientY;
           $cubeList.attr({
               touchX:touchX,
               touchY:touchY,
               isMove:false,
               changeX:0,
               changeY:0
           })
       }
    let touchMove=function(e){
        let touchingX=e.changedTouches[0].clientX,
            touchingY=e.changedTouches[0].clientY,
            $this=$(this),
            changeX=touchingX-parseFloat($this.attr('touchX')),
            changeY=touchingY-parseFloat($this.attr('touchY'));
            if(Math.abs(changeX)>10|Math.abs(changeY)>10){
                $this.attr({
                    isMove:true,
                    changeX:changeX,
                    changeY:changeY
                })
            }

    }
    let touchEnd=function (e) {
        let $this=$(this),
            isMove=$this.attr('isMove');
        if(isMove=='false') return;
        let changeX=parseFloat($this.attr('changeX')),
            changeY=parseFloat($this.attr('changeY')),
            rotateX=parseFloat($this.attr('rotateX')),
            rotateY=parseFloat($this.attr('rotateY'));

        let x=rotateX-changeY/3,
            y=rotateY+changeX/3;
        $this.css('transform',
            `scale(.6) rotateX(${x}deg) rotateY(${y}deg)`).attr({
            isMove:false,
            rotateX:x,
            rotateY:y
        })
    }

    let touchLind=function(){
        let index=$(this).index();
        $cubeBox.css('display','none');
        detailRender.init(index);
    }

    return {
        init:function () {
            $cubeBox.css('display','block');
            $cubeList.css('transform',
              'scale(.6) rotateX(30deg) rotateY(45deg) ').attr({
                rotateX:30,
                rotateY:45
            }).on({
                touchstart:touchStart,
                touchmove:touchMove,
                touchend:touchEnd
            })
            $li.tap(touchLind);
        }
    }
}();
     cubeRender.init();
let detailRender=function () {
   let $detailBox=$('.detailBox'),
       $classList=$detailBox.find('.classList'),
       travemusic=$('#travemusic')[0],
       $musicplay=$('#musicplay'),
       $returnLink=$('#returnLink'),
       $cubeBox=$('.cubeBox'),
       swiperExample=null;
let change=function (example) {
    let{slides:arySlides,activeIndex}=example;
    if(activeIndex===0){
     $classList.makisu({
         selector:'dd',
         overlap:0.2,
         speed:0.6
     })
        $classList.makisu('open');
    }else {
        $classList.makisu({
            selector:'dd',
            overlap:0,
            speed:0
        })
        $classList.makisu('close');
    }
    [].forEach.call(arySlides,(item,index)=>{
        if(index==activeIndex){
            item.id='page'+(index+1);
            return;
        }
        item.id=null;
    })
}
let back=()=>{
    let ary= swiperExample.slides;
    $detailBox.css('display','none');
    $cubeBox.css('display','block');
    [].forEach.call(ary,(item)=>{
        item.id=null;
    })

}
let music=()=>{
    travemusic.play();
    travemusic.oncanplay=()=>{
     $musicplay.css('display','block').addClass('run');
    };
    $musicplay.tap(()=>{
        if(travemusic.paused){
            travemusic.play();
            $musicplay.addClass('run');
            return;
        }
        travemusic.pause();
        $musicplay.removeClass('run');
    })

}
    return {
        init:function (index=0) {
         $detailBox.css('display','block');
            music();
                swiperExample=new Swiper('.swiper-container',{
                    effect:'coverflow',
                    onInit:change,
                    onTransitionEnd:change
                });
                $returnLink.tap(back);
            // swiperExample.slides[index].id='page'+(index+1);
            index=index>5?5:index;
            swiperExample.slideTo(index,0);

        }
    }
}();
// detailRender.init();

// var page = window.location.href.queryUrl().page;
// page == 0 || isNaN(page) ? loadingRender.init() : null;
// page == 1 ? phoneRender.init() : null;
// page == 2 ? messageRender.init() : null;
// page == 3 ? cubeRender.init() : null;
// page == 4 ? detailRender.init() : null;