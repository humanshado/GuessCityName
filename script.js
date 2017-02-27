// Define variables: trials, count = 0, array of cities
var trials;
var count = 0;
var randNumber;
var arr = [ "Kabul","Tirana","Algiers","Andorra","Luanda","Yerevan","Canberra","Vienna","Baku","Nassau" ]
var usedArr = [];
var randCity = "";

//Ramdomly pick a city from array
randNumber = Math.floor(Math.random()*arr.length);
randCity = arr[randNumber];

    // assign noOfTrials = cityName.length+2
    trials = randCity.length + 2;
    var cityDOM = document.getElementById('boxes');

    // create boxes equal to the length of the city name and insert city name characters in each box
    for(i=0; i<=randCity.length;i++){
      var box = document.createElement('div');
      box.classList.add('box');
      cityDOM.append(box);


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
