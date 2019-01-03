//购买
$(function () {
    $(".list_r_list_button").click(function () {
        var href = $(this).find("a").attr("href");
        var v_flag = false;
        var info = $(this).next(".mycartinfo");
        info.html("");
        $.ajax({
            type: "GET",
            url: href,
            dataType: 'json',
            success:function (data) {
                if (data.result) {
                    info.html("<a href='./car.do?method=4'>购买成功，点此查看购物车</a>");
                } else if (data.result === false) {
                    info.html("<a href='./user/login.do?method=0'>你未登录，点此到登录页面</a>")
                } else {
                    info.html("购买失败");
                }
            }
        });
        return false;
    });
});

