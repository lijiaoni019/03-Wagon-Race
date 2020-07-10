const red = document.getElementById("player1_race");
const blue =  document.getElementById("player2_race");
const buttom = document.getElementById("buttom");
const gameResult = document.getElementById("gameResult");
const restart = () => {document.location.reload()};
const line = document.getElementById("line");
const arrayRed = [];
const arrayBlue = [];

const listnerRed = document.addEventListener ("keyup", event => { console.log(event.keyCode); 
	if(event.keyCode ===65 && arrayRed.length <28) { 
		red.insertAdjacentHTML("afterbegin", "<td></td>");
		gameResult.innerText = "🚂🚂GO GO GO🚂🚂"; 
		arrayRed.push(1);} 
	if(event.keyCode ===76 && arrayBlue.length <28) {
		blue.insertAdjacentHTML("afterbegin", "<td></td>");
		gameResult.innerText = "🚂🚂GO GO GO🚂🚂"; 
		arrayBlue.push(1);} 
	if(arrayRed.length >= 28) {if (arrayBlue.length <28) {
		gameResult.innerText = "🎊🎊CONGRATS🎊🎊\nWinner is 🏆RED🏆";
		gameResult.style.color = `red`; 
		line.style.width = `5px`} if (arrayBlue.length =28) {return;}}
	if(arrayBlue.length >= 28) {if (arrayRed.length <28) {
		gameResult.innerText = "🎊🎊CONGRATS🎊🎊\nWinner is 🏆 Blue🏆";
		gameResult.style.color = `#14b1ab`; 
		line.style.width = `5px`} if (arrayRed.length =28) {return;}}
	})


buttom.addEventListener ("click", event => {restart()});

// const winner =() => {if (arrayRed.length === 6) {gameResult.innerText = "CONGRATS! ! !,RED are the Winner";}
// else if (arrayBlue.length === 6) {gameResult.innerText = "CONGRATS! ! !,Blue are the Winner";} };

// const numberofRed = red.getElementsByTagName('td').length;
// const numberofBlue = blue.getElementsByTagName('td').length;
// const winner =() => {if (numberofRed === 6) {gameResult.innerText = "CONGRATS! ! !,RED are the Winner";}}






