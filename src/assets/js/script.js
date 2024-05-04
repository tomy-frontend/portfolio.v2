// // drawerの開閉とmenuボタンの文字の変化
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".js-menu-button");
  const drawer = document.querySelector(".js-drawer");

  // メニューボタンのクリックイベント
  menuButton.addEventListener("click", function (e) {
    e.preventDefault();
    toggleDrawer();
  });

  // ドロワーコンテンツ内のリンクをクリックしたときの処理
  const drawerLinks = document.querySelectorAll(
    '.js-drawer a[href^="#"], a[href^="#"]'
  );
  drawerLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeDrawer();
    });
  });

  // ドロワー以外の場所をクリックしたときの処理
  document.addEventListener("click", function (e) {
    if (
      !drawer.contains(e.target) &&
      !menuButton.contains(e.target) &&
      drawer.classList.contains("is-open")
    ) {
      closeDrawer();
    }
  });

  // ドロワーの開閉とテキストの変更を管理する関数
  function toggleDrawer() {
    document.body.classList.toggle("u-is-fixed");
    drawer.classList.toggle("is-open");
    menuButton.classList.toggle("is-open");
    menuButton.textContent = menuButton.classList.contains("is-open")
      ? "close"
      : "menu";
    menuButton.style.transition = "ease 0.5s";
  }

  // ドロワーを閉じる関数
  function closeDrawer() {
    document.body.classList.remove("u-is-fixed");
    drawer.classList.remove("is-open");
    menuButton.classList.remove("is-open");
    menuButton.textContent = "menu";
    menuButton.style.transition = "ease 0.5s";
  }
  // メディアクエリのブレークポイントを設定します。この値以下の画面幅をモバイルデバイスと見なします。
  const breakPoint = 768;

  // メディアクエリの状態が変わった時に実行される関数です。ブラウザの幅がbreakPoint以上になった場合にメガメニューをリセットします。
  const matchMedia = window.matchMedia(`(min-width: ${breakPoint}px)`);
  function handleMediaChange(e) {
    if (e.matches) {
      closeDrawer();
    }
  }

  // メディアクエリの監視を開始します。ブラウザの幅が変わるとhandleMediaChange関数が呼ばれます。
  matchMedia.addListener(handleMediaChange);

  // スクリプト読み込み時に一度、メディアクエリに基づいてmatchMediaを実行します。
  handleMediaChange(matchMedia);
});

// カーソル用のdivタグを取得してcursorに格納
var cursor = document.getElementById("cursor");

// カーソル用のdivタグをマウスに追従させる
document.addEventListener("mousemove", function (e) {
  cursor.style.transform =
    "translate(" + e.clientX + "px, " + e.clientY + "px)";
});

// リンクにホバーした時にクラス追加、離れたらクラス削除
var link = document.querySelectorAll("a, button");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("mouseover", function (e) {
    cursor.classList.add("cursor--hover");
  });
  link[i].addEventListener("mouseout", function (e) {
    cursor.classList.remove("cursor--hover");
  });
}

// p-worksの水平スクロール
const wrapper = document.querySelector(".js-wrapper");
const slides = gsap.utils.toArray(".js-scroll");

// コンテナの幅を取得
const wrapperWidth = wrapper.offsetWidth;

// 横スクロールアニメーションの設定
gsap.to(slides, {
  xPercent: -100 * (slides.length - 1), // -X軸方向に移動
  ease: "none", // アニメーションのイージング(noneは定速)
  scrollTrigger: {
    trigger: wrapper, // アニメーション開始のトリガー要素
    pin: true, // 要素を固定
    scrub: 1, // スクロール量に合わせてアニメーション
    start: "top top", // アニメーションが始まる位置
    end: `+=${wrapperWidth}`, // アニメーションが終わる位置
    anticipatePin: 1, // ピン留めアニメーションをスムーズに開始
    invalidateOnRefresh: true, // ページの再読み込み時(リサイズ時)に値を再計算する
  },
});

// ヘッダー高さの可変を考慮したスムーススクロール
jQuery('a[href^="#"]').on("click", function (e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" === id ? "html" : id);
  const position =
    jQuery(target).offset().top + (window.innerWidth < 768 ? -86 : -86);

  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
  );
});

////////////////////////////////

////////////////////////////////
