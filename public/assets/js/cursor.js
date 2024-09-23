// カーソル用のdivタグを取得
var cursor = document.getElementById("cursor");

// カーソル用のdivタグが存在する場合のみ処理を実行
if (cursor) {
  // カーソル用のdivタグをマウスに追従させる
  document.addEventListener("mousemove", function (e) {
    cursor.style.transform =
      "translate(" + e.clientX + "px, " + e.clientY + "px)";
  });

  // クラス名 'special-link' を持つ a タグが存在する場合のみ処理を実行
  var specialLinks = document.querySelectorAll("a.special-link");
  if (specialLinks.length > 0) {
    for (var i = 0; i < specialLinks.length; i++) {
      specialLinks[i].addEventListener("mouseover", function (e) {
        cursor.classList.add("cursor--hover");
      });
      specialLinks[i].addEventListener("mouseout", function (e) {
        cursor.classList.remove("cursor--hover");
      });
    }
  }
}
