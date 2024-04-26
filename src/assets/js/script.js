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
