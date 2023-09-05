function make_album(artistname, albumtitle, tracks) {
    return (`${artistname},${albumtitle},${tracks}`);
}
let album1 = make_album("The Beatles", "Sgt. Peppers Lonely Hearts Club Band", 15);
let album2 = make_album("Pink Floyd", "The Dark Side of the Moon", 12);
let album3 = make_album("Michael Jackson", "Thriller", 10);
console.log(album1);
console.log(album2);
console.log(album3);
export {};
