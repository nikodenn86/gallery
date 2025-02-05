function takePhoto() {
    const photoContainer = document.querySelector('.photo-container');
    const photo = document.getElementById('photo');

    setTimeout(() => {
        photoContainer.style.height = "200px";
        photo.style.opacity = "1";
        photo.style.transform = "translateY(0)";
    }, 500);
}
function takePhoto() {
    document.querySelector('.photo-container').classList.add('show-photo');
}

document.getElementById("photo-button").addEventListener("click", function () {
    document.querySelector(".photo-container").classList.add("show-photo");
});
