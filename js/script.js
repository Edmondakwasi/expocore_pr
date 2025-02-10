// Image array
const images = [
    "images/image1.webp",
    "images/image2.webp",
    "images/image3.webp"
];

let index = 0;
const imgElement = document.getElementById("dynamicImage");

function changeImage() {
    index = (index + 1) % images.length; // Loop through images
    imgElement.src = images[index];
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
