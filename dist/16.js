let guestList = ["ali", "nomi", "sami"];
let guestCantMakeIt = guestList[2];
console.log(`${guestCantMakeIt} can't make it to the dinner`);
const newGuest = "ahmad";
guestList[2] = newGuest;
const message = "I found a bigger dining table for dinner";
console.log(message);
guestList.unshift("umair");
let addGuest = guestList.splice(2, 0, "imran");
guestList.push("amir");
for (let i = 0; i < guestList.length; i++)
    console.log(`${guestList[i]}, I would like to invite you to a dinner`);
export {};
