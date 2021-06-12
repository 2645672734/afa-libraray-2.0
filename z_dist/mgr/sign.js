function makeid(e) {
    for (var t = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", o = 0; o < e; o++) t += n.charAt(Math.floor(Math.random() * n.length));
    return t
}

function cc() {
    var e = document.getElementById("textCanvas"),
        t = e.getContext("2d");
    t.clearRect(0, 0, e.width, e.height), t.font = "1.6em Verdana", cap = makeid(4), confuse = makeid(11) + cap[2] + makeid(4) + cap[1] + makeid(7) + cap[3] + makeid(7) + cap[0] + makeid(7), t.strokeText(cap, 0, 20)
}

function sign_up() {
    cc();
    var t = document.querySelectorAll(".input_form_sign");
    document.querySelectorAll(".ul_tabs > li")[0].className = "", document.querySelectorAll(".ul_tabs > li")[1].className = "active", $("#textCanvas").show(), setTimeout(function() {
        for (var e = 0; e < t.length; e++) 0 != e && (document.querySelectorAll(".input_form_sign")[e].className = "input_form_sign d_block active_inp")
    }, 100), document.querySelector(".link_forgot_pass").style.opacity = "0", document.querySelector(".link_forgot_pass").style.top = "-5px", document.querySelector(".btn_sign").innerHTML = "注册", setTimeout(function() {}, 300), setTimeout(function() {
        document.querySelector(".link_forgot_pass").className = "link_forgot_pass d_none", document.querySelector(".terms_and_cons").className = "terms_and_cons d_block d_none"
    }, 350)
}

function sign_in() {
    var e = document.querySelectorAll(".input_form_sign");
    document.querySelectorAll(".ul_tabs > li")[0].className = "active", document.querySelectorAll(".ul_tabs > li")[1].className = "", $("#textCanvas").hide();
    for (var t = 0; t < e.length; t++) switch (t) {
        case 1:
        case 2:
            console.log(e[t].name);
            break;
        default:
            document.querySelectorAll(".input_form_sign")[t].className = "input_form_sign d_none"
    }
    document.querySelector(".btn_sign").innerHTML = "登录"
}

function submit1(e) {
    return "登录" === document.querySelector(".btn_sign").innerHTML ? postLoginRequest() : postRegisterRequest(), !1
}

function preEnterHomepage(e, t, n) {
    sessionStorage.clear(), sessionStorage.username = n
}

function postLoginRequest() {
    console.log("login");
    var o = $("#username").val(),
        e = $("#password").val();
    0 !== o.length ? 0 !== e.length ? $.ajax({
        url: "/api/mgr/signin",
        type: "POST",
        data: "username=" + o + "&password=" + e,
        success: function(e, t, n) {
            console.log('return values is ---> ', e )
            0 === e.ret ? (preEnterHomepage(e, n, o)) : (alert("登录失败 : " + e.msg), $("#password").val(""))
        },
        error: function(e, t, n) {
            alert("错误: " + e.status + n)
        }
    }) : alert("请输入密码") : alert("请输入用户名")
}