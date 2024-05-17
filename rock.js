    let score = JSON.parse(localStorage.getItem('score')) ||
    {
      wins: 0,
      loses: 0,
      ties: 0
    };
     
    updateScoreEl();

    function playGame(playerMove){
      const computerMove = pickComputerMove();

      let result = '';
      if(playerMove==='scissors'){
      if(computerMove === 'rock'){
        result = 'You Lose.';
      }else if(computerMove === 'paper'){
        result = 'You Win.'
      }else if (computerMove ==='scissors'){
        result = 'Tie.'
      }
    }else if(playerMove ==='paper'){
      if(computerMove === 'rock'){
        result = 'You Win.';
      }else if(computerMove === 'paper'){
        result = 'Tie.'
      }else if (computerMove ==='scissors'){
        result = 'You Lose.'
      }
    }else if(playerMove==='rock'){
      if(computerMove === 'rock'){
        result = 'Tie.';
      }else if(computerMove === 'paper'){
        result = 'You Lose.'
      }else if (computerMove ==='scissors'){
        result = 'You Win.'
      }
    }

    if(result ==='You Win.'){
      score.wins +=1;
    }else if(result ==='You Lose.'){
      score.loses +=1;
    }else if(result ==="Tie."){
      score.ties +=1;
    }

    localStorage.setItem('score',JSON.stringify(score));

     updateScoreEl();
   
     document.querySelector('.js-result').innerHTML = result;

     document.querySelector('.js-moves').innerHTML =` You
     <img src="${playerMove}-emoji.png" class="icon">.
     Computer
     <img src="${computerMove}-emoji.png" class="icon">.`;

    }
    function updateScoreEl(){
      document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
    }

    function pickComputerMove(){
      const randomanumber = Math.random();
      

      if(randomanumber >=0 && randomanumber<1/3){
        computerMove = 'rock';
      }else if(randomanumber >=1/3 && randomanumber < 2/3){
        computerMove = 'paper';
      }else if(randomanumber >=2/3 && randomanumber < 1){
          computerMove = 'scissors';
      }
      return computerMove;
    }