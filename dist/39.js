function city_country(city, country) {
    return (`"${city},${country}"`);
}
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("Istambol", "Turkey");
let city3 = city_country("Newyork", "America");
console.log(city1);
console.log(city2);
console.log(city3);
export {};
