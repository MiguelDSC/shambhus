const dishes = ["dish1.jpeg", "dish2.jpeg", "dish3.jpeg"];

const imageTop = document.querySelector(".top");
const imageBottom = document.querySelector(".bottom");

let indexTop = 0;
let indexBottom = 1;

function setDishImages(index1, index2) {
  imageTop.src = `/media/dishes/${dishes[index1]}`;
  imageBottom.src = `/media/dishes/${dishes[index2]}`;
}

// window.addEventListener("load", () => {
//   setDishImages(indexTop, indexBottom);

// setInterval(function () {
//   indexTop = indexTop + 1;
//   indexBottom = indexBottom + 1;

//   if (indexTop > dishes.length - 1) {
//     indexTop = 0;
//   }
//   if (indexBottom > dishes.length - 1) {
//     indexBottom = 0;
//   }

//   setDishImages(indexTop, indexBottom);

//   imageTop.classList.toggle("test");
// }, 3000);
// });

// console.log(imgContainer);

// setInterval(function () {

//   changeDish();
// }, 3000);

// #img-container img.top:hover {
//   opacity: 0;
// }
