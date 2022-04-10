"use strict";
// const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];
// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.classList.add("bgimg");
// bgImage.src = `images/${chosenImage}`;
// // console.log(bgImage);
// document.body.appendChild(bgImage); // 제일 뒤에
// // document.body.prepend(bgImage); // 제일 앞에
function selectImg() {
  const imagesCount = 5;
  const imagesSelect = Math.floor(Math.random() * imagesCount);
  const bgImage = document.createElement("img");
  bgImage.classList.add("bgimg");

  const date = new Date();
  const hours = String(date.getHours());

  if (hours >= 5 && hours < 12) {
    bgImage.src = `images/${imagesSelect}.jpg`;
  } else if (hours >= 12 && hours < 20) {
    bgImage.src = `images/${imagesSelect * 10 + 10}.jpg`;
  } else {
    bgImage.src = `images/${imagesSelect * 100 + 100}.jpg`;
  }
  document.body.appendChild(bgImage);
}

selectImg();
setInterval(selectImg, 100000);
