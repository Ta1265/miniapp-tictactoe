(() => {

  class Board {
    constructor() {
      this.plays = 0;
      this.turnX = true;
      this.boxes = [...document.getElementsByClassName('row')].map((row) => {
        return[...row.children].map(col =>  {
            return col;
            }, []);
        }, []);
      document.addEventListener('click', ()=>{this.handleClick(event)})
    }

    handleClick(event) {
      if(event.target.id === 'reset') {
        return this.reset();
      }
      if(event.target.innerHTML !== ''){
        return alert('No cheating');
      }
      event.target.innerHTML = this.turnX ? 'X' : 'O';
      this.turnX = !this.turnX;
      this.plays++;
      console.log(this.plays);
      this.checkWin(event.target)
      this.plays === 9 ? this.handleDraw() : null;
    }

    reset() {
      this.boxes.forEach(row => row.forEach(b => b.innerHTML = ''));
      this.turnX = true;
      this.plays = 0;
    }

    handleDraw() {
      alert('DRAW no winner');
      this.reset();
    }

    checkWin(box) {
      const checks = [this.check_row, this.check_col, this.check_diag];
      if(checks.filter(f=>f(box))[0]){
        setTimeout(()=>{ //set timeout to render the final play before alerting
          alert(`${this.turnX?'O':'X'}'s WIN`)
          this.reset();
        }, 10);
      }
      return false;
    }

    /*
     * checker functions
    */
    check_row(box) {
      var count = 0;
      [...box.parentElement.children]
        .forEach((b) => { b.innerHTML === box.innerHTML ? count++ : null; });
      return count === 3 ? true : false;
    }

    check_col(box) {
      var count = 0;
      [...document.getElementsByClassName('row')]
        .forEach((row) => {
          [...row.children]
            .forEach((b) => {
              if(b.id === box.id && b.innerHTML === box.innerHTML) {
                count++;
              }
            })
        });
      return count === 3 ? true : false;
    }

    check_diag(box) {
      const boxes = [...document.getElementsByClassName('row')]
        .map((row) => {
          return[...row.children].map(col =>  {
              return col.innerHTML === box.innerHTML ? 0 : 1;
              }, []);
          }, []);
      //right upper diag
      console.log(boxes);
      for(var j = 0; j < boxes.length; j++){
        let i = 0;
        let J = j;
        let count = 0;
        while(J < boxes.length) {
          if(boxes[i][J] === 0) { count++; }
          i++;
          J++;
        }
        if(count === 3) {
          console.log('right upper diag found');
          return true;
        }
      }
      //right lower diag
      for(var i = 0; i < boxes.length; i++){
        let j = 0;
        let I = i;
        let count = 0;
        while(I < boxes.length) {
          if(boxes[I][j] === 0) { count++ ;}
          j++;
          I++;
        }
        if(count === 3) {
          console.log('right lower diag found');
          return true;
        }
      }
      //left upper diag
      for(var j = boxes.length-1; j >= 0; j--) {
        let i = 0;
        let J = j;
        let count = 0;
        while(J >= 0) {
          if(boxes[i][J] === 0) { count++ };
          i++;
          J--;
        }
        if(count === 3) {
          console.log('left upper diag found');
          return true;
        }
      }
      //left lower diag
      for(var i = 0; i < boxes.length; i++) {
        let j = 2;
        let I = i;
        let count = 0;
        while(I < boxes.length) {
          if(boxes[I][j] === 0) { count++; }
          j--;
          I++;
        }
        if(count === 3) {
          console.log('left lower diag found');
          return true;
        }
      }
      return false;
    }
  }


  let board = new Board();








// initial functional approach bellow


  /*
   * Bool to keep track of whos turn it is
  */
  // let turnX = true;
  // let plays = 0;
  /*
   * Grab elements
  */
  // const boxes = [...document.getElementsByClassName('col')]
  // boxes.forEach(box => box.addEventListener("click", ()=>handleClick(box)));
  // document.getElementById('reset').addEventListener('click', resetClick);


  /*
   * click controllers
  */
  // function handleClick(box) {
  //   console.log(box.id,' was clicked');
  //   if(box.innerHTML !== '') {
  //     return alert('No cheating');
  //   }
  //   box.innerHTML = turnX ? 'X' : 'O';
  //   turnX = !turnX;
  //   if(plays >= 4) {
  //     checkWin(box);
  //   }
  //   plays++;
  //   console.log(plays);
  //   if(plays >= 9) {
  //     alert('DRAW no winner')
  //     return resetClick();
  //   }

  // };

  // function resetClick() {
  //   console.log('reset clicked');
  //   boxes.forEach(b => b.innerHTML = '');
  //   turnX = true;
  //   plays = 0;
  // };



  /*
   * methods to check for a winner
  */
  // function checkWin(box) {
  //   let winner = false;
  //   if(check_row(box)) {
  //     winner = true;
  //   }
  //   if(check_col(box)) {
  //     winner = true;
  //   }
  //   if(check_diag(box)){
  //     winner = true;
  //   }
  //   if(winner){
  //     setTimeout(()=>{ //set timeout to render the final play before alerting
  //       alert(`${turnX?'O':'X'}'s WIN`)
  //       resetClick();
  //     }, 10);
  //   }
  // };

  // function check_row(box) {
  //   var count = 0;
  //   [...box.parentElement.children]
  //     .forEach((b) => { b.innerHTML === box.innerHTML ? count++ : null; });
  //   console.log(count);
  //   return count === 3 ? true : false;
  // }

  // function check_col(box) {
  //   var count = 0;
  //   [...document.getElementsByClassName('row')]
  //     .forEach((row) => {
  //       [...row.children]
  //         .forEach((b) => {
  //           if(b.id === box.id && b.innerHTML === box.innerHTML) {
  //             count++;
  //           }
  //         })
  //     });
  //   return count === 3 ? true : false;
  // }

  // function check_diag(box) {
  //   const boxes = [...document.getElementsByClassName('row')]
  //     .map((row) => {
  //       return[...row.children].map(col =>  {
  //           return col.innerHTML === box.innerHTML ? 0 : 1;
  //           }, []);
  //       }, []);
  //   //right upper diag
  //   console.log(boxes);
  //   for(var j = 0; j < boxes.length; j++){
  //     let i = 0;
  //     let J = j;
  //     let count = 0;
  //     while(J < boxes.length) {
  //       if(boxes[i][J] === 0) { count++; }
  //       i++;
  //       J++;
  //     }
  //     if(count === 3) {
  //       console.log('right upper diag found');
  //       return true;
  //     }
  //   }
  //   //right lower diag
  //   for(var i = 0; i < boxes.length; i++){
  //     let j = 0;
  //     let I = i;
  //     let count = 0;
  //     while(I < boxes.length) {
  //       if(boxes[I][j] === 0) { count++ ;}
  //       j++;
  //       I++;
  //     }
  //     if(count === 3) {
  //       console.log('right lower diag found');
  //       return true;
  //     }
  //   }
  //   //left upper diag
  //   for(var j = boxes.length-1; j >= 0; j--) {
  //     let i = 0;
  //     let J = j;
  //     let count = 0;
  //     while(J >= 0) {
  //       if(boxes[i][J] === 0) { count++ };
  //       i++;
  //       J--;
  //     }
  //     if(count === 3) {
  //       console.log('left upper diag found');
  //       return true;
  //     }
  //   }
  //   //left lower diag
  //   for(var i = 0; i < boxes.length; i++) {
  //     let j = 2;
  //     let I = i;
  //     let count = 0;
  //     while(I < boxes.length) {
  //       if(boxes[I][j] === 0) { count++; }
  //       j--;
  //       I++;
  //     }
  //     if(count === 3) {
  //       console.log('left lower diag found');
  //       return true;
  //     }
  //   }
  //   return false;
  // }




















})();