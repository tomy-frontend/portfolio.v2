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
