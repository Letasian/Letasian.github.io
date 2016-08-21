/*��ҳ js*/

/*ҳ�����ʱ���ز˵�*/
$("#header").find(".header-seachBox .seach-lit-menu").hide();

/*������  ��ȡ����ʱ �������¼�*/
$("#header").find(".txt").focus(function () {
    $("#header").find(".header-seachBox").attr("style", "border:solid 1px #ff6400");
    /*���������ʽ �ı�߿���ɫ*/
    $(".header-seachBox").find(".sub").attr("style", "border-left:solid 1px #ff6400");
    $("#header").find(".header-seachBox .quick-seach span").hide();
    /*���ؿ������ѡ��*/
    $("#header").find(".header-seachBox .seach-lit-menu").show();
    /*��ʾ�����˵�*/
})

/*������  ʧȥ����ʱ �������¼�*/
$("#header").find(".txt").blur(function () {
    $("#header").find(".header-seachBox").removeAttr("style");
    /*ɾ��������ʽ ��ԭ�߿���ɫ*/
    $(".header-seachBox").find(".sub").removeAttr("style");
    $("#header").find(".header-seachBox .quick-seach span").show();
    /*��ʾ�������ѡ��*/
    $("#header").find(".header-seachBox .seach-lit-menu").hide();
    /*���������˵�*/
})

/*���� �������� �б�*/
var timer = null;
var time = null;
for (var n = 0; n < $(".details li").length; n++) {
    $(".header_navBox li").eq(n).hover(function () {
        clearInterval(timer);
        $(".details").animate({height: "230px"}).find("li").eq($(this).index()).show().siblings().hide();
    }, function () {
        fnHide();
    });
}
$(".details").hover(function () {
    clearTimeout(timer);
}, function () {
    fnHide();
});
function fnHide() {
    timer = setTimeout(function () {
        $(".details").animate({height: "0px"}).find("li").hide();
    }, 100);
}

$("#banner .aside-txt .topic").hover(function () {
    $(this).find(".children-list").show()
}, function () {
    $(this).find(".children-list").hide();
})


/*banner start*/

var timee = null;
timee = setInterval(function () {
    $(".arrowBtn-right").trigger("click")
}, 1500);
$(".banner-wrap").hover(function () {
    clearInterval(timee);
    $(".arrowBtn-left,.arrowBtn-right").show();
}, function () {
    $(".arrowBtn-left,.arrowBtn-right").hide();
    timee = setInterval(function () {
        $(".arrowBtn-right").trigger("click")
    }, 1500);
})

var _index = 0;
$(".arrowBtn-right").click(function () {
    _index++;
    if (_index == $(".banner-wrap-pic li").size()) {
        _index = 0;
    }
    ;
    fnDo();
});

$(".arrowBtn-left").click(function () {
    _index--;
    if (_index < 0) {
        _index = $(".banner-wrap-pic li").size() - 1;
    }
    ;
    fnDo();
});
function fnDo() {
    $(".banner-wrap-pic li").css("left", "0px").eq(_index).fadeIn().siblings().fadeOut();
    $(".bBtn").find("li").eq(_index).addClass("active").siblings().removeClass("active");
}

$(".bBtn").find("li").click(function () {
    if (_index != $(this).index()) {
        var oneWidth = $(".banner-wrap-pic li").width();
        var m = _index - $(this).index() > 0 || -1;
        $(".banner-wrap-pic li").eq(_index).animate({left: m * oneWidth}, function () {
            $(this).hide();
        }).end().eq($(this).index()).show().css("left", -m * oneWidth).animate({left: 0});
        _index = $(this).index();
        $(".bBtn").find("li").eq(_index).addClass("active").siblings().removeClass("active");
    }
    ;
});

/*���ǲ�Ʒ start*/
$("#Star_products .productsTitleBox .productsChangePage").find("a").click(function () {
    if ($(this).not(".disClick")) {
        $("#Star_products .productsMain").find("ul").animate({left: -1240 * $(this).index() + "px"});
        $(this).addClass("disClick").siblings().removeClass("disClick");
    }
})
$("#Star_products .productsTitleBox .productsChangePage").find("a").hover(function () {
    if ($(this).not(".disClick")) {
        $(this).addClass("colorMore");
    }
}, function () {
    $(this).removeClass("colorMore");
})

/*���ǲ�Ʒ end*/
/*banner end*/

/*����Ӳ�� start*/

$("#main .Product_display .smallImgList ul").find("li:last").css("margin-right", "0");

/*����Ӳ�� end*/

/*���� start*/
$("#main .Matching .main-navBox a:first").find(".downLine").show();
$("#main .Matching .main-navBox a:first").css("color", "#FF6500");

function changeHight(_obj) {
    _obj.hover(function () {
        $(this).find(".Comment_information_lj").css("height", "85px");
    }, function () {
        $(this).find(".Comment_information_lj").css("height", "0");
    });
};
function fnTab(obj, oarr) {
    obj.mouseover(function () {
        $(this).find(".downLine").show();
        $(this).css("color", "#FF6500").siblings().css("color", "#000");
        $(this).siblings().find(".downLine").hide();
        oarr.eq($(this).index()).show().siblings(".smallImgList").hide();
    });
};

var _obj1 = $("#main .Matching_list_box .smallImgList li");
var obj1 = $("#main .Matching .main-navBox a");
var oarr1 = $("#main .Matching_list_box .smallImgList");
fnTab(obj1, oarr1);
changeHight(_obj1);
/*���� end*/

/*���� start*/
$("#main .parts .main-navBox1 a:first").find(".downLine").show();
$("#main .parts .main-navBox1 a:first").css("color", "#FF6500");

var obj2 = $("#main .parts .main-navBox1 a");
var oarr2 = $("#main .parts_list_box .smallImgList1");
fnTab(obj2, oarr2);
/*���� end*/

/*�ܱ� start*/
$("#main .surrounding .main-navBox2 a:first").find(".downLine").show();
$("#main .surrounding .main-navBox2 a:first").css("color", "#FF6500");

var obj3 = $("#main .surrounding .main-navBox2 a");
var oarr3 = $("#main .surrounding_list_box .smallImgList2");
fnTab(obj3, oarr3);

/*�ܱ� end*/

/*Ϊ���Ƽ� start*/
var clicks = 0;
$("#main .Recommend .main-navBox4 a").eq(0).click(function () {
    clicks++;
    if (clicks <= 2) {
        $("#main .RecommendList").find("ul").css("left", -1240 * clicks + "px");
        $(this).siblings().removeClass("disClick");
    } else {
        clicks = 2;
        $(this).addClass("disClick").siblings().removeClass("disClick");
        return;
    }
})

$("#main .Recommend .main-navBox4 a").eq(1).click(function () {
    clicks--;
    if (clicks >= 0) {
        $("#main .RecommendList").find("ul").css("left", -1240 * clicks + "px");
        $(this).siblings().removeClass("disClick");
    } else {
        clicks = 0;
        $(this).addClass("disClick").siblings().removeClass("disClick");
        return;
    }
})
/*Ϊ���Ƽ� end*/

/* ���� start */
$("#main .Content .ContentBox .Cont_ul").find(".first_li").each(function (i, elem) {
    (function (obj) {
        var Switchings = 0;
        obj.find(".Switch_btn_rig").click(function () {
            obj.find(".Switch_btn_lef").css("cursor", "pointer")
            if (Switchings < 3) {
                Switchings++;
                funTab();
            } else {
                Switchings = 3;
                $(this).css("cursor", "default")
                return;
            }
        })
        obj.find(".Switch_btn_lef").click(function () {
            obj.find(".Switch_btn_rig").css("cursor", "pointer")
            if (Switchings > 0) {
                Switchings--;
                funTab();
            } else {
                Switchings = 0;
                $(this).css("cursor", "default")
                return;
            }
        })
        function funTab() {
            obj.find(".Play_ContBox").css("left", -296 * Switchings + "px");
            obj.find(".Play_btnBox li div").removeClass("Play_Btn").eq(Switchings).addClass("Play_Btn");
        }

        obj.find(".Play_btnBox li").click(function () {
            Switchings = $(this).index();
            obj.find(".Switch_btn_lef").css("cursor", "pointer")
            obj.find(".Switch_btn_rig").css("cursor", "pointer")
            obj.find(".Play_btnBox li div").removeClass("Play_Btn");
            $(this).find("div").addClass("Play_Btn");
            obj.find(".Play_ContBox").css("left", -296 * Switchings + "px");
        });
        obj.hover(function () {
            $(this).find(".Switch_btn_lef").show();
            $(this).find(".Switch_btn_rig").show();
        }, function () {
            $(this).find(".Switch_btn_lef").hide();
            $(this).find(".Switch_btn_rig").hide();
        })
    })($(elem));
});

/* ���� end */

/* ��Ƶ start */
$("#main .VideoBox .VideoList ul").find("li:last").css("margin-right", "0")
/* ��Ƶ end */