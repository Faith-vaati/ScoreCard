let homeCount = 0;
let guestCount = 0;
let homeScoreEl = document.getElementById("homeScore");
let guestScoreEl = document.getElementById("guestScore");

function plusOneHome() {
  homeCount += 1;
  homeScoreEl.innerText = homeCount;
}

function plusTwoHome() {
  homeCount += 2;
  homeScoreEl.innerText = homeCount;
}

function plusThreeHome() {
  homeCount += 3;
  homeScoreEl.innerText = homeCount;
}

function plusOneGuest() {
  guestCount += 1;
  guestScoreEl.innerText = guestCount;
}

function plusTwoGuest() {
  guestCount += 2;
  guestScoreEl.innerText = guestCount;
}

function plusThreeGuest() {
  guestCount += 3;
  guestScoreEl.innerText = guestCount;
}
console.log(homeCount);
console.log(guestCount);
