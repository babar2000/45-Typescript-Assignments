function order_sandwich(...items) {
    console.log("Sandwich order summary:");
    console.log("Bread:Whole Wheat");
    console.log("Items:");
    for (let i = 0; i < items.length; i++) {
        console.log(items[i]);
    }
    console.log("Enjoy your sandwich");
    console.log();
}
order_sandwich("Cheese", "Tomotto", "Garlic");
order_sandwich("Tikka", "Mustard");
order_sandwich("Pickles", "Mayonese", "Sauces", "Supreme");
export {};
