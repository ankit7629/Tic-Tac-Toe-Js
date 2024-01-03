const inputBtn = document.querySelectorAll('#inp');

let xTurn = true;

inputBtn.forEach((el) => {
  el.addEventListener('click', () => {
    if(xTurn){
      xTurn = false;
      el.innerHTML = "X";
    }else{
      xTurn = true;
      el.innerHTML = "O"
    }
  })
})






















// let xTurn = true;

// inputBtn.forEach((el) => {
//   el.addEventListener('click', () => {
//    if(xTurn){
//     xTurn = false;
//     el.innerText = 'X';
//    }else{
//     xTurn = true;
//     el.innerText = 'O';
//     // el.disabled = true;
//    }
//   })
// });
