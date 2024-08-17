//360px未満は表示倍率を変更
!(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? "width=device-width,initial-scale=1"
        : "width=360";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

//ドロワーの開閉
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

// スムーススクロール処理を定義
function smoothScroll(event) {
  event.preventDefault();

  const targetId = this.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);
  const headerHeight = window.innerWidth < 768 ? 86 : 86; // ヘッダーの高さを条件に応じて調整
  const targetPosition = targetElement.offsetTop - headerHeight;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}

// js-to-topのスムーススクロール
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", smoothScroll);
});

document
  .getElementById("js-to-top")
  .addEventListener("click", function (event) {
    event.preventDefault(); // デフォルトのアンカーリンク動作を無効化

    window.scrollTo({
      top: 0,
      behavior: "smooth", // スムーススクロール
    });
  });

// p-worksの水平スクロール
const horizontalScroll = gsap.to(".square", {
  x: -800, // 左に800px移動
  paused: true, // 最初はアニメーションを止めておく
  ease: "none", // アニメーションの動きを一定にする
});

ScrollTrigger.create({
  trigger: "#scrollWrap", // この要素がスクロールのトリガーになる
  pin: true, // トリガー要素を画面に固定する
  start: "center center", // トリガー要素が画面の中央に来たときにアニメーションが始まる
  end: "+=300", // 300pxスクロールするまでアニメーションを続ける
  pinSpacing: true, // トリガー要素が固定されても周囲のスペースを維持する
  fastScrollEnd: true, // スクロールが速く終わった場合の設定
  onUpdate: (self) => {
    gsap.to(horizontalScroll, { progress: self.progress, duration: 1 }); // スクロールの進行度に合わせてアニメーションを進める
  },
});

// カーソル用のdivタグを取得してcursorに格納
var cursor = document.getElementById("cursor");

// カーソル用のdivタグをマウスに追従させる
document.addEventListener("mousemove", function (e) {
  cursor.style.transform =
    "translate(" + e.clientX + "px, " + e.clientY + "px)";
});

// クラス名 'special-link' を持つ a タグにホバーした時にクラス追加、離れたらクラス削除
var specialLinks = document.querySelectorAll("a.special-link");
for (var i = 0; i < specialLinks.length; i++) {
  specialLinks[i].addEventListener("mouseover", function (e) {
    cursor.classList.add("cursor--hover");
  });
  specialLinks[i].addEventListener("mouseout", function (e) {
    cursor.classList.remove("cursor--hover");
  });
}
