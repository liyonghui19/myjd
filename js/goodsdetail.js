$(function(){
    $('.mod_fix').on('click','.item',function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        let index = $(this).index();
        let a = document.body.clientWidth;
        console.log(a);
        let b = -index*a;
        let heights= $(".detail_item").eq(index).height();
        $(this).parent().parent().next().children('.detail_list').css({
            "transform":`translate3d(${b}px, 0px, 0px)`,
            "transition":"all .5s",
            "height":heights
        })
       
    })
})