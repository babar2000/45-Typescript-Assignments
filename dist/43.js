function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let modifiedMagicians = [];
    for (let magician of magicians) {
        modifiedMagicians.push(magicians + "the Great");
    }
    return modifiedMagicians;
}
let magicianNames = ["ali", "nomi", "ahmad", "raza"];
let modifiedMagiciansNames = make_great([...magicianNames]);
console.log("Original Magicians");
show_magicians(magicianNames);
console.log("Modified Magicians");
show_magicians(magicianNames);
export {};
