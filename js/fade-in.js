jQuery( function($){

    $(window).scroll( function(){       
        const windowHeight = $(window).height();    //ブラウザの高さをwindowHeightに代入
        const scroll = $(window).scrollTop();       //ウィンドウの一番上の位置をscrollに代入
        $('.p-card__img').each(function () {          //すべての.p-sectionセレクタに対して繰り返し処理
            const targetPosition = $(this).offset().top;    //フェードインさせたい要素の上からの位置を取得
            if (scroll > targetPosition - windowHeight + 100) {     //画面の下の方でフェードインさせるように位置の調整
                $(this).addClass("is-fade-in");                  //is-fade-inのクラスを付与する
                console.log("テスト");

            }
        });
    });            

});