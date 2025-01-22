let cat = document.querySelector(".cats");
let dog = document.querySelector(".dog");
let for_cat = document.querySelector("#for_cat");
let for_dog = document.querySelector("#for_dog");

function getRandomCat() {
  try {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          display_image1(data[0].url);
        } else {
          console.log("No cat images found");
        }
      });
  } catch (error) {
    console.log(error);
  }
}
function display_image1(url) {
  document.getElementById("image1").src = url;
}

function getRandomDog() {
  try {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        display_image(data.message);
      });
  } catch (error) {
    console.log(error);
  }
}
function display_image(image_url) {
  document.getElementById("image").src = image_url;
}
