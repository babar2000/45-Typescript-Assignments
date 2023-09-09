function carDetail(manufacturer, modelName, ...keywords) {
    let carInfo = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (let i = 0; i < keywords.length; i += 2) {
        const key = keywords[i];
        const value = keywords[i + 1];
        carInfo[key] = value;
    }
    return carInfo;
}
let car = carDetail("Honda", "Civic", "Color", "Tafeeta White", "Model", 2023);
console.log(car);
export {};
