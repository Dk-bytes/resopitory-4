
var startButton = document.getElementById("startButton");//variable startbutton defned
var music = document.getElementById("music");//variable music button defined
var seconds = 0;//variable seconds defined

function startButton() {// fuctio startButton
    if (seconds == 0) {//if var seconds = 0
        seconds = 1;
    }
}

//make function for Initial
function Initial() {  // when start button is pressed disable start
 
    document.getElementById("startButton").disabled = true;
  
    //when stop button is enabled
    document.getElementById("stopButton").disabled = false;
    
  }


//make function for halt
function halt() {
   
    document.getElementById("stopButton").disabled = true;
     //when start button is pressed enable stopelse statement
    
    document.getElementById("startButton").disabled = false;
    }

//make Chief function
function Chief() {//link audio to fuction
    mySound = new sound("hail_to_the_chief.mp3")// data structure,create new sound
    mySound.play();// play mySound
}

//make audio function
function sound(src){// add play function
    this.sound = document.createElement("audio") ;//create audio
    this.sound.src = src;//define src
    this.play = function() {//music function
        this.sound.play();//play sound
    }
}


