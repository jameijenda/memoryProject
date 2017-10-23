/*
 * Create a list that holds all of your cards
 */

var cards = $(".card i");
var cardsList = $(".deck li");
var cardListChildren = $(".deck li i");
var shuffleButton = $(".fa.fa-repeat");
var openList = [];
var classes = [];

var emptyOpenList = function(){
    openList.splice(0, openList.length);
    };


var removeSymbol = function(){
    $(".deck li").removeClass("show open match");
};

var addSymbol = function(){
    $(".open").addClass("match");
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



/*$(".deck").on("click", "li", function(){
    $(this).addClass("show open");
    openList.push(this);
    if (openList.length >= 2){
        if(openList[0].outerHTML == openList[1].outerHTML){
            if(openList[2].outerHTML == openList[3].outerHTML){
                if(openList[4].outerHTML == openList[5].outerHTML){
                    if(openList[6].outerHTML == openList[7].outerHTML){
                        if(openList[8].outerHTML == openList[9].outerHTML){
                            if(openList[10].outerHTML == openList[11].outerHTML){
                                if(openList[12].outerHTML == openList[13].outerHTML){
                                    if(openList[14].outerHTML == openList[15].outerHTML){
                                        addSymbol();
                                    }
                                }
                            }
                        }
                    }    
                }
            }
        }           
        } else {
            setTimeout(function(){
                removeSymbol()
                emptyOpenList();
                }, 1500);
        }
    }
});*/

/*$(".deck").on("click", "li", function(){
    $(this).addClass("show open");
    openList.push(this);
    if (openList.length >= 2){
        if(openList[0].outerHTML == openList[1].outerHTML && 
            openList[2].outerHTML == openList[3].outerHTML && 
            openList[4].outerHTML == openList[5].outerHTML && 
            openList[6].outerHTML == openList[7].outerHTML && 
            openList[8].outerHTML == openList[9].outerHTML &&
            openList[10].outerHTML == openList[11].outerHTML &&
            openList[12].outerHTML == openList[13].outerHTML &&
            openList[14].outerHTML == openList[15].outerHTML
            ) {
            addSymbol();
        } else {
            setTimeout(function(){
                removeSymbol()
                emptyOpenList();
                }, 1500);
        }
    }
});*/

$(".deck").on("click", "li", function(){
    $(this).addClass("show open");
    openList.push(this);
    if (openList.length >= 2){
        for(var i=0; i<=15; i+=2){
            if(openList[i].outerHTML === openList[i+1].outerHTML){
                addSymbol();
            }                    
            else {
                setTimeout(function(){
                    removeSymbol()
                    emptyOpenList();
                    }, 1500);
            };
        };
    };
});

shuffleButton.click(function(){
    emptyOpenList();
    removeSymbol();
    superShuffle();
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











