
// 顶部轮播图
var swiper = new Swiper('.swiper_one', {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination_one',
      clickable: true,
    },
  });
  $(function(){
    changeNews();
    setInterval(countTime,1000);
  })
  // 京东快报新闻轮播
 function changeNews(){
   $('.news_list').delay(700).animate({top:"-1.2rem"},300,function(){
      $(this).delay(700).animate({top:"-2.4rem"},300,function(){
        $(this).delay(700).animate({top:"-3.6rem"},300,function(){
          $(this).delay(700).animate({top:"-4.8rem"},300,function(){
            $(this).css("top",0);
            changeNews();
          })
        })
      })
   })
 }

//  封装my$函数
 function my$(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}
//  倒计时
function countTime() {  
  //获取当前时间  
  var date = new Date();  
  var now = date.getTime();  
  //设置截止时间  
  var str="2019/5/25 00:00:00";
  var endDate = new Date(str); 
  var end = endDate.getTime();  
  
  //时间差  
  var leftTime = end-now; 
  //定义变量 d,h,m,s保存倒计时的时间  
  var h,m,s;  
  if (leftTime>=0) {  
      // d = Math.floor(leftTime/1000/60/60/24);  
      h = Math.floor(leftTime/1000/60/60%24);  
      m = Math.floor(leftTime/1000/60%60);  
      s = Math.floor(leftTime/1000%60);                     
  }  
  console.log(h);
  //将倒计时赋值到div中 

  // document.getElementById("_d").innerHTML = d+"天";  
  my$("#time_hour").innerHTML = h<10? "0"+h:h;  
  my$("#time_minute").innerHTML = m<10? "0"+m:m;  
  my$("#time_second").innerHTML = s<10? "0"+s:s;  
  //递归每秒调用countTime方法，显示动态时间效果 setTimeout(countTime,1000);
} 
// 回到顶部
var timer = null;
my$("#jump_top").onclick = function(){
	cancelAnimationFrame(timer);
	timer = requestAnimationFrame(function fn(){
		var oTop = document.body.scrollTop || document.documentElement.scrollTop;
		if(oTop > 0){
			scrollBy(0,-70);
			timer = requestAnimationFrame(fn);
		}else{
			cancelAnimationFrame(timer);
		} 
	});
}

$(function(){
	$(window).on('scroll',function(){
		topNavScroll();
	});

})
     function topNavScroll(){
            //获取当前窗口滚动条顶部所在的像素值 并取整
            var topScroll = Math.floor($(window).scrollTop());
            //设置滚动多少像素后透明度变为1
            var scrollDist = 800;
            //定义滚动条在向下滚动180像素后 变成完全不透明
           if(topScroll>0){
                $('.header_con').css('background-color','#e43130');
            }else{
              $('.header_con').css('background-color','transparent');
            }
            if(topScroll>scrollDist){
              $('.back_top').css('display','block');
            }else{
              $('.back_top').css('display','none');
            }
    }