var gameTie = function() {
  if ((openBoard[0][0].attr('color') !== '') && (openBoard[0][1].attr('color') !== '') &&
       (openBoard[0][2].attr('color') !== '') && (openBoard[0][3].attr('color') !== '') &&
       (openBoard[0][4].attr('color') !== '') && (openBoard[0][5].attr('color') !== '') &&
       (openBoard[0][6].attr('color') !== '')){
    alert('This Game is a Draw!!!');
    setTimeout(function(){resetGame();},2500);
  }
};

var gameTournamentTie = function() {
  if ((openBoard[0][0].attr('color') !== '') && (openBoard[0][1].attr('color') !== '') &&
       (openBoard[0][2].attr('color') !== '') && (openBoard[0][3].attr('color') !== '') &&
       (openBoard[0][4].attr('color') !== '') && (openBoard[0][5].attr('color') !== '') &&
       (openBoard[0][6].attr('color') !== '')){
    alert('This Game is a Draw!!!');
    setTimeout(function(){resetTournamentGame();},2500);
  }
};

var gameWinner = function() {
    testTurn = playerTurn();
    if(testTurn === 'Player 1'){
      setTimeout(function(){alert('Congratulations Player 1 You Won!!!');},500);
      pOneWin = pOneWin + 1;
      pTwoLoss = pTwoLoss + 1;
    } else if(testTurn === 'Player 2'){
        setTimeout(function(){alert('Congratulations Player 2 You Won!!!');},500);
        pTwoWin = pTwoWin + 1;
        pOneLoss = pOneLoss + 1;
      }
    player1WinTally.text(pOneWin);
    player1LossTally.text(pOneLoss);
    player2WinTally.text(pTwoWin);
    player2LossTally.text(pTwoLoss);
    setTimeout(function(){resetGame();},2500);

};

var gameTournamentWinner = function() {
    testTurn = playerTurn();
      if(testTurn === 'Player 1'){
        ptOneWin = ptOneWin + 1;
        ptTwoLoss = ptTwoLoss + 1;
        player1TournamentWinTally.text(ptOneWin);
        player1TournamentLossTally.text(ptOneLoss);
        player2TournamentWinTally.text(ptTwoWin);
        player2TournamentLossTally.text(ptTwoLoss);
        if(ptOneWin === 3){
          setTimeout(function(){
            alert("Congratulations Player 1, You're the Tournament Champion!!!");
            resetTournament();
          },500);
        } else {
            setTimeout(function(){alert("Congratulations Player 1, You've Won This Match!!!");},500);
            setTimeout(function(){resetTournamentGame();},2500);
          }
      } else if(testTurn === 'Player 2'){
          ptTwoWin = ptTwoWin + 1;
          ptOneLoss = ptOneLoss + 1;
          player1TournamentWinTally.text(ptOneWin);
          player1TournamentLossTally.text(ptOneLoss);
          player2TournamentWinTally.text(ptTwoWin);
          player2TournamentLossTally.text(ptTwoLoss);
          if (ptTwoWin === 3) {
            setTimeout(function(){
              alert("Congratulations Player 2, You're the Tournament Champion!!!");
              resetTournament();
            },500);
          } else {
              setTimeout(function(){alert("Congratulations Player 2, You've Won This Match!!!");},500);
              setTimeout(function(){resetTournamentGame();},2500);
            }
        }
};

var diagonalUpRight1DownLeft2 = function(target,rowNum,colNum){
    if((rowNum <= 3 && rowNum >= 1) && (colNum >=2 && colNum <= 5)){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-1][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+1][colNum-1].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+2][colNum-2].attr('color')){
            gameWinner(); // Diagonal UpRight 1 DownLeft 2
          }
        }
      }
    }
};

var diagonalUpRight2DownLeft1 = function(target,rowNum,colNum){
    if((rowNum >= 2 && rowNum <= 4) && (colNum >= 1 && colNum <= 4)){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-1][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-2][colNum+2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+1][colNum-1].attr('color')){
            gameWinner(); // Diagonal UpRight 2 DownLeft 1
          }
        }
      }
    }
};

var diagonalDownRight1UpLeft2 = function(target,rowNum,colNum){
    if((rowNum >= 2 && rowNum <= 4) && (colNum >= 2 && colNum <= 5)){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+1][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-1][colNum-1].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-2][colNum-2].attr('color')){
            gameWinner(); // Diagonal DownRight 1 UpLeft 2
          }
        }
      }
    }
};

var diagonalDownRight2UpLeft1 = function(target,rowNum,colNum){
    if((rowNum >= 1 && rowNum <= 3) && (colNum >= 1 && colNum <= 4)){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+1][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+2][colNum+2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-1][colNum-1].attr('color')){
            gameWinner(); // Diagonal Down Right 2 UpLeft 1
          }
        }
      }
    }
};

var diagonalDownLeft = function(target,rowNum,colNum){
    if (rowNum <= 2  && colNum >= 3){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+1][colNum-1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+2][colNum-2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+3][colNum-3].attr('color')){
            gameWinner(); // Diagonal Down Left
          }
        }
      }
    }
};

var diagonalUpRight = function(target,rowNum,colNum){
    if(rowNum >= 3 && colNum <= 3){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-1][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-2][colNum+2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-3][colNum+3].attr('color')){
            gameWinner(); // Diagonal Up Right
          }
        }
      }
    }
};

var diagonalDownRight = function(target,rowNum,colNum){
    if(rowNum <= 2 && colNum <= 3){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+1][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+2][colNum+2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+3][colNum+3].attr('color')){
            gameWinner(); // Diagonal Down Right
          }
        }
      }
    }
};

var diagonalUpLeft = function(target,rowNum,colNum){
    if(rowNum >= 3 && colNum >= 3){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-1][colNum-1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-2][colNum-2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-3][colNum-3].attr('color')){
            gameWinner(); // Diagonal Up Left
          }
        }
      }
    }
};

var verticalUp = function(target,rowNum,colNum){
    if(rowNum >= 3){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-1][colNum].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-2][colNum].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-3][colNum].attr('color')){
            gameWinner(); // Vertical Up
          }
        }
      }
    }
};

var verticalDown = function(target,rowNum,colNum){
      if (rowNum <= 2) {
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+1][colNum].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+2][colNum].attr('color')){
            if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+3][colNum].attr('color')){
              gameWinner(); // Vertical Down
            }
          }
        }
      }
};

var horizontalRight = function(target,rowNum,colNum){
    if(colNum <= 3){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum+2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum+3].attr('color')){
            gameWinner(); //Horizontal right
          }
        }
      }
    }
};

var horizontalLeft = function(target,rowNum,colNum){
      if (colNum >= 3) {
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum-1].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum-2].attr('color')){
            if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum-3].attr('color')){
              gameWinner(); //Horizontal left
            }
          }
        }
      }
};

var horizontalRight1Left2 = function(target,rowNum,colNum){
    if(colNum <= 5 && colNum >= 2){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum-1].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum-2].attr('color')){
            gameWinner(); //Horizontal Right 1 Left 2
          }
        }
      }
    }
};

var horizontalRight2Left1 = function(target,rowNum,colNum){
    if(colNum >= 1 && colNum <= 4){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum+2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum-1].attr('color')){
            gameWinner(); //Horizontal Right 2 Left 1
          }
        }
      }
    }
};

var checkWin = function(target,rowNum,columnNum){
  var colNum = parseInt(columnNum);
  verticalUp(target,rowNum,colNum);
  verticalDown(target,rowNum,colNum);
  horizontalLeft(target,rowNum,colNum);
  horizontalRight(target,rowNum,colNum);
  horizontalRight1Left2(target,rowNum,colNum);
  horizontalRight2Left1(target,rowNum,colNum);
  diagonalDownLeft(target,rowNum,colNum);
  diagonalDownRight(target,rowNum,colNum);
  diagonalDownRight2UpLeft1(target,rowNum,colNum);
  diagonalDownRight1UpLeft2(target,rowNum,colNum);
  diagonalUpLeft(target,rowNum,colNum);
  diagonalUpRight(target,rowNum,colNum);
  diagonalUpRight1DownLeft2(target,rowNum,colNum);
  diagonalUpRight2DownLeft1(target,rowNum,colNum);
  gameTie();
};

var diagonalUpRight1DownLeft2Tournament = function(target,rowNum,colNum){
    if((rowNum <= 3 && rowNum >= 1) && (colNum >=2 && colNum <= 5)){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-1][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+1][colNum-1].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+2][colNum-2].attr('color')){
            gameTournamentWinner(); // Diagonal UpRight 1 DownLeft 2
          }
        }
      }
    }
};

var diagonalUpRight2DownLeft1Tournament = function(target,rowNum,colNum){
    if((rowNum >= 2 && rowNum <= 4) && (colNum >= 1 && colNum <= 4)){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-1][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-2][colNum+2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+1][colNum-1].attr('color')){
            gameTournamentWinner(); // Diagonal UpRight 2 DownLeft 1
          }
        }
      }
    }
};

var diagonalDownRight1UpLeft2Tournament = function(target,rowNum,colNum){
    if((rowNum >= 2 && rowNum <= 4) && (colNum >= 2 && colNum <= 5)){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+1][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-1][colNum-1].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-2][colNum-2].attr('color')){
            gameTournamentWinner(); // Diagonal DownRight 1 UpLeft 2
          }
        }
      }
    }
};

var diagonalDownRight2UpLeft1Tournament = function(target,rowNum,colNum){
    if((rowNum >= 1 && rowNum <= 3) && (colNum >= 1 && colNum <= 4)){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+1][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+2][colNum+2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-1][colNum-1].attr('color')){
            gameTournamentWinner(); // Diagonal Down Right 2 UpLeft 1
          }
        }
      }
    }
};

var diagonalDownLeftTournament = function(target,rowNum,colNum){
    if (rowNum <= 2  && colNum >= 3){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+1][colNum-1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+2][colNum-2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+3][colNum-3].attr('color')){
            gameTournamentWinner(); // Diagonal Down Left
          }
        }
      }
    }
};

var diagonalUpRightTournament = function(target,rowNum,colNum){
    if(rowNum >= 3 && colNum <= 3){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-1][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-2][colNum+2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-3][colNum+3].attr('color')){
            gameTournamentWinner(); // Diagonal Up Right
          }
        }
      }
    }
};

var diagonalDownRightTournament = function(target,rowNum,colNum){
    if(rowNum <= 2 && colNum <= 3){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+1][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+2][colNum+2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+3][colNum+3].attr('color')){
            gameTournamentWinner(); // Diagonal Down Right
          }
        }
      }
    }
};

var diagonalUpLeftTournament = function(target,rowNum,colNum){
    if(rowNum >= 3 && colNum >= 3){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-1][colNum-1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-2][colNum-2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-3][colNum-3].attr('color')){
            gameTournamentWinner(); // Diagonal Up Left
          }
        }
      }
    }
};

var verticalUpTournament = function(target,rowNum,colNum){
    if(rowNum >= 3){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-1][colNum].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-2][colNum].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum-3][colNum].attr('color')){
            gameTournamentWinner(); // Vertical Up
          }
        }
      }
    }
};

var verticalDownTournament = function(target,rowNum,colNum){
      if (rowNum <= 2) {
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+1][colNum].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+2][colNum].attr('color')){
            if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum+3][colNum].attr('color')){
              gameTournamentWinner(); // Vertical Down
            }
          }
        }
      }
};

var horizontalRightTournament = function(target,rowNum,colNum){
    if(colNum <= 3){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum+2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum+3].attr('color')){
            gameTournamentWinner(); //Horizontal right
          }
        }
      }
    }
};

var horizontalLeftTournament = function(target,rowNum,colNum){
      if (colNum >= 3) {
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum-1].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum-2].attr('color')){
            if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum-3].attr('color')){
              gameTournamentWinner(); //Horizontal left
            }
          }
        }
      }
};

var horizontalRight1Left2Tournament = function(target,rowNum,colNum){
    if(colNum <= 5 && colNum >= 2){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum-1].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum-2].attr('color')){
            gameTournamentWinner(); //Horizontal Right 1 Left 2
          }
        }
      }
    }
};

var horizontalRight2Left1Tournament = function(target,rowNum,colNum){
    if(colNum >= 1 && colNum <= 4){
      if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum+1].attr('color')){
        if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum+2].attr('color')){
          if(openBoard[rowNum][colNum].attr('color') === openBoard[rowNum][colNum-1].attr('color')){
            gameTournamentWinner(); //Horizontal Right 2 Left 1
          }
        }
      }
    }
};

var checkWinTournament = function(target,rowNum,columnNum){
  var colNum = parseInt(columnNum);
  verticalUpTournament(target,rowNum,colNum);
  verticalDownTournament(target,rowNum,colNum);
  horizontalLeftTournament(target,rowNum,colNum);
  horizontalRightTournament(target,rowNum,colNum);
  horizontalRight1Left2Tournament(target,rowNum,colNum);
  horizontalRight2Left1Tournament(target,rowNum,colNum);
  diagonalDownLeftTournament(target,rowNum,colNum);
  diagonalDownRightTournament(target,rowNum,colNum);
  diagonalDownRight2UpLeft1Tournament(target,rowNum,colNum);
  diagonalDownRight1UpLeft2Tournament(target,rowNum,colNum);
  diagonalUpLeftTournament(target,rowNum,colNum);
  diagonalUpRightTournament(target,rowNum,colNum);
  diagonalUpRight1DownLeft2Tournament(target,rowNum,colNum);
  diagonalUpRight2DownLeft1Tournament(target,rowNum,colNum);
  gameTournamentTie();
};

var inputPiece = function(evtTarget){
    //Try and input a set timeout to corret the playerTurn Toggle
  var columnNum = evtTarget.dataset.column;
  turnResult.text(playerTurn());
  if (testTurn === player2){  //inversion of the testTurn toggle equality value
    for (var i = 5; i >= 0; i--){
      if (openBoard[i][columnNum].attr('color') === ''){
        openBoard[i][columnNum].attr('color','red');
        checkWin(openBoard[i][columnNum],i,columnNum);
        break;
      }
    }
  } else if (testTurn === player1){ //Second half of testTurn Inversion equality value
      for (var j = 5; j >= 0; j--){
        if (openBoard[j][columnNum].attr('color') === ''){
          openBoard[j][columnNum].attr('color','green');
          checkWin(openBoard[j][columnNum],j,columnNum);
          break;
        }
      }

    }
};

var inputPieceTournament = function(evtTarget){
  //Try and input a set timeout to corret the playerTurn Toggle
  var columnNum = evtTarget.dataset.column;
  turnResult.text(playerTurn());
  if (testTurn === player2){  //inversion of the testTurn toggle equality value
    for (var i = 5; i >= 0; i--){
      if (openBoard[i][columnNum].attr('color') === ''){
        openBoard[i][columnNum].attr('color','red');
        checkWinTournament(openBoard[i][columnNum],i,columnNum);
        break;
      }
    }
  } else if (testTurn === player1){ //Second half of testTurn Inversion equality value
      for (var j = 5; j >= 0; j--){
        if (openBoard[j][columnNum].attr('color') === ''){
          openBoard[j][columnNum].attr('color','green');
          checkWinTournament(openBoard[j][columnNum],j,columnNum);
          break;
        }
      }

    }
};

var playerTurn = function(){
  if (num % 2 === 0){
        num++;
    return player1;
  } else if (num % 2 !== 0){
        num++;
      return player2;
  }
};

var gameFunc = function(){
      if (event.target.getAttribute('class') === 'standardPieceOne'){
        testTurn = playerTurn();
        turnResult.text(playerTurn());
        if(testTurn === 'Player 1'){
          //I am the result of player 1's click.
          for(var i = 0; i < 7; i++){
            standardPieceOne.eq(i).attr('id','player1Hov');
          }
        } else if (testTurn === 'Player 2'){
            //I am the result of player 2's click.
            for(var j = 0; j < 7; j++){
              standardPieceOne.eq(j).attr('id','player2Hov');
            }
          }

        if(event.target === standardPieceOne.eq(0)[0]){
          inputPiece(event.target);
        } else if (event.target === standardPieceOne.eq(1)[0]){
            inputPiece(event.target);
          } else if (event.target === standardPieceOne.eq(2)[0]){
              inputPiece(event.target);
            } else if (event.target === standardPieceOne.eq(3)[0]){
                inputPiece(event.target);
              } else if (event.target === standardPieceOne.eq(4)[0]){
                  inputPiece(event.target);
                } else if (event.target === standardPieceOne.eq(5)[0]){
                    inputPiece(event.target);
                  } else if (event.target === standardPieceOne.eq(6)[0]){
                      inputPiece(event.target);
                    }

      }
};

var gameFuncTournament = function(){
      if (event.target.getAttribute('class') === 'standardPieceOne'){
        testTurn = playerTurn();
        turnResult.text(playerTurn());
        if(testTurn === 'Player 1'){
          //I am the result of player 1's click.
          for(var i = 0; i < 7; i++){
            standardPieceOne.eq(i).attr('id','player1Hov');
          }
        } else if (testTurn === 'Player 2'){
            //I am the result of player 2's click.
            for(var j = 0; j < 7; j++){
              standardPieceOne.eq(j).attr('id','player2Hov');
            }
          }
        if(event.target === standardPieceOne.eq(0)[0]){
          inputPieceTournament(event.target);
        } else if (event.target === standardPieceOne.eq(1)[0]){
            inputPieceTournament(event.target);
          } else if (event.target === standardPieceOne.eq(2)[0]){
              inputPieceTournament(event.target);
            } else if (event.target === standardPieceOne.eq(3)[0]){
                inputPieceTournament(event.target);
              } else if (event.target === standardPieceOne.eq(4)[0]){
                  inputPieceTournament(event.target);
                } else if (event.target === standardPieceOne.eq(5)[0]){
                    inputPieceTournament(event.target);
                  } else if (event.target === standardPieceOne.eq(6)[0]){
                      inputPieceTournament(event.target);
                    }

      }
};

var resetScore = function(){
  pOneWin = 0;
  pOneLoss = 0;
  pTwoWin = 0;
  pTwoLoss = 0;
  player1WinTally.text(pOneWin);
  player1LossTally.text(pOneLoss);
  player2WinTally.text(pTwoWin);
  player2LossTally.text(pTwoLoss);
};

var resetTournamentScore = function(){
  ptOneWin = 0;
  ptOneLoss = 0;
  ptTwoWin = 0;
  ptTwoLoss = 0;
  player1TournamentWinTally.text(ptOneWin);
  player1TournamentLossTally.text(ptOneLoss);
  player2TournamentWinTally.text(ptTwoWin);
  player2TournamentLossTally.text(ptTwoLoss);
};

var resetTournamentGame = function(){
      num = 0;
      for (var i = 0; i < tablePiece.length; i++){
        tablePiece.eq(i).attr('color','');
      }
      for(var j = 0; j < 7; j++){
        standardPieceOne.eq(i).attr('id','player1Hov');
      }
      turnResult.text(playerTurn());
      pieceTitle.text('Move Select Below');
};

var resetTournament = function(){
      num = 0;
      for (var i = 0; i < tablePiece.length; i++){
        tablePiece.eq(i).attr('color','');
      }
      for(i = 0; i < 7; i++){
        standardPieceOne.eq(i).attr('id','');
      }
      moveSelectTable.off('click', gameFuncTournament);
      resetTournamentScore();
      turnResult.text('Game not active');
      pieceTitle.text('');
};

var resetGame = function(){
      num = 0;
      for (var i = 0; i < tablePiece.length; i++){
        tablePiece.eq(i).attr('color','');
      }
      for(i = 0; i < 7; i++){
        standardPieceOne.eq(i).attr('id','');
      }
      moveSelectTable.off('click', gameFunc);
      turnResult.text('Game not active');
      pieceTitle.text('');
};

var startTournament = function(){
      for(var i = 0; i < 7; i++){
        standardPieceOne.eq(i).attr('id','player1Hov');
      }
      turnResult.text(playerTurn());
      pieceTitle.text('Move Select Below');
      moveSelectTable.on('click', gameFuncTournament);
      player1TournamentWinTally.text(ptOneWin);
      player1TournamentLossTally.text(ptOneLoss);
      player2TournamentWinTally.text(ptTwoWin);
      player2TournamentLossTally.text(ptTwoLoss);
};

var startGame = function(){
      for(var i = 0; i < 7; i++){
        standardPieceOne.eq(i).attr('id','player1Hov');
      }
      turnResult.text(playerTurn());
      pieceTitle.text('Move Select Below');
      moveSelectTable.on('click', gameFunc);
      player1WinTally.text(pOneWin);
      player1LossTally.text(pOneLoss);
      player2WinTally.text(pTwoWin);
      player2LossTally.text(pTwoLoss);
};

var buttonLogic = function(){
  if(event.target.getAttribute('id') === 'startGameButton'){
    startGame();

  }
  if(event.target.getAttribute('id') === 'startTournamentButton'){
    startTournament();
  }
  if(event.target.getAttribute('id') === 'resetGameButton'){
    resetGame();
  }
  if(event.target.getAttribute('id') === 'resetTournamentButton'){
    resetTournament();
  }
  if(event.target.getAttribute('id') === 'clearScore'){
    resetScore();
  }
};

var createBoard = function(){
  for(var i = 0; i < 6; i++){
    var tr = $('<tr>');
    gameBoard.append(tr);
    for (var j = 0; j < 7; j++){
      var td = $('<td>');
      tr.append(td);
      var standardPiece = $('<div>');
      standardPiece.addClass('standardPiece');
      standardPiece.attr('color', '');
      td.append(standardPiece);
      openBoard[i].push(standardPiece);
    }
  }
};

var testTurn;
var openBoard = [[],[],[],[],[],[]];
var standardPieceOne = $('.standardPieceOne');
var moveSelectTable = $('table').first();
var pieceTitle = $('#pieceTitle');
var gameButton = $('.gameButton');
var turnResult = $('#turnResult');
var gameBoard = $('.gameBoard');
var num = 0;
var player1 = 'Player 1';
var player2 = 'Player 2';
var player1WinTally = $('#player1WinTally');
var player1LossTally = $('#player1LossTally');
var player2WinTally = $('#player2WinTally');
var player2LossTally = $('#player2LossTally');
var player1TournamentWinTally = $('#player1TournamentWinTally');
var player1TournamentLossTally = $('#player1TournamentLossTally');
var player2TournamentWinTally = $('#player2TournamentWinTally');
var player2TournamentLossTally = $('#player2TournamentLossTally');
var pOneWin = 0;
var pOneLoss = 0;
var pTwoWin = 0;
var pTwoLoss = 0;
var ptOneWin = 0;
var ptOneLoss = 0;
var ptTwoWin = 0;
var ptTwoLoss = 0;

createBoard();
var tablePiece = $('table>tr>td>div');
gameButton.on('click', buttonLogic);

