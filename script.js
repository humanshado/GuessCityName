// Define variables
var trials;
var randNumber;
var arr = [ "Kabul","Tirana","Algiers","Andorra","Luanda","Yerevan","Canberra","Vienna","Baku","Nassau", "Lagos", "Abuja", "Kano", "Zaria", "Warri", "Minna", "Saminaka", "Kauru", "Malunfashi", "Ife", "Ibadan"];
var randCity = "";
var kbdElement;
var cityDOM = document.getElementById('boxes');
var goButton = document.getElementById('goButton');
var resetButton = document.getElementById('resetButton');

//Functions
function resetBoxes(){
    for(let i=0;i<=randCity.length-1;i++){
      cityDOM.childNodes[i].textContent = "";
      cityDOM.childNodes[i].classList.remove('correct', 'wrong');
    }//for-loop
}//resetBoxes

function removeBoxes(){
  //Remove existing boxes from the DOM if any
  while (cityDOM.hasChildNodes()) {
    cityDOM.removeChild(cityDOM.firstChild);
  }
}

function generateBoxes(){
    removeBoxes();

    //Ramdomly pick a city from array
    randNumber = Math.floor(Math.random()*arr.length);
    randCity = arr[randNumber];

    // Create boxes equal to the length of the city name and insert city name characters in each box
    for(let i=0; i<=randCity.length-1;i++){
      var box = document.createElement('div');
      box.classList.add('box');
      cityDOM.append(box);
      var kbdElement = document.createElement('kbd');
      kbdElement.innerHTML = randCity[i].toUpperCase();
      box.append(kbdElement);
    }
}

function matchFound(j){
  openhat.currentTime = 0;
  openhat.play();
  cityDOM.childNodes[j].classList.add('correct');
}

function noMatch(j){
  kick.currentTime = 0;
  kick.play();
  cityDOM.childNodes[j].classList.add('wrong');
}


        //if there is a match, animate the box with green border and make 'openhat' sound
        //else animate box with red border and make a 'kick' sound.



//Randomly show few characters of the city name
    //if city name is less than four charactes, show 1 character
    //if characters is 4 or 5, show 2 characters
    //if characters is 6 or more, show three.
//Match character entered by user
  //place cursor on 1st empty box
  //if user enters a character, reduce noOfTrials by 1 and check of noOfTrials !=== 0;
      //if noOfTrials === 0, End Game
      //Else
        //compare with corresponding character in the city name if there is a match, play 'openhat' sound and show the character in the box
        //else play 'kick' sound and reduce noOfTrials by 1

window.onload = function(){

    generateBoxes();

    // Assign no of trials = cityName.length+2
    trials = randCity.length + 2;

    goButton.addEventListener('click', generateBoxes);
    resetButton.addEventListener('click', resetBoxes);

    //Capture users keyboard press and compare with first letter of randCity
    this.addEventListener('keydown', function(e){
        const kick = document.getElementById('kick');
        const openhat = document.getElementById('openhat');

        console.log(cityDOM.firstChild);
        console.log(e);
        e.stopPropagation();

        // Subtract trials by 1
        trials--;
        //Create an array of characters from random city name
        var cityArr = randCity.split('');

        // while (trials>0) {
        //       for (let j = 0; j < randCity.length; j++) {
        //               if(e.key.toUpperCase() === cityArr[j].toUpperCase()){
        //                   matchFound(j);
        //               }else{
        //                   noMatch(j);
        //               }
        //       }//for-loop
        //   trials--;
        // }//while-loop

        while (trials>0) {
              for (let j = 0; j < randCity.length; j++) {
                   (function(x){
                     console.log(trials);
                      if(e.key.toUpperCase() === cityArr[x].toUpperCase()){
                        matchFound(x);
                      }else{
                          noMatch(x);
                      }
                    })(j);
              }//for-loop
          trials--;
        }//while-loop
  });//Event Listener

}//window onload
