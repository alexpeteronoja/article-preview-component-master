let clickCount = 0;

document.querySelector(".share-1-icon").addEventListener("click", function() {
   document.querySelector(".share-section").classList.toggle("hide");
})

document.querySelector(".share-2-icon").addEventListener("click", function() {
    document.querySelector(".share-section").classList.add("hide")
})
