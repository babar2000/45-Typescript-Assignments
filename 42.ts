function show_magicians (magicians:string[]):void{
    for(let i=0;i<show_magicians.length;i++){
        console.log(magicians[i]);
    }
    function make_great(magicians:string[]):void{
        for (let i=0;i<make_great.length;i++){
            magicians[i]=magicians[i]+"the Great";
        }
    }
let magician_names:string[]=["ali","ahmad","nomi","Taqi"]
make_great(magician_names);
console.log(magician_names);
}