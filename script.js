function showWish() {
  const name = document.getElementById("nameInput").value.trim();
  const wishBox = document.getElementById("wish");
  if (name === "") {
    alert("Hãy nhập tên của bạn nhé 💖");
    return;
  }

  const wishLines = [
    `Gửi ${name} thân yêu 🌷,\n`,
    "Sắp tới là ngày đặc biệt – ngày để tôn vinh một nửa thế giới tuyệt vời này 💖.\n\n",
    "Chúc bạn – người con gái dịu dàng, xinh đẹp và mạnh mẽ – luôn tươi cười như ánh nắng ban mai,\nluôn tự tin tỏa sáng dù ở bất cứ nơi đâu 🌞.\n\n",
    "Mong rằng cuộc sống của bạn sẽ luôn rực rỡ như những đóa hoa mùa xuân 🌸,\nngọt ngào như hương mật ong và bình yên như một bản nhạc lofi dịu nhẹ giữa đêm khuya 🌙.\n\n",
    "Dù mai này có bận rộn, có những lúc mỏi mệt,\nhãy nhớ rằng bạn luôn xứng đáng được yêu thương,\nđược trân trọng và được hạnh phúc – không chỉ dịp này mà là mỗi ngày trong suốt cuộc đời này 💕.\n\n",
    "Cảm ơn bạn đã mang đến thế giới này những điều đẹp đẽ,\nnhững nụ cười và sự dịu dàng hiếm có 🌼.\n\n",
    `Chúc ${name} một ngày 20/10 thật trọn vẹn,\nngập tràn yêu thương, tiếng cười và những điều kỳ diệu nhất trên thế gian này 💐💫.`
  ];

  wishBox.innerHTML = "";
  wishBox.classList.remove("hidden");
  playMusic();
  createFallingElements();
  typeText(wishBox, wishLines);
}

function typeText(element, lines, delay = 50) {
  let lineIndex = 0;
  let charIndex = 0;
  let text = "";

  function type() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        text += lines[lineIndex][charIndex];
        element.innerHTML = text.replace(/\n/g, "<br>");
        charIndex++;
        setTimeout(type, delay);
      } else {
        lineIndex++;
        charIndex = 0;
        setTimeout(type, 400);
      }
    }
  }
  type();
}

function playMusic() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.5;
  music.play().catch(() => {});
}

function createFallingElements() {
  setInterval(() => {
    const el = document.createElement("div");
    el.classList.add(Math.random() > 0.5 ? "flower" : "heart");
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = (6 + Math.random() * 5) + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 11000);
  }, 800);
}
