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
