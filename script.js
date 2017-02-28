// Define variables: trials, count = 0, array of cities, etc.
var trials;
var count = 0;
var randNumber;
var arr = [ "Kabul","Tirana","Algiers","Andorra","Luanda","Yerevan","Canberra","Vienna","Baku","Nassau", "Lagos", "Abuja", "Kano", "Zaria", "Warri", "Minna"];
var oldArr = [];
var usedArr = [];
var randCity = "";
var kbdElement;
var cityDOM = document.getElementById('boxes');
var rButton = document.getElementById('rButton');
var gButton = document.getElementById('gButton');



// Assign no of trials = cityName.length+2
trials = randCity.length + 2;

function resetBoxes(){
    for(let i=0;i<=randCity.length-1;i++){
      cityDOM.childNodes[i].textContent = "";
    }
}

function removeBoxes(){
  //Remove existing boxes from the DOM boxes if any
  while (cityDOM.hasChildNodes()) {
    cityDOM.removeChild(cityDOM.lastChild);
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

    // while(trials >= 0){
    //
    //
    // }


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
  //let resetButton = document.getElementById('reset').addEventListener('click', resetBoxes());
  generateBoxes();

}
