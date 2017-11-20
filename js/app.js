
 // Variables
const cards = $(".card i"); 
const cardsList = $(".deck li");
const shuffleButton = $(".fa.fa-repeat");
let openList = [];
let clickedTimes = 0;
const moves = $(".moves");
const restartMoves = moves.text(0);
let tilesFlipped = 0;
let stars = 0;
let clicks = 0;
const timerVar = setInterval(countTimer, 1000);
const playAgain = $(".modal-content .playAgain");
const closeButton = $(".modal-content .closeBtn");





// Functions

const gameStarted = function(){
    if (clicks==1){
        stop = !stop;
    } 
};


const emptyOpenList = function(){
    openList.splice(0, openList.length);
};



const removeSymbol = function(a){
    $(a).removeClass("show open match");
};

const addSymbol = function(){
    $(".open").addClass("match");
};

const scoring = function(){
    if (clickedTimes <= 16){
        stars = 3;
    } else if ((clickedTimes > 16) && (clickedTimes <= 21)){
        stars = 2;
    } else if (clickedTimes > 21){
        stars = 1;
    }
};

const starsIcons = function(){
    if (stars == 2){
        $('#star3').attr('class', 'fa fa-star-o');
    } else if (stars == 1){
        $('#star2').attr('class', 'fa fa-star-o');
    }
};


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


const superShuffle = function(){
    shuffle(cards);  
    $(".deck li").empty();
    for (var i = 0; i <= 16; i++){
        $(cardsList[i]).append(cards[i]);   
    }

}; 


/* Start over/replay function */

const startOver = function(){
    emptyOpenList();
    removeSymbol($(".deck li"));
    superShuffle();
    moves.text(0);
    clickedTimes = 0;
    tilesFlipped = 0;
    stars = 3;
    $('#star3').attr('class', 'fa fa-star');
    $('#star2').attr('class', 'fa fa-star');
    clicks = 0;
    $("#timer").text(":");
    totalSeconds = 0;
    stop = true;
    $(".modal").css("display", "none");
};

/* Winning Modal */

const winMessage = function(){
    if ((stars == 3) || (stars == 2)){
        
        $(".modal").css("display", "block");
        $(".modal-content p").text('Congrats! You time is ' + $("#timer").text() + ' and \n your score is ' + stars + ' stars!')
        } else if(stars == 1){
            $(".modal").css("display", "block");
            $(".modal-content p").text('Congrats! You time is ' + $("#timer").text() + ' and \n your score is ' + stars + ' star!');
        }
    };

/* Moves track and scoring */

const movesCount = function(){
    clickedTimes++;
    moves.text(clickedTimes);
    scoring();
    starsIcons();
};



/* Main function, contains "flipping" of cards, matching, scoring, timing and winning */


$(".deck").on("click", "li", function(){
    if($(this).hasClass("show open")){
        return false; //Prevents getting a match from clicking the same card
    }       
    else if (openList.length < 2) {    
        $(this).addClass("show open");
        openList.push(this);
        clicks++;
        gameStarted();
            for(var i=0; i<2; i++){                        
                if(openList[i].innerHTML === openList[i+1].innerHTML){
                    addSymbol();
                    emptyOpenList();
                    tilesFlipped += 2;
                    movesCount();
                    
                    //Winning 

                    if(tilesFlipped == cards.length){
                        stop = true;
                        gameStarted();
                        setTimeout(function(){
                            winMessage();
                        }, 150);
                        
                    }

                } else {
                        movesCount();
                        setTimeout(function(){
                            removeSymbol(openList);
                            emptyOpenList();                            
                            }, 600);
                }
            }
    }
});




/* Shuffle Cards */

shuffleButton.click(function(){
    startOver()
}); 

/* Play again after player wins */

playAgain.click(function(){
    startOver();
    $(".modal").css("display", "none");
});

/* Close modal after player wins */

closeButton.click(function(){
    $(".modal").css("display", "none");
});










/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */











