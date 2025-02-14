// Thay đổi nội dung búc thư ở đây
var letterContent =
  "❤️ Chúc em bé một ngày Valentine vui vẻ. Còn hạnh phúc thì để anh lo! Cảm ơn em đã xuất hiện và làm cuộc sống của anh hạnh phúc bớt nhạt nhẽo hơn. Chúc mừng ngày Valentine nhé bé iu. Không cần gì quá to tát, chỉ cần em vẫn ở đây là đủ rồi. Happy Valentine!💕";

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 65 là tốc độ khá phù hợp
var durationWrite = 65;

// Hiệu ứng gõ chữ
function effectWrite() {
  var boxLetter = document.querySelector(".letterContent");
  var letterContentSplited = letterContent.split("");

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val;
    }, durationWrite * index);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".container").classList.add("active");
  }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
  cardValentine.classList.toggle("open");

  if (cardValentine.className.indexOf("open") != -1) {
    setTimeout(effectWrite, 500);
  } else {
    setTimeout(() => {
      document.querySelector(".letterContent").innerHTML = "";
    }, 1000);
  }
});
