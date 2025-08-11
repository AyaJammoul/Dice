if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;


    document.getElementById("dice1").setAttribute("src", "img/dice " + randomNumber1 + ".png")
    document.getElementById("dice2").setAttribute("src", "img/dice " + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}