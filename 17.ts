let guestList:string[]=["ali","nomi","sami"];

let guestCantMakeIt:string=guestList[2];
console.log(`${guestCantMakeIt} can't make it to the dinner`);

const newGuest:string="ahmad";
guestList[2]=newGuest;

const message:string="I found a bigger dining table for dinner";
console.log(message);
guestList.unshift("umair");
let addGuest=guestList.splice(2,0,"imran");
guestList.push("amir");


for(let i=0;i<guestList.length;i++)
console.log(`${guestList[i]}, I would like to invite you to a dinner`);

const newMessage:string="I can invite only two people for the dinner";
const removeGuest=guestList.pop();
console.log(`${removeGuest}, I am really sorry that i can't invite you to the dinner`);
guestList.pop();

console.log(`${removeGuest}, I am really sorry that i can't invite you to the dinner`);
guestList.pop();

console.log(`${removeGuest}, I am really sorry that i can't invite you to the dinner`);
guestList.pop();

console.log(`${removeGuest}, I am really sorry that i can't invite you to the dinner`);
guestList.pop();
console.log(`Dear${guestList}, you are still invited to the dinner`);
guestList.pop();
guestList.pop();
console.log(guestList);
