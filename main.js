function showImage() {
  // تحديد العناصر
  const container = document.querySelector(" .container ");
  const expendImg = document.querySelector(" .container .image .expendImg");
  const images = document.querySelectorAll(".row  .column img");
  const close = document.querySelector(".container .close");
  const nextBtn = document.querySelector(".container .next");
  const prevBtn = document.querySelector(".container .prev");
  let imageIndex = 0;
  //التنقل باستخدام الصور المصغرة
  images.forEach((img, i) => {
    img.onclick = function () {
      expendImg.src = images[i].src;
      imageIndex = i;
      container.style.display = "block";
    };
  });
  //   زر الإغلاق
  close.onclick = function () {
    container.style.display = "none";
  };

  // التنقل بين الصور باستخدام الأزرار مع الشروط

  nextBtn.onclick = function () {
    if (imageIndex < images.length) {
      imageIndex += 1;
    } else {
      imageIndex = 0;
    }
    expendImg.src = images[imageIndex].src;
  };

  prevBtn.onclick = function () {
    if (imageIndex > 0) {
      imageIndex -= 1;
    } else {
      imageIndex = images.length;
    }
    expendImg.src = images[imageIndex].src;
  };
}

window.onload = showImage;
