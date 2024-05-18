// ファーストビューのタイムラインアニメーション
const header = document.querySelector(".JsHeader");
const JsLead1 = document.querySelector(".JsLead1");
const JsLead2 = document.querySelector(".JsLead2");
const JsTitle = document.querySelector(".JsTitle");
const tl = gsap.timeline();

tl.fromTo(
  JsLead1,
  1,
  { opacity: 0, x: -30 },
  { opacity: 1, x: 0, ease: "power2.easeInout" }
);
tl.fromTo(
  JsLead2,
  1,
  { opacity: 0, x: -30 },
  { opacity: 1, x: 0, ease: "power2.easeInout" }
);
tl.fromTo(
  JsTitle,
  1,
  { opacity: 0, x: -30 },
  { opacity: 1, x: 0, ease: "power2.easeInout" }
);
tl.fromTo(
  header,
  1,
  { opacity: 0, y: -30 },
  { opacity: 1, y: 0, ease: "power2.easeInout" },
  "-=1.0"
);

// 下からフェードイン
document.querySelectorAll(".jsfadeIn").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom 60%",
      toggleActions: "play none none none",
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power1.out",
  });
});

// 左からフェードイン
document.querySelectorAll(".jsfadeInLeft").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom 60%",
      toggleActions: "play none none none",
    },
    duration: 1,
    opacity: 0,
    x: -50,
    ease: "power1.out",
  });
});

// 右からフェードイン
document.querySelectorAll(".jsfadeInRight").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      end: "bottom 60%",
      toggleActions: "play none none none",
    },
    duration: 1,
    opacity: 0,
    x: 50,
    ease: "power1.out",
  });
});

// 拡大から縮小
document.querySelectorAll(".jsScale").forEach((jsScale) => {
  gsap.fromTo(
    jsScale,
    { scale: 1.1, opacity: 0 }, // 初期状態はやや拡大され、透明度は0
    {
      scrollTrigger: {
        trigger: jsScale, // トリガーとなるのは各`.jsScale`要素自身
        start: "top 80%", // ビューポートの下端に要素の上端が来た時にアニメーション開始
        end: "bottom 60%", // ビューポートの中央に要素の上端が来た時にアニメーション終了
        toggleActions: "play none none none", // アニメーションを1回再生して終了
        once: true, // アニメーションを1回限り実行
      },
      scale: 1, // 目標とするスケール（元のサイズに戻る）
      opacity: 1, // 最終的な透明度は1
      ease: "power1.out", // アニメーションのイージングを滑らかにする
      duration: 2.0, // アニメーションの持続時間を1.5秒に設定
    }
  );
});

// lineが引かれるアニメーション
document.querySelectorAll(".js-line-animation").forEach((line) => {
  gsap.fromTo(
    line,
    { opacity: 0, scale: 0 }, // 初期状態
    {
      scrollTrigger: {
        trigger: line, // トリガーとなるのは各`.line-animation`要素自身
        start: "top 90%", // ビューポートの上端から90%の位置でアニメーション開始
        end: "bottom 60%", // ビューポートの下端から60%の位置でアニメーション終了
        toggleActions: "play none none none",
      },
      opacity: 1, // 目標とする透明度
      scale: 1, // 目標とするスケール
      duration: 3, // アニメーションの持続時間（秒）
      ease: "power3.out", // イージング関数
    }
  );
});

// ityped.js
function initITyped() {
  ityped.init(document.querySelector("#ityped"), {
    strings: ["Welcome to"],
    typeSpeed: 100,
    backSpeed: 50,
    startDelay: 500,
    backDelay: 500,
    loop: false,
    showCursor: true,
    placeholder: false,
    disableBackTyping: false,
    cursorChar: ".",
  });
}

ScrollTrigger.create({
  trigger: "#ityped", // この要素がビューポートに入ったらトリガー
  start: "top 75%", // 要素の上部がビューポートの75%の位置に来たらトリガー
  onEnter: () => initITyped(), // 要素がビューポートに入った時に実行
  once: true, // トリガーは一度だけ実行
});
