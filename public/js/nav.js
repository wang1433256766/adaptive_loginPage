$(function() {
    //监听浏览器窗口大小的变化事件
    $(window).resize(function() {
        if ($(window).width() > 769) {
            $(".list-ul").css('display', 'block');
            $(".user-ul").css('display', 'none');
        } else {
            $(".list-ul").css('display', 'none');
        }
    })

    //屏幕宽度小于769px时，点击菜单按钮切换菜单的显示/隐藏
    $("#nav-list").click(function() {
        //$(window).width() 表示窗口可视化区域宽度
        if ($(window).width() < 769) {
            $(".list-ul").toggle();
            $(".user-ul").css('display', 'none');
        }
    })

    //屏幕宽度小于769px时，点击用户按钮切换用户菜单的显示/隐藏
    $("#user-list").click(function() {
        //$(window).width() 表示窗口可视化区域宽度
        if ($(window).width() < 769) {
            $(".user-ul").toggle();
            $(".list-ul").css('display', 'none');
        }
    })


})