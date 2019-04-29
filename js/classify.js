

// 左边导航栏点击效果
$(function(){
    $(".uls").on('click','li',function(){
        $(this).addClass('cur');
        $(this).siblings().removeClass('cur');
        var a = $(this).index();
        let b = a*46;
       $(this).parent('.uls').animate({scrollTop:b},160);
       $('.branchList').eq(a).slideDown(1000).siblings().hide();
    })
})