function showImage() {
  // تحديد العناصر
  const container = document.querySelector(".container");
  const expendImg = document.querySelector(".container .expendImg");
  const images = document.querySelectorAll(".row .column img");
  const close = document.querySelector(".container .close");
  const nextBtn = document.querySelector(".container .next");
  const prevBtn = document.querySelector(".container .prev");
  let imageIndex = 0; // لتتبع الصورة الحالية

  // عند النقر على الصورة المصغرة
  images.forEach((img, i) => {
    img.onclick = function () {
      imageIndex = i; // تحديث الفهرس عند النقر
      expendImg.src = images[imageIndex].src;
      container.style.display = "block";
    };
  });

  // إغلاق نافذة العرض عند النقر على زر الإغلاق
  close.onclick = function () {
    container.style.display = "none";
  };

  // التنقل بين الصور

  nextBtn.onclick = function () {
    imageIndex = (imageIndex + 1) % images.length; // الانتقال للصورة التالية
    expendImg.src = images[imageIndex].src;
  };

  prevBtn.onclick = function () {
    imageIndex = (imageIndex - 1 + images.length) % images.length; // الانتقال للصورة السابقة
    expendImg.src = images[imageIndex].src;
  };
}

// تحميل الدالة عند تحميل الصفحة
window.onload = showImage;
