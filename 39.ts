function city_country(city:string,country:string){
    return(`"${city},${country}"`)
}
let city1:string=city_country("Lahore","Pakistan");
let city2:string=city_country("Istambol","Turkey");
let city3:string=city_country("Newyork","America");

console.log(city1);
console.log(city2);
console.log(city3);