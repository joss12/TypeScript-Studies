let image: HTMLImageElement | null = document.querySelector(".img");

function unBlurImage(this:HTMLImageElement){
    this.classList.add("un-blur");
}

image?.addEventListener("mouseenter", unBlurImage);
//oprional channing operator, it is represented by a question mark.

image?.addEventListener("mouseleave", function(this: HTMLImageElement){
    this.classList.remove("un-blur");
})
