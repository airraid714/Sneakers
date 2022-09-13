jQuery( function($){

    //ハンバーガーボタンを押したらアコーディオンメニューが出てくるjs
    $(".js-hamburger").on("click",function(){

        $(".c-button--hamburger").toggleClass("is-active");
        $(".c-layer").toggleClass("is-open");
        $(".l-sidebar").toggleClass("is-open");
    });
    
});