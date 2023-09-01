let current_users:string[]=["ali","ahmad","moin","sami","taqi","zain"];
let new_users:string[]=["shani","ahmad","ali","amir","mani"];
for(let i=0;i<new_users.length;i++){
    let is_username_taken:boolean=current_users.some((current_users)=>
    current_users.toLocaleLowerCase()===new_users[i].toLocaleLowerCase()
    );
if(is_username_taken){
    console.log(`The username ${new_users[i]} is not available, need to enter a new username`);
} else{
    console.log(`The username ${new_users[i]} is available`);
}
}