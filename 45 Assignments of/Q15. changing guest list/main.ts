var guestList=["Sir Zia","Sir Hamza","Sir Daniyal Nagori"];
var notAttend=guestList[1] ="Sir Hamza";
console.log("Unfortunately ",notAttend,"is unable to atttend dinner");
guestList[1]="Sir Ameen Alam";
for(var i=0;i<guestList.length;i++){
    var guests=guestList[i]
    console.log(guests,"you are invited to dinner");
}
