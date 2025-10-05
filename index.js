const contentLetter = document.querySelector(".contentLetter");
const sticker = document.querySelector(".sticker");
const buttonGroup = document.querySelector(".button-group");
const agreeBtn = document.getElementById("agreeBtn");
const disagreeBtn = document.getElementById("disagreeBtn");

const letterText = "Gửi người anh thương. Cảm ơn em đã đến với anh. Mỗi ngày bên em là một món quà quý giá. Anh yêu em… em có thể cho anh cơ hội được gọi em là người yêu nhé!!";

let letterShown = false; // 👉 cờ kiểm soát

// 👉 Click sticker -> bắt đầu gõ thư
sticker.addEventListener("click", () => {
  if (letterShown) return; // nếu đã hiện thì bỏ qua

  contentLetter.innerHTML = "";
  let i = 0;
  function typeChar() {
    if (i < letterText.length) {
      contentLetter.innerHTML += letterText[i];
      i++;
      setTimeout(typeChar, 50);
    } else {
      buttonGroup.classList.add("show"); // hiện nút sau khi gõ xong
      letterShown = true; // đánh dấu đã hiện
    }
  }
  typeChar();
});

// 👉 Đồng ý -> sang trang khác
agreeBtn.addEventListener("click", () => {
  window.location.href = "next.html"; 
});

// 👉 Không đồng ý -> chạy trốn khi bấm
disagreeBtn.addEventListener("click", () => {
  const startLetter = document.querySelector('.startLetter');
  const maxX = startLetter.offsetWidth - disagreeBtn.offsetWidth;
  const maxY = startLetter.offsetHeight - disagreeBtn.offsetHeight - 50;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  disagreeBtn.style.position = "absolute";
  disagreeBtn.style.left = randomX + 'px';
  disagreeBtn.style.top = randomY + 'px';
});
