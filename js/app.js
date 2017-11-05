
 // Variables

var cards = $(".card i"); 
var cardsList = $(".deck li");
var shuffleButton = $(".fa.fa-repeat");
var openList = [];
var clickedTimes = 0;
var moves = $(".moves");
var restartMoves = moves.text(0);
var tilesFlipped = 0;
var stars = 0;


// Functions

var emptyOpenList = function(){
    openList.splice(0, openList.length);
    };



var removeSymbol = function(a){
    $(a).removeClass("show open match");
};

var addSymbol = function(){
    $(".open").addClass("match");
};

var scoring = function(){
    if (clickedTimes <= 16){
        stars = 3;
    } else if ((clickedTimes > 16) && (clickedTimes <= 21)){
        stars = 2;
    } else if (clickedTimes > 21){
        stars = 1;
    }
};

var starsIcons = function(){
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


var superShuffle = function(){
    shuffle(cards);  
    $(".deck li").empty();
    for (var i = 0; i <= 16; i++){
        $(cardsList[i]).append(cards[i]);   
    }

}; 

var winMessage = function(){
    if ((stars == 3) || (stars == 2)){
        alert('Congrats! You finished on ' + clickedTimes + ' moves! \nYour score is ' + stars + ' stars');
        } else if(stars == 1){
            alert('Congrats! You finished on ' + clickedTimes + ' moves! \nYour score is ' + stars + ' star');
        }
    };

var movesCount = function(){
    clickedTimes++;
    moves.text(clickedTimes);
    scoring();
    starsIcons();
};




$(".deck").on("click", "li", function(){
    if($(this).hasClass("show open")){
        return false; //Prevents getting a match from clicking the same card
    } else{    
        if (openList.length < 2) {    
            $(this).addClass("show open");
            openList.push(this);
                for(var i=0; i<2; i++){                        
                    if(openList[i].innerHTML === openList[i+1].innerHTML){
                        addSymbol();
                        emptyOpenList();
                        tilesFlipped += 2;
                        movesCount();
                        
                        //Winning 

                        if(tilesFlipped == cards.length){
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
    }
});


// Win // 


//

shuffleButton.click(function(){
    emptyOpenList();
    removeSymbol($(".deck li"));
    superShuffle();
    moves.text(0);
    clickedTimes = 0;
    tilesFlipped = 0;
    stars = 3;
    $('#star3').attr('class', 'fa fa-star');
    $('#star2').attr('class', 'fa fa-star');
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











