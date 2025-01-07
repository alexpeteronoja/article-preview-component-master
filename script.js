let clickCount = 0;

document.querySelector(".share-1-icon").addEventListener("click", function() {
    clickCount++;

    if (clickCount === 1) {
        document.querySelector(".share-section").classList.remove("hide");
    } else if (clickCount === 2) {
        document.querySelector(".share-section").classList.add("hide");
        clickCount = 0;
    }
})

document.querySelector(".share-2-icon").addEventListener("click", function() {
    document.querySelector(".share-section").classList.add("hide")
})