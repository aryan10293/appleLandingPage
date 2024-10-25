const rightButton = document.getElementById('right')
const leftButton = document.getElementById('left')
const appleTvShows = document.getElementsByClassName('appletv-card')
const scrollContent = document.getElementById('appletv')



const rightArrow = (e) => {
    e.preventDefault()
    scrollContent.scrollBy({ left: 200, behavior: 'smooth' });
}

const leftArrow = (e) => {
    e.preventDefault()
    scrollContent.scrollBy({ left: -200, behavior: 'smooth' });
}

rightButton.addEventListener('click',rightArrow)
leftButton.addEventListener('click',leftArrow)
scrollContent.addEventListener('wheel', (e) => e.preventDefault(), { passive: false });
scrollContent.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });