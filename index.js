const homeScore = document.getElementById("home-score")
const guestScore = document.getElementById("guest-score")

homePoints = 0
guestPoints = 0
homeScore.textContent = homePoints
guestScore.textContent = guestPoints

function addHomeScore(points) {
    homePoints += points
    homeScore.textContent = homePoints
}