function make_album (artistname:string,albumtitle:string,tracks:number){
    return(`${artistname},${albumtitle},${tracks}`)
}
let album1:string=make_album("The Beatles","Sgt. Peppers Lonely Hearts Club Band",15);
let album2:string=make_album("Pink Floyd","The Dark Side of the Moon",12);
let album3:string=make_album("Michael Jackson","Thriller",10);

console.log(album1);
console.log(album2);
console.log(album3);