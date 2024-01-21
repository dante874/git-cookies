let cookie = document.getElementById("cookie")
let displayCookies = document.getElementById("displayCookies")
let upgradeClicker = document.getElementById("upgClicker")
let displayUpgradeCost = document.getElementById("displayUpgradeCost")
let autoClicker = document.getElementById("autoClicker")
let displayAutoClickerCost = document.getElementById("displayAutoClickerCost")
let resetClicker = document.getElementById("resetClicker")



cookie.addEventListener("click", cookieClicked)
upgradeClicker.addEventListener("click", upgradeClickerClicked)
autoClicker.addEventListener("click", autoClickerClicked)
resetClicker.addEventListener("click", resetClickerClicked)

let cookies = 0;
let multiplier = 1;
let multiplierCost = 20;
let autoClickers = 0;
let autoClickerCost = 50;
let myTimer = 0;
function cookieClicked() {
    cookies = cookies + multiplier
    displayCookiesAmt()
}

function displayCookiesAmt() {
    displayCookies.innerHTML = ("<p>You have " + Math.floor(cookies) + "cookies!")
}
function upgradeClickerClicked() {
    if (cookies >= multiplierCost) {
        cookies = cookies - multiplierCost
        multiplier = multiplier + 1
        multiplierCost = multiplierCost * 1.5
        displayUpgradeCost.innerHTML = ("<p>Upgrade costs " + multiplierCost + "cookies")
        displayCookiesAmt()


    }else(alert("not enough cookies"));{

    }
}

function autoClickerClicked() {
    if (cookies >= autoClickerCost){
        cookies = cookies - autoClickerCost
        displayCookiesAmt()
        autoClickers = autoClickers + 1 
        autoClickerCost = autoClickerCost*1.3
        displayAutoClickerCost.innerHTML = ("<p>Auto clicker cost " + autoClickerCost + "cookies!!")

    }else (alert("Not enough cookies!"));{

    }
}

setInterval(function(){
    cookies = cookies + autoClickers*.1
    displayCookiesAmt()

},10)

function resetClickerClicked() {
    if(cookies = myTimer * autoClickers){

    
    clearInterval()
}else (setInterval());{

}
    

}