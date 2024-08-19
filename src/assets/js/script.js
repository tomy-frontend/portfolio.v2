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

//detailsのアコーディオンの滑らかな開閉
document.querySelectorAll("details").forEach((detail) => {
  const summary = detail.querySelector("summary");
  const content = detail.querySelector(".p-faq__a");
  const icon = detail.querySelector(".p-faq__icon");

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    if (detail.hasAttribute("open")) {
      // 閉じるアニメーション
      content.style.height = content.scrollHeight + "px";
      icon.style.transform = "rotate(90deg)";
      requestAnimationFrame(() => {
        content.style.height = "0px";
        content.addEventListener(
          "transitionend",
          () => {
            detail.removeAttribute("open");
          },
          { once: true }
        );
      });
    } else {
      // 開くアニメーション
      detail.setAttribute("open", "");
      const height = content.scrollHeight;
      content.style.height = "0px";
      icon.style.transform = "rotate(45deg)";
      requestAnimationFrame(() => {
        content.style.height = height + "px";
      });
    }
  });
});

//js-anime-bgのアニメーション
const container = document.querySelector(".js-anime-bg");

for (var i = 0; i <= 50; i++) {
  const blocks = document.createElement("div");
  blocks.classList.add("block");
  container.appendChild(blocks);
}

function animateBlocks() {
  anime({
    targets: ".block",
    translateX: function () {
      return anime.random(300, -600);
    },
    translateY: function () {
      return anime.random(300, -600);
    },
    scale: function () {
      return anime.random(0.5, 2);
    },
    backgroundColor: function () {
      return `hsl(0, ${anime.random(0, 10)}%, ${anime.random(90, 100)}%)`;
    },
    duration: 15000,
    delay: anime.stagger(12),
    complete: animateBlocks,
  });
}

animateBlocks();
