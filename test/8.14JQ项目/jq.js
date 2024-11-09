//封装active函数
function becameRed(cssStr, first, tf) {
    cssStr.mousemove(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        cssStr.eq(first).addClass('active')


    })
    if (!tf) {
        cssStr.mouseout(function () {
            $(this).removeClass('active');

        })
        cssStr.eq(first).addClass('active')
    }



}





//欢迎
becameRed($("div.huanying div.w div.fright ul.clearfix a.fleft"))


//  网站首页导航栏 

becameRed($('div.nav div.w ul li '), 0)



// 轮播 
var i = 0
var timer = setInterval(function () {
    $('div.banner div.jiantou ul li').eq(0).click()
}, 2000)

$('div.banner div.jiantou ul li').eq(0).click(function () {

    i++
    if (i > 1) {
        i = 0
    }
    $('div.banner div.bannerW div.img ul').css('marginLeft',
        -i * 1200 + 'px'
    )
    $('div.banner div.xiaoyuandian ul li').eq(i).addClass('active')
    $('div.banner div.xiaoyuandian ul li').eq(i).siblings().removeClass('active')
}
)
$('div.banner div.jiantou ul li').eq(1).click(function () {

    i--
    if (i < 0) {
        i = 1
    }
    $('div.banner div.bannerW div.img ul').css('marginLeft',
        -i * 1200 + 'px'
    )
}
)
// 圆点点击
$('div.banner div.xiaoyuandian ul li').click(function () {
    i = $(this).index()
    $('div.banner div.bannerW div.img ul').css('marginLeft',
        -i * 1200 + 'px'
    )
    $('div.banner div.xiaoyuandian ul li').eq(i).addClass('active')
    $('div.banner div.xiaoyuandian ul li').eq(i).siblings().removeClass('active')
})



$('.banner').on('mouseover', (function () {
    console.log(555);

    clearInterval(timer)
}))

$('.banner').on('mouseout', function () {
    console.log("out");
    timer = setInterval(function () {
        $('div.banner div.jiantou ul li').eq(0).click()
    }, 2000)

})
//搜索
becameRed($('div.w div.sousuo ul.fleft p a'))

//产品中心
becameRed($('div.cpzx div.w.clearfix div.fleft div.center ul li'))
$('div.cpzx div.w.clearfix div.fright div.head div.fleft ul li').on('mouseover', function () {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    var index = $(this).index()
    console.log(index);
    $('div.cpzx div.w.clearfix div.fright div.card ul').eq(index).css('display', 'block').siblings().css('display', 'none')
})
//专业重庆灭火器设计、制造及管理经验
