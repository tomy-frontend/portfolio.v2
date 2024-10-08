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

// loaderのアニメーション
const loading = document.getElementById("loading");

window.onload = function () {
  loading.classList.add("loaded");
};

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

// p-blog-cardのカード、リストビューの切り替え
document.addEventListener("DOMContentLoaded", function () {
  const cardView = document.getElementById("card");
  const listView = document.getElementById("list");
  const blogCards = document.querySelectorAll(".p-blog-card");
  const blogLists = [
    document.querySelector(".p-blog__list"),
    document.querySelector(".p-archive__container--blog"),
  ];

  // リストビューが選択されたとき
  listView.addEventListener("change", function () {
    blogCards.forEach(function (card) {
      card.classList.add("list");
    });
    blogLists.forEach(function (list) {
      if (list) {
        list.classList.add("list");
      }
    });
  });

  // カードビューが選択されたとき
  cardView.addEventListener("change", function () {
    blogCards.forEach(function (card) {
      card.classList.remove("list");
    });
    blogLists.forEach(function (list) {
      if (list) {
        list.classList.remove("list");
      }
    });
  });
});

// archive.phpのタグの非同期切り替え
document.addEventListener("DOMContentLoaded", function () {
  const tags = document.querySelectorAll(".p-portfolio-card-tag");
  const posts = document.querySelectorAll(".p-blog-card");

  tags.forEach((tag) => {
    tag.addEventListener("click", function () {
      // すべてのタグから "is-checked" クラスを削除
      tags.forEach((tag) => tag.classList.remove("is-checked"));

      // クリックされたタグに "is-checked" クラスを追加
      this.classList.add("is-checked");

      const filter = this.getAttribute("data-filter");

      posts.forEach((post) => {
        if (filter === "all") {
          post.style.display = "grid";
        } else {
          const categories = post.getAttribute("data-category").split(" ");
          if (categories.includes(filter)) {
            post.style.display = "grid";
          } else {
            post.style.display = "none";
          }
        }
      });
    });
  });
});

// archive-works.phpのタグの非同期切り替え
document.addEventListener("DOMContentLoaded", function () {
  const tags = document.querySelectorAll(".p-portfolio-card-tag");
  const posts = document.querySelectorAll(".p-portfolio-card");

  tags.forEach((tag) => {
    tag.addEventListener("click", function () {
      // すべてのタグから "is-checked" クラスを削除
      tags.forEach((tag) => tag.classList.remove("is-checked"));

      // クリックされたタグに "is-checked" クラスを追加
      this.classList.add("is-checked");

      const filter = this.getAttribute("data-filter");

      posts.forEach((post) => {
        if (filter === "all") {
          post.style.display = "grid";
        } else {
          const categories = post.getAttribute("data-category").split(" ");
          if (categories.includes(filter)) {
            post.style.display = "grid";
          } else {
            post.style.display = "none";
          }
        }
      });
    });
  });
});

// ContactForm7のバリデーションチェック
const form = document.querySelector(".wpcf7-form");
let required = [];
let submit;

function initializeForm() {
  if (!form) {
    return;
  }

  required = Array.from(
    form.querySelectorAll(
      '.wpcf7-validates-as-required, .wpcf7-checkbox[aria-required="true"]'
    )
  );
  submit = form.querySelector(".wpcf7-submit");
}

function isFieldFilled(el) {
  if (!el) {
    return false;
  }

  let filled = false;

  if (el.classList.contains("wpcf7-checkbox")) {
    const checkboxes = el.querySelectorAll('input[type="checkbox"]');
    filled = Array.from(checkboxes).some((cb) => cb.checked);
  } else if (el.type === "checkbox") {
    filled = el.checked;
  } else if (el.tagName === "SELECT") {
    filled = el.value !== "" && el.value !== "選択してください";
  } else if (el.type === "file") {
    filled = el.files && el.files.length > 0;
  } else {
    filled = el.value && el.value.trim() !== "";
  }

  // メールアドレスのバリデーション
  if (el.type === "email") {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    filled = emailPattern.test(el.value);
  }

  return filled;
}

function checkRequiredFields() {
  const allFilled = required.every(isFieldFilled);
  return allFilled;
}

function updateSubmitButton() {
  if (submit) {
    const shouldBeEnabled = checkRequiredFields();
    submit.disabled = !shouldBeEnabled;
  }
}

function setupEventListeners() {
  if (required.length > 0 && submit) {
    submit.disabled = true;

    required.forEach((el) => {
      if (el.classList.contains("wpcf7-checkbox")) {
        const checkboxes = el.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
          checkbox.addEventListener("change", updateSubmitButton);
        });
      } else {
        el.addEventListener("input", updateSubmitButton);
        el.addEventListener("change", updateSubmitButton);
      }
    });

    form.addEventListener("submit", (e) => {
      if (!checkRequiredFields()) {
        e.preventDefault();
        alert("すべての必須項目を入力してください。");
      }
    });

    updateSubmitButton();
  }
}

// 初期化とイベントリスナーの設定
window.addEventListener("load", () => {
  initializeForm();
  setupEventListeners();
});
