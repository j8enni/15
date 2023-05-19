function change_src() {
  var images = ["img1.jpg", "img2.jpg", "img3.jpg"]; // массив с именами изображений
  var p = document.getElementById("pic");
  var currentSrc = p.src.split("/").pop(); // получаем имя текущего изображения
  var currentIndex = images.indexOf(currentSrc); // получаем индекс текущего изображения в массиве
  if (currentIndex === images.length - 1) {
    // если текущее изображение последнее в массиве
    p.src = images[0]; // устанавливаем первое изображение
  } else {
    p.src = images[currentIndex + 1]; // устанавливаем следующее изображение в массиве
  }
}

window.onload = function () {
  // основной код, начинает работать после окончательной загрузки окна
  var p = document.getElementById("pic");
  p.addEventListener("click", change_src); // добавляем обработчик клика на изображение
};
