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

var upgrades = function(upgrade1,upgrade2){
    
    for (var i=0, a=1; i<a; i++) {

        console.log("Player " + numberOfplayers[0] + " upgraded " + upgrade1[i] + " and " + upgrade2[i]);
    
    };
   
    return upgrades;

};

var readyToRace = upgrades(["tires"],["suspension"]);

;

var lapsLeft = function(numberOfLaps) {
    
    while (numberOfLaps >0) {
        console.log(numberOfLaps + " laps left to go.");
    
        almostDone = numberOfLaps --;
    
    };
    
        console.log("The race is over!");
        return almostDone;
    
};

         lapsLeft(lapsRemaining);

 console.log("Player " + numberOfplayers[0] + " won the race!");
    
;

