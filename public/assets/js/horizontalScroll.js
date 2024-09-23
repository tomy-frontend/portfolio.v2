// p-worksの水平スクロール
// 画面サイズが768px以上かどうかをチェック
const mediaQuery = window.matchMedia("(min-width: 768px)");

let horizontalScroll; // アニメーション用の変数をグローバルに宣言
let scrollTriggerInstance; // ScrollTriggerインスタンスを格納する変数

function setupHorizontalScroll() {
  if (mediaQuery.matches) {
    // 画面サイズが768px以上のときだけ実行
    horizontalScroll = gsap.to(".square", {
      x: -800, // 左に800px移動
      paused: true, // 最初はアニメーションを止めておく
      ease: "none", // アニメーションの動きを一定にする
    });

    scrollTriggerInstance = ScrollTrigger.create({
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
  } else {
    // 画面サイズが768px未満の場合にScrollTriggerを削除
    if (scrollTriggerInstance) {
      scrollTriggerInstance.kill(); // ScrollTriggerインスタンスを削除
      scrollTriggerInstance = null; // 変数をリセット
    }
    if (horizontalScroll) {
      horizontalScroll.kill(); // gsapアニメーションを削除
      horizontalScroll = null; // 変数をリセット
    }
  }
}

// 初回ロード時に処理を実行
setupHorizontalScroll();

// 画面サイズが変更されたときにも再チェック
mediaQuery.addEventListener("change", setupHorizontalScroll);
