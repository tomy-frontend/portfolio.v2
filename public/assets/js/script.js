document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".js-menu-button");
  const drawer = document.querySelector(".js-drawer");
  const mask = document.querySelector(".js-drawer-mask");

  menuButton.addEventListener("click", function (e) {
    e.preventDefault();
    toggleDrawer();
  });

  const drawerLinks = document.querySelectorAll(
    '.js-drawer a[href^="#"], a[href^="#"]'
  );
  drawerLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      closeDrawer();
    });
  });

  document.addEventListener("click", function (e) {
    if (
      !drawer.contains(e.target) &&
      !menuButton.contains(e.target) &&
      drawer.classList.contains("is-open")
    ) {
      closeDrawer();
    }
  });

  mask.addEventListener("click", function () {
    if (drawer.classList.contains("is-open")) {
      closeDrawer();
    }
  });

  function toggleDrawer() {
    document.body.classList.toggle("u-is-fixed");
    drawer.classList.toggle("is-open");
    mask.classList.toggle("is-visible");
    menuButton.classList.toggle("is-open");
    menuButton.textContent = menuButton.classList.contains("is-open")
      ? "close"
      : "menu";
    menuButton.style.transition = "ease 0.5s";
  }

  function closeDrawer() {
    document.body.classList.remove("u-is-fixed");
    drawer.classList.remove("is-open");
    mask.classList.remove("is-visible");
    menuButton.classList.remove("is-open");
    menuButton.textContent = "menu";
    menuButton.style.transition = "ease 0.5s";
  }

  const breakPoint = 768;
  const matchMedia = window.matchMedia(`(min-width: ${breakPoint}px)`);
  function handleMediaChange(e) {
    if (e.matches) {
      closeDrawer();
    }
  }

  matchMedia.addListener(handleMediaChange);
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
