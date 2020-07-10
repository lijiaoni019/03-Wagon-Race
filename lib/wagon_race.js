const red = document.getElementById("player1_race");
const blue =  document.getElementById("player2_race");

document.addEventListener ("keyup", event => { console.log(event.keyCode);
	if(event.keyCode ===65) { 
		red.insertAdjacentHTML("afterbegin", "<td></td>");
}})

document.addEventListener ("keyup", event => { console.log(event.keyCode);
	if(event.keyCode ===76) {
		blue.insertAdjacentHTML("afterbegin", "<td></td>");
}})
