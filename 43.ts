function show_magicians(magicians:string[]):void{
    for (let magician of magicians){
        console.log(magician)
    }
}

function make_great(magicians:string[]){
    let modifiedMagicians:string[]=[];
    for(let magician of magicians){
        modifiedMagicians.push(magicians + "the Great");
    }
    return modifiedMagicians;
}
let magicianNames:string[]=["ali","nomi","ahmad","raza"];
let modifiedMagiciansNames:string[]=make_great([...magicianNames]);
console.log("Original Magicians");
show_magicians(magicianNames);
console.log("Modified Magicians");
show_magicians(magicianNames);