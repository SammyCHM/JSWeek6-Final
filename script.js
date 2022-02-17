


//Build objects to hold info on players/ player points and cards

class Player {
  constructor(name) {
    this.name = name;
    this.playerCardsInHand = [];
    this.playerPoint = 0;
  }
}

class Card
{
  constructor(name, order)
  {
    this.name = name;
    this.order = order;
  }
}

class CardGame {
  constructor(player1_name, player2_name) {
    this.player1 = new Player(player1_name);
    this.player2 = new Player(player2_name);
  }


  start_match(cards) {
    for (let i = 0; i < cards.length / 2; i++)
    // 1,2,3....,25
    {
      this.player1.playerCardsInHand.push(cards[i]);
    }
    for (let i = cards.length / 2; i < cards.length; i++)
    //26, 27 , 28 ... 52 
    {
      this.player2.playerCardsInHand.push(cards[i]);
    }

    let player1ChosenCard;
    let player2ChosenCard;
    var counter = 4;

    //
    while (counter > 0)
    {
      const player1turn = prompt("Which card you will select, Player1 ? ");
      player1ChosenCard = this.player1.playerCardsInHand[player1turn];
      console.log("player1 deals a " + player1ChosenCard.name);
      const player2turn = prompt("Which card you will select, Player2 ? ");
      player2ChosenCard = this.player2.playerCardsInHand[player2turn];
      console.log("player2 deals a " + player2ChosenCard.name);
      counter--;


      if (player1ChosenCard.order > player2ChosenCard.order)
      {
        this.player1.playerPoint++;
        console.log("player1 + 1 point");
      }
      else
      {
        this.player2.playerPoint++;
        console.log("player2 + 1 point");
      }
    }

    //Check for final score when the game is done.
    if (this.player1.playerPoint === this.player2.playerPoint)
    {
      console.log("IT'S TIE");
    }
    else
    {
      var winner = this.player1.playerPoint > this.player2.playerPoint ? this.player1 : this.player2;
      console.log("The winner is " + winner.name + " with " + winner.playerPoint + " points");
    }
}

  show_player(order) {
    //Ternary Operator
    var selected_player = order === 1 ? this.player1 : this.player2;
    // var selected_player;
    // if (order === 1)
    // {
    //   selected_player = this.player1;
    // }
    // else
    // {
    //   selected_player = this.player2;
    // }
    console.log("Player" + order)
    for (let i = 0; i < selected_player.playerCardsInHand.length; i++) {
      console.log(i + " . " + selected_player.playerCardsInHand[i]);
    }
  }
}


// function creates a new deck
function newDeck() {
  let suits = ['Spade', 'Heart', 'Club', 'Diamond'];
  let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  
  //Initial Idea: to store an array of string.
  deckOfCards = [];

  //idea to  store card object
  deckOfCards_edited = [];


  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let aCard = new Card(String(values[x] + suits[i]), x);
      deckOfCards_edited.push(aCard);
      deckOfCards.push(values[x] + suits[i]);
    }
  }
  return deckOfCards_edited;

}

//function to shuffle deck
function shuffled(cards) {

  for (let s = 0; s < 52; s++) {
    let newCard = cards[s];
    let randomCard = Math.floor(Math.random() * 52);
    cards[s] = cards[randomCard];
    cards[randomCard] = newCard;
  }

}


var winz = newDeck();  // code to check if deck was shuffled
shuffled(winz);

var game = new CardGame("Tom", "Jerry");
game.start_match(winz);



// Function for mocha & chai testing

function drinkMocha(x,y){
  if(typeof x == 'string'){
     throw new Error('x must be a number');
  }
     return x;
}