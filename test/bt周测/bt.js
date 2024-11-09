//导航栏
//监听滚动条
document.addEventListener('scroll', function () {
    if (document.documentElement.scrollTop !== 0) {
        $('header').css({
            'height': '70px',
            'lineHeight': '70px',
            'backgroundColor': 'white',
            'color': 'black',
        })
        $('header div.container div.row').css({
            'height': '70px'
        })
        $(".logo .dark").css({
            "opacity": "1",
            "top": '5px'
        })
        $(".logo .light").css({
            "opacity": "0",
            "top": '5px'
        })
        // $(".logo .light").attr("src", './imgs/logo-light.png')

        $("header div.container div.row div.col ul.row li.nav-item a ").css('color', 'black')
    } else {
        $('header').css({
            'height': '80px',
            'lineHeight': '80px',
            'backgroundColor': '',
            'color': 'white',
        })
        $(".logo .dark").css({
            "opacity": "0",
            "top": '10px'
        })
        $(".logo .light").css({
            "opacity": "1",
            "top": '10px'
        })
        $('header div.container div.row').css({
            'height': '80px'
        })
        $("header div.container div.row div.col ul.row li.nav-item a ").css('color', 'white')

    }
})
// 导航栏 下拉菜单
$('header div.container div.row div.col ul.row  li').on('mouseover', function () {
    $(this).find(" ul.sub_menu ").css("display", "block")


})
$('header div.container div.row div.col ul.row  li').on('mouseout', function () {
    $("header div.container div.row div.col ul.row ul.sub_menu ").css("display", "none")
})


$(document).ready(function () {
    $(window).resize();
});
//轮播覆盖层




