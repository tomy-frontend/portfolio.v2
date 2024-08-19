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
      // start: "top 90%",
      start: "top 60%",
      end: "bottom 60%",
      toggleActions: "play none none none",
      // scrub: true,
      // markers: true, // デバッグ用マーカー
    },
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power1.out",
  });
});

// 下からフェードイン index.html works専用
document.querySelectorAll(".jsfadeInWork").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%", //works用に調整
      // start: "top 60%",
      end: "bottom 60%",
      toggleActions: "play none none none",
      // scrub: true,
      // markers: true, // デバッグ用マーカー
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
      // start: "top 90%",
      start: "top 60%",
      end: "bottom 60%",
      toggleActions: "play none none none",
      // scrub: true,
      // markers: true, // デバッグ用マーカー
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
      // start: "top 90%",
      start: "top 60%",
      end: "bottom 60%",
      toggleActions: "play none none none",
      // markers: true, // デバッグ用マーカー
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
        start: "top 60%", // ビューポートの下端に要素の上端が来た時にアニメーション開始
        end: "bottom 60%", // ビューポートの中央に要素の上端が来た時にアニメーション終了
        toggleActions: "play none none none", // アニメーションを1回再生して終了
        once: true, // アニメーションを1回限り実行
        // markers: true, // デバッグ用マーカー
      },
      scale: 1, // 目標とするスケール（元のサイズに戻る）
      opacity: 1, // 最終的な透明度は1
      ease: "power1.out", // アニメーションのイージングを滑らかにする
      duration: 2.0, // アニメーションの持続時間を1.5秒に設定
    }
  );
});

//js-p-page-headingの文字を一文字ずつフェードイン
function splitTextToSpans(textElement) {
  const text = textElement.textContent;
  const chars = text.split("");
  textElement.innerHTML = "";
  chars.forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.querySelector(".jsfadeInText");
  splitTextToSpans(textElement);

  gsap.from(".jsfadeInText span", {
    scrollTrigger: {
      trigger: ".js-p-page-heading",
      start: "top 75%",
      end: "bottom 60%",
      toggleActions: "play none none none",
      // markers: true, // デバッグ用マーカー
    },
    duration: 1, // 各文字のアニメーションの持続時間
    opacity: 0,
    y: 50, // 開始時に文字を垂直方向に50ピクセル下から開始
    ease: "power1.out",
    stagger: 0.1, // 各文字のアニメーション開始の間隔
  });
});

// マーカーのアニメーション
document.querySelectorAll(".jsMarker").forEach((marker) => {
  gsap.to(marker, {
    scrollTrigger: {
      trigger: marker, // 各`.jsMarker`要素がトリガー
      start: "top 20%", // アニメーションが始まる位置
      // markers: true, // デバッグ用のマーカーを表示（必要に応じて有効化）
      toggleClass: {
        targets: marker, // クラスを切り替える対象の要素
        className: "active", // クラス名 "active" を付け外し
      },
      once: true, // 1回のみ動作
    },
  });
});

// ラインアニメーション
document.querySelectorAll(".jsLine").forEach((line) => {
  gsap.to(line, {
    scrollTrigger: {
      trigger: line, // 各`.jsLine`要素がトリガー
      start: "top 60%", // アニメーションが始まる位置
      toggleClass: {
        targets: line, // クラスを切り替える対象の要素
        className: "active", // クラス名 "active" を付け外し
      },
      once: true, // 1回のみ動作
    },
  });
});

//moveアニメーション
document.querySelectorAll(".jsMove").forEach((jsMove) => {
  gsap.fromTo(
    jsMove,
    { x: 20, y: -20, rotate: 5 },
    {
      scrollTrigger: {
        trigger: jsMove, // トリガーとなるのは各`.jsMove`要素自身
        start: "top 50%", // ビューポートの下端に要素の上端が来た時にアニメーション開始
        end: "bottom 50%", // ビューポートの中央に要素の上端が来た時にアニメーション終了
        toggleActions: "play none none none", // アニメーションを1回再生して終了
        once: true,
        // markers: true, // デバッグ用マーカー
        // scrub: true,
      },
      x: 0,
      y: 0,
      rotate: 0,
      ease: "none", // アニメーションのイージングを滑らかにする
      duration: 1, // アニメーションの持続時間を1秒に設定
    }
  );
});
