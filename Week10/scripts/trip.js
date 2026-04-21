// Variables -----------------------------------------------

const driver_name = "Keaten";

let distance_miles = 353;
const mpg = 28;
const gas_price = 3.90;
const fuel_capcity = 14;
let is_round_trip = true;

let total_distance;

// Calculations ------------------------------------------

if (is_round_trip === true){
    total_distance = distance_miles * 2;
} else {
    total_distance = distance_miles;
}

console.log("Total distance: " + total_distance + " miles");

// Functions ---------------------------------------------

function calculateGallonsNeeded(total_distance, mpg) {
    return total_distance / mpg;
}

function calculateFuelCost(gallons, gas_price) {
    return gallons * gas_price;
}

// Derive Calculations ---------------------------------------

const gallons_needed = calculateGallonsNeeded(total_distance, mpg);
const fuel_cost = calculateFuelCost(gallons_needed, gas_price);
const miles_per_tank = mpg * fuel_capcity;

let miles_traveled = miles_per_tank;
let stops_needed = 1;
let running_cost = calculateFuelCost(fuel_capcity, gas_price);

// Gas Stop Loop --------------------------------------------

console.log("Gas Stop -----")

while (miles_traveled < miles_per_tank) {
    console.log(`Stop ${stops_needed}:`);
    console.log(`Miles travled so far: ${miles_traveled} miles`);
    console.log(`Running gas cost: $${running_cost.toFixed(2)}`);
    console.log("----------------------");
    }

// Final Summary --------------------------------------------

console.log("-----Road Trip Summary-----");
console.log("Driver Name: ", driver_name);
console.log(`Total distance: ${total_distance} miles`);
console.log(`Estimated gallons needed: ${gallons_needed.toFixed(2)} gallons`);
console.log(`Estimated fuel cost: $${fuel_cost.toFixed(2)}`);