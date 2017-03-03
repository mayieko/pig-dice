var Player = function(turn) {
  this.scoreTotal = 0;
  this.currentScore = 0;
  this.turn = turn;
};

Player.prototype.takeTurn = function() {
  if (this.turn === true) {
    this.turn = false;
  }
  else {
    this.turn = true;
  }
};
Player.prototype.roll = function() {
  var rand = Math.floor(Math.random() * 6) + 1;
  this.currentScore = rand;
};

Player.prototype.addPoints = function(rollPoints) {
  this.scoreTotal += rollPoints;
};

var player1 = new Player(true);
var player2 = new Player(false);

var totalRoll;
// User Interface Logic
$(document).ready(function() {
  var playerOneName;
  var playerTwoName;

  totalRoll = parseInt($("#rolled-total").text());

  $("#signup-form").submit(function(event){
    event.preventDefault();
    playerOneName = $("#player-one-signup").val();
    playerTwoName = $("#player-two-signup").val();
    if (playerOneName == "" || playerTwoName == "") {
      alert("Please enter a name for each player");
      return;
    }

    $(".player-setup").slideUp(500);
    $("#player-one-name").text(playerOneName);
    $("#player-two-name").text(playerTwoName);
    $("#player-msg").text(playerOneName + ", GO!");
    $(".game").slideDown(500);
  }); // end submit
