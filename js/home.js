$(document).ready(function () {
    $('#js-slider-2').slick({
        arrows: true, // 前・次のボタンを表示する
        speed: 1000, // スライドさせるスピード（ミリ秒）
        slidesToShow: 2, // 表示させるスライド数
        variableWidth: true, // スライド幅の自動計算を無効化
    });
});
