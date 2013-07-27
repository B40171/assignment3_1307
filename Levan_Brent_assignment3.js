//alert("JavaScript works!");

//Brent Levan
//Project 3
//SDI 1307
//Methods, Properties, and JSON

var select = " Please select ";
var numberOfplayers =[1,2];
var tires = "tires";
var suspension = "suspension";
var lapsRemaining =5;
console.log (select + "number of players.");
console.log ("number of players selected is " + numberOfplayers[1]);

console.log("Player " + numberOfplayers[0] + select + "your vehicle.");

var carDescription = {
    
    "make": [" Ford "," Chevy "," Dodge "],
    "color":[" Red "," Blue "," green "," yellow "],
    "Transmission":[" automatic "," standard "],
    
    "selection": function(){ // method accessor 
                
        var selection1 = this.make[0] + this.color[2] + this.Transmission[0];
        return selection1;
        
    },
    
    };// end of carDescription object

    console.log("Player " + numberOfplayers[0] + " has selected " + carDescription.selection());

    console.log("Player " + numberOfplayers[1]+ select + "your vehicle.");
    
;

var carDescription = {
    
    "make": [" Ford "," Chevy "," Dodge "],
    "color":[" Red "," Blue "," green "," yellow "],
    "Transmission":[" automatic "," standard "],
    
    "selection": function(){ // method accessor 
        
        
        var selection1 = this.make[1] + this.color[3] + this.Transmission[1];
        return selection1;
        
    },//end of selection method
        
    }// end of carDescription object

    console.log("Player " + numberOfplayers[1] + " has selected " + carDescription.selection());

;

var upgrades ={
    
    "upgrade1": "tires",
    "upgrade2": "suspension",
    "upgrade3":["injectors"," supercharger"],
    "upgrade4":"transmission",
    
    "totalUpgrades": function(){
        
        var totalPackage = this.upgrade1 + " , " + this.upgrade3;
        return totalPackage;
    },
    
    "newPackage": function(totalPackage1){
    
        this.upgrade1 = totalPackage1;

    }

    }

    console.log("Player " + numberOfplayers[0] + " upgraded " + upgrades.totalUpgrades());

    upgrades.newPackage(" motor ");

    console.log("player " + numberOfplayers[1] + " upgraded " + upgrades.totalUpgrades());

;

console.log("We're Ready to race!");

var lapsLeft = function(numberOfLaps) {
    
    while (numberOfLaps >=3) {
        console.log(numberOfLaps + " laps left to go, player " + numberOfplayers[1] + "is in the lead.");
      
        almostDone = numberOfLaps --;
    
        }
    
        console.log(numberOfLaps + " laps left to go, player " + numberOfplayers[0] + "is in the lead.")
        console.log("The race is over!");
        return almostDone;
    
};

         lapsLeft(lapsRemaining);

    console.log("Player " + numberOfplayers[0] + " won the race!");
    
;


var raceInfo = {
    
    "race": [
        {
            "raceResults": "Player 1 won",
            "playAgain": true,
            "timeRemaining": 20
            
        },
        {
            "raceResults": "Player 2 won",
            "playAgain": false
            
        }
        
        
        
        
    ]
    
}


for (var key in raceInfo.race) {
    if (raceInfo.race[key].raceResults == "Player 1 won") {
        console.log("You have won the Race, play again?")
        
     } else {
        console.log("Are you sure you want to quit?")
        if (raceInfo.race[key].playAgain == true) {
            console.log("Please press start to continue.")
        } else {
            console.log("you have 30 seconds seconds left to pick.");
        }
    }
}

