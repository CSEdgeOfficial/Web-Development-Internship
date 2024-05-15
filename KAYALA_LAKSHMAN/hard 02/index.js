var currentPlayer = "X"; 
var c = 0;
function startGame() {
    for (var i = 0; i < document.body.querySelectorAll("button").length; i++) {
        document.body.querySelectorAll("button")[i].addEventListener("click", function () {
            playSound();
            if (this.value == "NULL") {
                this.value = currentPlayer;
                this.innerHTML = currentPlayer;
                c++;
                if(this.value === document.body.querySelector(".button1").value && this.value === document.body.querySelector(".button2").value && this.value ===  document.body.querySelector(".button3").value)
                {
                document.body.querySelector("h1").innerHTML = `player ${currentPlayer} 🥳🎉 win`;
                setTimeout(() => {
                    location.reload();
                }, 1000);
                }else if(this.value === document.body.querySelector(".button1").value && this.value === document.body.querySelector(".button4").value && this.value ===  document.body.querySelector(".button7").value){

                document.body.querySelector("h1").innerHTML = `player ${currentPlayer} 🥳🎉 win`;
                setTimeout(() => {
                    location.reload();
                }, 1000);
                }else if(this.value === document.body.querySelector(".button7").value && this.value === document.body.querySelector(".button8").value && this.value ===  document.body.querySelector(".button9").value){

                document.body.querySelector("h1").innerHTML = `player ${currentPlayer} 🥳🎉 win`;
                setTimeout(() => {
                    location.reload();
                }, 1000);
                }
                else if(this.value === document.body.querySelector(".button3").value && this.value === document.body.querySelector(".button6").value && this.value ===  document.body.querySelector(".button9").value){

                document.body.querySelector("h1").innerHTML = `player ${currentPlayer} 🥳🎉 win`;
                setTimeout(() => {
                    location.reload();
                }, 1000);
                }
                else if(this.value === document.body.querySelector(".button1").value && this.value === document.body.querySelector(".button5").value && this.value ===  document.body.querySelector(".button9").value){

                document.body.querySelector("h1").innerHTML = `player ${currentPlayer} 🥳🎉 win`;
                setTimeout(() => {
                    location.reload();
                }, 1000);
                }
                else if(this.value === document.body.querySelector(".button3").value && this.value === document.body.querySelector(".button5").value && this.value ===  document.body.querySelector(".button7").value){

                document.body.querySelector("h1").innerHTML = `player ${currentPlayer} 🥳🎉 win`;
                setTimeout(() => {
                    location.reload();
                }, 1000);
                }
                else if(this.value === document.body.querySelector(".button2").value && this.value === document.body.querySelector(".button5").value && this.value ===  document.body.querySelector(".button8").value){

                document.body.querySelector("h1").innerHTML = `player ${currentPlayer} 🥳🎉 win`;
                setTimeout(() => {
                    location.reload();
                }, 1000);
                }
                else if(this.value === document.body.querySelector(".button4").value && this.value === document.body.querySelector(".button5").value && this.value ===  document.body.querySelector(".button6").value){

                document.body.querySelector("h1").innerHTML = `player ${currentPlayer} 🥳🎉 win`;
                setTimeout(() => {
                    location.reload();
                }, 1000);
                }else if(c == 9){
                    document.body.querySelector("h1").innerHTML = `Its a draw`;
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                }
                
                console.log(currentPlayer);
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                
            }
        });
    }
}
startGame();

function playSound(){
            var audio = new Audio("./buttonSound.mp3");
            audio.play();
}
function gameCompleted(){
    var audio  = Audio("./gameWon.mp3");
    audio.play();
}