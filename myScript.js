console.log("Hey I'm there!");

const shareButton = document.querySelector(".share-button");
const shareIcon = document.querySelector(".share-icon");
const socialSection = document.querySelector(".social-section");
const authorDetails = document.querySelector(".author-details");
const authorSection = document.querySelector(".author-section");

shareButton.addEventListener("click", () => {

    if (window.matchMedia("(max-width: 800px)").matches) {

        if (socialSection.style.display !== "block") {
            shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
            shareIcon.style.fill = "hsl(0, 0%, 100%)";
            authorDetails.style.display = "none";
            authorSection.style.backgroundColor = "hsl(214, 17%, 35%)";
            authorSection.style.flexDirection = "row-reverse";
            socialSection.style.display = "block";
        } else {
            authorSection.style.flexDirection = "row";
            authorSection.style.backgroundColor = "hsl(0, 0%, 100%)";
            shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
            shareIcon.style.fill = "#6E8098";
            authorDetails.style.display = "flex";
            socialSection.style.display = "none";
        }

    } else {

        if ( socialSection.style.display !== "block") {
            shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
            shareIcon.style.fill = "hsl(0, 0%, 100%)";
            socialSection.style.display = "block";
        } else {
            shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
            shareIcon.style.fill = "#6E8098";
            socialSection.style.display = "none";
        }
    }
});