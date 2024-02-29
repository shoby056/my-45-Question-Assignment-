var guestList = ["Sir Zia", "Sir Imran", "Sir Hamzah", "Sir Daniyal", "Sir Arif Alvi"];
console.log("Unfortunately We are invited only two peoples");
while (guestList.length > 2) {
    var dltGuest = guestList.pop();
    console.log("Sorry", dltGuest, "We won't be able to invite you");
}
for (var i = 0; i < guestList.length; i++) {
    var message = guestList[i];
    console.log("cpngrats", message, "you are still invited");
}
guestList = [];
console.log(guestList);
