const red = document.getElementById("player1_race");
const blue =  document.getElementById("player2_race");
const buttom = document.getElementById("buttom");
const gameResult = document.getElementById("gameResult");
const restart = () => {document.location.reload()};
const arrayRed = [];
const arrayBlue = [];

document.addEventListener ("keyup", event => { console.log(event.keyCode); 
	if(event.keyCode ===65) { 
		red.insertAdjacentHTML("afterbegin", "<td></td>");
		gameResult.innerText = "🚂🚂GO GO GO🚂🚂"; 
		arrayRed.push(1);} 
	if(arrayRed.length >= 28) {
		gameResult.innerText = "🎉🎉CONGRATS🎉🎉 ❤Red❤are the Winner！！";
		gameResult.style.color = `red`; }
	})

document.addEventListener ("keyup", event => { console.log(event.keyCode);
	if(event.keyCode ===76) {
		blue.insertAdjacentHTML("afterbegin", "<td></td>");
		gameResult.innerText = "🚂🚂GO GO GO🚂🚂"; 
		arrayBlue.push(1);} 
	if(arrayBlue.length >= 28) {
		gameResult.innerText = "🎉🎉CONGRATS🎉🎉 Blue are the Winner！！"; 
		gameResult.style.color = `#14b1ab`; }
	}) 

buttom.addEventListener ("click", event => {restart()});
const pause =() => {if (arrayBlue.length > 28 || arrayRed.length > 28) {document("pause")}}

// const winner =() => {if (arrayRed.length === 6) {gameResult.innerText = "CONGRATS! ! !,RED are the Winner";}
// else if (arrayBlue.length === 6) {gameResult.innerText = "CONGRATS! ! !,Blue are the Winner";} };

// const numberofRed = red.getElementsByTagName('td').length;
// const numberofBlue = blue.getElementsByTagName('td').length;
// const winner =() => {if (numberofRed === 6) {gameResult.innerText = "CONGRATS! ! !,RED are the Winner";}}






