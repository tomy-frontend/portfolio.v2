// ファーストビューのタイムラインアニメーション ページ読み込み後に実行
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".JsHeader");
  const JsLead1 = document.querySelector(".JsLead1");
  const JsLead2 = document.querySelector(".JsLead2");
  const JsTitle = document.querySelector(".JsTitle");

  // 必要な要素がすべて存在する場合にのみアニメーションを実行
  if (header && JsLead1 && JsLead2 && JsTitle) {
    const tl = gsap.timeline({ delay: 1 });

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
  }
});

// js-anime-bgのアニメーション ページ読み込み後に実行
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".js-anime-bg");

  // containerが存在する場合のみ処理を実行
  if (container) {
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
  }
});

// 共通アニメーション //
// 下からフェードイン
document.addEventListener("DOMContentLoaded", () => {
  const fadeInElements = document.querySelectorAll(".jsfadeIn");

  // .jsfadeIn 要素が存在する場合のみ処理を実行
  if (fadeInElements.length > 0) {
    fadeInElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
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
  }
});

// 下からフェードイン index.html works専用
document.addEventListener("DOMContentLoaded", () => {
  const fadeInWorkElements = document.querySelectorAll(".jsfadeInWork");

  // .jsfadeInWork 要素が存在する場合のみ処理を実行
  if (fadeInWorkElements.length > 0) {
    fadeInWorkElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 90%", //works用に調整
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
  }
});

// 左からフェードイン
document.addEventListener("DOMContentLoaded", () => {
  const fadeInLeftElements = document.querySelectorAll(".jsfadeInLeft");

  // .jsfadeInLeft 要素が存在する場合のみ処理を実行
  if (fadeInLeftElements.length > 0) {
    fadeInLeftElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
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
  }
});

// 右からフェードイン
document.addEventListener("DOMContentLoaded", () => {
  const fadeInRightElements = document.querySelectorAll(".jsfadeInRight");

  // .jsfadeInRight 要素が存在する場合のみ処理を実行
  if (fadeInRightElements.length > 0) {
    fadeInRightElements.forEach((element) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
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
  }
});

// 拡大から縮小
document.addEventListener("DOMContentLoaded", () => {
  const jsScaleElements = document.querySelectorAll(".jsScale");

  // .jsScale 要素が存在する場合のみ処理を実行
  if (jsScaleElements.length > 0) {
    jsScaleElements.forEach((jsScale) => {
      gsap.fromTo(
        jsScale,
        { scale: 1.2 }, // 初期状態はやや拡大され、透明度は0
        {
          scrollTrigger: {
            trigger: jsScale, // トリガーとなるのは各`.jsScale`要素自身
            start: "top 80%", // ビューポートの下端に要素の上端が来た時にアニメーション開始
            end: "bottom 60%", // ビューポートの中央に要素の上端が来た時にアニメーション終了
            toggleActions: "play none none none", // アニメーションを1回再生して終了
            once: true, // アニメーションを1回限り実行
            // markers: true, // デバッグ用マーカー
          },
          scale: 1, // 目標とするスケール（元のサイズに戻る）
          ease: "power1.out", // アニメーションのイージングを滑らかにする
          duration: 2.0, // アニメーションの持続時間を2秒に設定
        }
      );
    });
  }
});

// js-p-page-headingの文字を一文字ずつフェードイン
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

  // textElement が存在する場合のみ処理を実行
  if (textElement) {
    splitTextToSpans(textElement);

    gsap.from(".jsfadeInText span", {
      scrollTrigger: {
        trigger: ".jsfadeInText",
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
  }
});

// マーカーのアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const markerElements = document.querySelectorAll(".jsMarker");

  // .jsMarker 要素が存在する場合のみ処理を実行
  if (markerElements.length > 0) {
    markerElements.forEach((marker) => {
      gsap.to(marker, {
        scrollTrigger: {
          trigger: marker, // 各`.jsMarker`要素がトリガー
          start: "top 50%", // アニメーションが始まる位置
          // markers: true, // デバッグ用のマーカーを表示（必要に応じて有効化）
          toggleClass: {
            targets: marker, // クラスを切り替える対象の要素
            className: "active", // クラス名 "active" を付け外し
          },
          once: true, // 1回のみ動作
        },
      });
    });
  }
});

// ラインアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const lineElements = document.querySelectorAll(".jsLine");

  // .jsLine 要素が存在する場合のみ処理を実行
  if (lineElements.length > 0) {
    lineElements.forEach((line) => {
      gsap.to(line, {
        scrollTrigger: {
          trigger: line, // 各`.jsLine`要素がトリガー
          start: "top 85%", // アニメーションが始まる位置
          toggleClass: {
            targets: line, // クラスを切り替える対象の要素
            className: "active", // クラス名 "active" を付け外し
          },
          once: true, // 1回のみ動作
        },
      });
    });
  }
});

// moveアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const jsMoveElements = document.querySelectorAll(".jsMove");

  // .jsMove 要素が存在する場合のみ処理を実行
  if (jsMoveElements.length > 0) {
    jsMoveElements.forEach((jsMove) => {
      gsap.fromTo(
        jsMove,
        { x: 20, y: -20, rotate: 5 },
        {
          scrollTrigger: {
            trigger: jsMove, // トリガーとなるのは各`.jsMove`要素自身
            start: "top 80%", // ビューポートの下端に要素の上端が来た時にアニメーション開始
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
  }
});
