
var res = {
    //main menu
    background: "res/background.png",
    icon: "res/favicon.ico",
    loadingbg:"res/loading_bg.png",
    logo:"res/logo.png",
    list_bg:"res/list_bg.png",
    task_icon:"res/task_icon.png",
    shop:"res/shop.png",
    score_bg:"res/score_bg.png",

    // progress bar
    progressbar_bg:"res/progressbar_bg.png",
    progressbar_front:"res/progressbar_front.png",

    // buttons
    btn_start:"res/start.png",
    btn_blue:"res/button_blank_blue_01.png",
    btn_gray:"res/button_blank_gray_01.png",
    btn_battle:"res/btn_battle.png",
    btn_config:"res/btn_config.png",
    btn_go:"res/btn_go.png",
    btn_return:"res/btn_return.png",
    btn_plus:"res/plus.png",

    aaa_plist:"res/aaa.plist",
    aaa_png:"res/aaa.png",
    //

    //music list
    battle_begin_01:"res/music/battle_begin_01.mp3"
}

var g_resources = [];

for(var i in res){
    g_resources.push(res[i]);
}