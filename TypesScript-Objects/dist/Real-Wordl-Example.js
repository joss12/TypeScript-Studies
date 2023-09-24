"use strict";
let image = document.querySelector(".img");
function unBlurImage() {
    this.classList.add("un-blur");
}
image === null || image === void 0 ? void 0 : image.addEventListener("mouseenter", unBlurImage);
image === null || image === void 0 ? void 0 : image.addEventListener("mouseleave", function () {
    this.classList.remove("un-blur");
});
