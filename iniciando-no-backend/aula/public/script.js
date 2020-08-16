const cards = document.querySelectorAll(".card__image__container")

for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id") 
        window.location.href = `/video?id=${ videoId }`       
    })
}

