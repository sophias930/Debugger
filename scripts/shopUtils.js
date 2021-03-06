var div = $('<div class="popUp"></div>');

function setUpShop() {
    $("#swatterItem .shopImg").on("click", increaseRadius);
    $("#sprayItem .shopImg").on("click", increaseRadius);
    $("#livesItem .shopImg").on("click", null, 1, buyLives);
    $("#plantItem .shopImg").on("click", null, 1, plantTree);

}

// create pop up div
var buyLives = function (event) {
    playPurchaseSound();
    let inputValue = event.data;
    console.log("value: " + inputValue);

    if (userPts < inputValue) {
        div.append("Insufficient Funds");
    } else {
        userRAM += 4;
        userPts -= 50;
        statsContainer.empty();
        
        $('#statsContentNew').empty();
        $('#statsContentNew').append(loseLife())
    }
}

var increaseRadius = function () {
    playPurchaseSound();
    //increase the radius
    console.log("increasing radius");
    // subtract points
    if (userPts < 10) {
        div.append("Insufficient Funds");
    } else {
        statsContainer.empty();
        statsContainer.append(updateRAM(0));
        statsContainer.append(updateScore(-10));
    }
}

startLightAnimation = function () {
    $('#shopPopUp').animate({
        'border-image': 'linear-gradient(to bottom right, #b827fc 100%, #2c90fc 75%, #b8fd33 50%, #fec837 25%, #fd1892 0%)'
    }, "slow", function () {
        startDarkAnimation();
    });

}

startDarkAnimation = function () {
    $('#shopPopUp').animate({
        'border-image': 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)'
    }, "fast", function () {
        startLightAnimation();
    });

}

const plantTree = function(){
    const tree = $('<img src="assets/sprites/plant_icon.png" id="tree"></img>');
    rootContainer.append(tree);
}