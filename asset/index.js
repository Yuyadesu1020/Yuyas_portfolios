// スクロールすると、pagetopボタンのフェードイン、フェードアウト
document.addEventListener("DOMContentLoaded", function(){
    // 変数名scrollButtonにclass名(.scroll)を一致させる↓
    var scrollButton = document.querySelector('.scroll');

    //スクロールイベントを投入
    window.addEventListener('scroll', function () {
        if (window.scrollY > 700) {
            //スクロール量が指定より以上場合、visibleクラスを追加
            scrollButton.classList.add('visible');
        } else {
            //スクロール量が指定より以下だった場合、visibleクラスを削除
            scrollButton.classList.remove('visible');
        }
    });
});


//HTML文書が読み込まれたときにこの機能が発動する
document.addEventListener("DOMContentLoaded", function () {
    //変数名にid名topを取得し、格納する
    var pagetopButton = document.getElementById("top");

    pagetopButton.addEventListener("click", function (event) {
        //元々の機能を停止する
        event.preventDefault();

        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


//スライドショー
document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "img/hero_image.jpg",
        "img/hero_image2.jpg",
        "img/hero_image3.jpg"
        // 追加の画像パスを必要に応じて追加
    ];
    var currentImageIndex = 0;
    var imageElement = document.querySelector('.hero-image');
    
    function changeImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.style.opacity = 0;
        setTimeout(function() {
            imageElement.src = images[currentImageIndex];
            imageElement.style.opacity = 1;
        }, 1000); // フェードアウト後1秒後に画像を切り替えてフェードイン
    }

    // 初回実行
    changeImage();

    // 3秒ごとに画像を切り替える（任意の間隔で実行）
    setInterval(changeImage, 4000);
});

window.addEventListener('scroll', function() {
    var fixedHeader = document.getElementById('fixed-header');
    var scrollPosition = window.scrollY || window.pageYOffset;
    var triggerHeight = 400; // トリガーとなるスクロールの高さ（例として200px）

    if (scrollPosition > triggerHeight) {
        fixedHeader.classList.add('active');
    } else {
        fixedHeader.classList.remove('active');
    }
});

