let guestList:string[]=["ali","nomi","sami"];

let guestCantMakeIt:string=guestList[2];
console.log(`${guestCantMakeIt} can't make it to the dinner`);

const newGuest:string="ahmad";
guestList[2]=newGuest;

for(let i=0;i<guestList.length;i++)
console.log(`${guestList[i]}, I would like to invite you to a dinner`);
