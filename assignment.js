// Problem:1 radianToDegree Start
function radianToDegree(radian){
    //Enter a number
    if(typeof radian !== "number"){
    return "Wrong Input";
    }
    //Radian to Degree Convert
    const degree = radian * 57.296; // 1 radian equals 57.296°
    //Returning Degree
    return degree.toFixed(2);
    }
    // Problem:1 radianToDegree End
    // Problem:2 isJavaScriptFile Start
    function isJavaScriptFile(fileName){
    //Enter a string
    if(typeof fileName !== "string"){
    return "Wrong Input";
    }
    // EndsWith Checking
    let jsFile = fileName.endsWith(".js");
    // Returning jsFile
    return jsFile;
    }
    // Problem:2 isJavaScriptFile End
    // Problem 3: oilPrice Start
    function oilPrice(diesel, petrol, octane){
    //Enter a number
    if(typeof diesel!== "number" || typeof petrol!== "number" || typeof octane!== "number"){
    return "Wrong Input";
    }
    // Disel Price 114, Petrol Price 130, Octane Price 135
    totalDieselPrice = diesel * 114;
    totalPetrolPrice = petrol * 130;
    totalOctanePrice = octane * 135;
    // Total of diesel, petrol, octane
    let totalCost = totalDieselPrice + totalOctanePrice + totalPetrolPrice;
    // Returning Total Cost
    return totalCost;
    }
    // Problem 3: oilPrice End
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
    // Problem 5: isBestFriend Start
    function isBestFriend(friend1, friend2){
    //Enter a object
    if(typeof friend1 !== "object" || typeof friend1 !== "object"){
    return "Wrong Input";
    }
    //Checking object --> name to object --> friend
    if(friend1.name.toLowerCase() === friend2.friend.toLowerCase()){
    //Returning True
    return true;
    }
    else{
    //Returning False
    return false;
    }
    }
    // Problem 5: isBestFriend End

    let file = isJavaScriptFile("appa.jds");
    console.log(file);
