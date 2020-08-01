const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')

for (let card of cards) {
    card.addEventListener('click', function() {
        const courseId = card.getAttribute('id')
        
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${courseId}` 
    })
}

modalOverlay.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
})

document.querySelector('.maximize-modal').addEventListener('click', function() {
    if (modal.classList.contains('maximize') != true) {
        modal.classList.add('maximize')
    } else {
        modal.classList.remove('maximize')
    }
})

