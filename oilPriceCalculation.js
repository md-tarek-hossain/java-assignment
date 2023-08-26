function oilPrice (diselQuantity, petrolQuantity, octanQuantity){
    let diselPrice = 114;
    let petrolPrice = 130;
    let octanPrice = 135;
    let totalCost = (diselQuantity * diselPrice) + (octanQuantity * octanPrice) + (petrolQuantity * petrolPrice)
    return totalCost
}
let disel = 2;
let petrol = 5;
let octan = 3;
let totalPrice = oilPrice (disel, petrol, octan);
console.log(totalPrice);
