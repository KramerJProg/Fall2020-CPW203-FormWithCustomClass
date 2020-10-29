class VideoGame {
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

// Test code
/*
let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;
*/

window.onload = function() {
    let addBtn = <HTMLElement> document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame() {
    if (isAllDataValid()) {
        let game = getVideoGame();
        displayGame(game);
    }
}

// Helper Method
function getById(id:string) {
    return document.getElementById(id);
}

/**
 * Gets all game data from the form
 * and returns it in a video game object
 */
function getVideoGame():VideoGame {
    // Create game (Done)
    let game = new VideoGame();
    // Populate with data from the form
    let titleInput = <HTMLInputElement>getById("title");
    game.title = titleInput.value;

    let priceInput = <HTMLInputElement>getById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>getById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>getById("online");
    game.isDigitalOnly = digitalOnly.checked;
    // if (digitalOnly.checked) {
    //     game.isDigitalOnly = true;
    // }
    // else {
    //     game.isDigitalOnly = false;
    // }

    console.log(game);
    // Return game
    return game;

}

function displayGame(myGame:VideoGame):void {
    // Display video game below the form
    let displayDiv = getById("display");

    // Create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    // Create <p> with game details
    let gameInfo = document.createElement("p");
    let gameMediumDisplay = "";
    if (myGame.isDigitalOnly) {
        gameMediumDisplay = "This is a digital only game.";
    }
    else {
        gameMediumDisplay = "You can come buy a physical copy!";
    }
    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. 
                          It costs ${myGame.price.toFixed(2)}. 
                          ${gameMediumDisplay}`;

    // Add <h2> in the div display
    displayDiv.appendChild(gameHeading);

    // Add <p> game info
    displayDiv.appendChild(gameInfo);
}

// ADD VALIDATION CODE
function isAllDataValid() {
    return true;
}