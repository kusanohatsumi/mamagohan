const doc = document;

// タブの切り替え処理
const tab = doc.querySelectorAll(".h-tab__item");
tab[0].addEventListener("click", function () {
  tab[0].style.backgroundColor = "#fff";
  tab[1].style.backgroundColor = "#f6e1aa";
});
tab[1].addEventListener("click", function () {
  tab[0].style.backgroundColor = "#f6e1aa";
  tab[1].style.backgroundColor = "#fff";
});

//   いいねボタン
const good = doc.querySelectorAll(".good");
let goodNum = 0;
good.forEach((e, i) => {
  good[i].addEventListener("click", function () {
    goodNum++;
    if (goodNum % 2 === 1) {
      good[i].src = "img/isGood.svg";
    } else {
      good[i].src = "img/heart.svg";
    }
  });
});

//   保存ボタン
const storage = doc.querySelectorAll(".storage");
let stoNum = 0;
storage.forEach((e, i) => {
  storage[i].addEventListener("click", function () {
    stoNum++;
    if (stoNum % 2 === 1) {
      storage[i].src = "img/isStorage.svg";
    } else {
      storage[i].src = "img/strage.svg";
    }
  });
});

// コメントを表示
const comment = doc.querySelectorAll(".h-showComment");
console.log(comment);
comment.forEach((e, i) => {
  comment[i].addEventListener("click", function () {
    console.log("ok");
  });
});

// コメントを表示
const commentView = doc.getElementById("h-commentView");
const showComment = doc.querySelectorAll(".h-showComment");
showComment.forEach((e, i) => {
  showComment[i].addEventListener("click", function () {
    commentView.style.transform = "translateY(0)";
  });
});
commentView.addEventListener("click", function () {
  commentView.style.transform = "translateY(100vh)";
});
