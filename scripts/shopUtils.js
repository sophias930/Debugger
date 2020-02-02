var div = $('<div class="popUp"></div>');

var createShop = function () {
    // Youre a winner text
    div.append($('<br>'));

    div.append("Congratulations, You're Today's Lucky Winner!");
    div.append($('<br>'));
    div.append($('<br>'));

    div.append("Use your points to purchase an upgrade below:");
    div.append($('<br>'));
    div.append($('<br>'));

    // Buy more lives
    var ramImg = new Image(50, 25);
    ramImg.src = "assets/ui/win_code_16.png";
    div.append(ramImg);

    div.append("Buy More Lives: 1pt/life");
    var input = document.createElement("INPUT");
    input.setAttribute("type", "number");
    div.append(input);

    var livesButton = document.createElement("button")
    var livesText = document.createTextNode("Purchase");
    livesButton.onclick = function () { buyLives(input.value) };
    livesButton.appendChild(livesText);

    div.append(livesButton);

    div.append($('<br>'));
    div.append($('<br>'));


    // fly swatter
    var swatImg = new Image(50, 25);
    swatImg.src = "assets/ui/win_code_16.png";
    div.append(swatImg);

    div.append("Upgrade radius with fly swatter for 10 pts");

    var livesButton = document.createElement("button")
    var livesText = document.createTextNode("Purchase");
    livesButton.onclick = function () { buyLives(input.value) };
    livesButton.appendChild(livesText);

    div.append(livesButton);


    return div;
}

// create pop up div
var buyLives = function (inputValue) {
    console.log("value: " + inputValue);

    if (userPts < inputValue) {
        div.append("Insufficient Funds")
    } else {
        userRAM += inputValue * 2;
        userPts -= inputValue;
        statsContainer.empty();
        statsContainer.append(updateRAM(0));
        statsContainer.append(updateScore(0));

    }

}