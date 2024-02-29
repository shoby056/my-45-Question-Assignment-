var guestList = ["Sir Zia", "Sir Imran", "Sir Hamza"];
console.log("We find a bigger dinner table.");
guestList.unshift("Sir Daniyal");
guestList.splice(2, 0, "Kamran Tessori sahb");
guestList.push("Muhammad Shoaib");
for (var i = 0; i < guestList.length; i++) {
    var message = guestList[i];
    console.log(message, "You are cardialy invited to dinner");
}
