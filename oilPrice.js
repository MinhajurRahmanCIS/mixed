// Problem 3: oilPrice Start

function oilPrice(diesel, petrol, octane){

    //Enter a number
    if(typeof diesel!== "number" || typeof petrol!== "number" || typeof octane!== "number"){

        return "Wrong Input";
        
    }

    totalDieselPrice = diesel * 114; 
    totalPetrolPrice = petrol * 130;
    totalOctanePrice = octane * 135;

    // Total of diesel, petrol, octane
    let totalCost = totalDieselPrice + totalOctanePrice + totalPetrolPrice;

    // Returning Total Cost
    return totalCost;

}

// Problem 3: oilPrice End


let liter = oilPrice(30, 20, 10);
console.log(liter);