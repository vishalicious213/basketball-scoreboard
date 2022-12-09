const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")

homePoints = 0
guestPoints = 0
homeScore.textContent = homePoints
guestScore.textContent = guestPoints

function addHomeScore(points) {
    homePoints += points
    homeScore.textContent = homePoints

    if (homePoints > guestPoints) {
        homeScore.classList.add("leader")
        guestScore.classList.remove("leader")
    }

    
    if (guestPoints === homePoints) {
        homeScore.classList.remove("leader")
        guestScore.classList.remove("leader")
    }
}

function addGuestScore(points) {
    guestPoints += points
    guestScore.textContent = guestPoints

    if (guestPoints > homePoints) {
        guestScore.classList.add("leader")
        homeScore.classList.remove("leader")
    }

    if (guestPoints === homePoints) {
        homeScore.classList.remove("leader")
        guestScore.classList.remove("leader")
    }
}

function resetScore() {
    homePoints = 0
    guestPoints = 0
    homeScore.textContent = homePoints
    guestScore.textContent = guestPoints
    homeScore.classList.remove("leader")
    guestScore.classList.remove("leader")
}