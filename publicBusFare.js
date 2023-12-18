// Problem 4: publicBusFare Start

function publicBusFare(person){

     //Enter a number
     if(typeof person !== "number"){

        return "Wrong Input";
        
    }
    
    //Bus Seat 50 
    const bus = 50;
    //Micro Seat 50 
    const micro = 11;
    const totalBusPerson = person % bus;
    const totallMicroPerson = totalBusPerson % micro;
    //Local Bus Fare 250 Multiply Remaining Person
    const busFare = totallMicroPerson * 250;

     //Returning BusFare
    return busFare;

    

}

// Problem 4: publicBusFare Start End

const p = publicBusFare(365);
console.log(p);