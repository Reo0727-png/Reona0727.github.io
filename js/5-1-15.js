$(".openbtn1").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    // 追加：リンクをクリックしたら閉じる
    $("#g-nav a").click(function () {
        $(".openbtn1").removeClass('active');
        $("#g-nav").removeClass('panelactive');
    });
});

$('.works-item').on('click', function() {
    const imgSrc = $(this).attr('data-img');
    $('#modal-img').attr('src', imgSrc);

    // ★修正ポイント：addClass('flex') をせず、単に表示させるだけにする
    // 親に flex がいらなくなったので、これでボタンが自由になります
    $('#works-modal').removeClass('hidden').hide().fadeIn(300);

    $('body').css('overflow', 'hidden');
});

// 閉じる処理
$('#modal-close, #works-modal').on('click', function(e) {
    if (e.target !== this && e.target.id !== 'modal-close') return;
    
    $('#works-modal').fadeOut(300, function() {
        $(this).addClass('hidden');
    });
    $('body').css('overflow', 'auto');
});