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

let f1 = {
    name: "AbuL",
    friend : "BAbul"
}
let f2 = {
    name: "BabuL",
    friend : "ABul"
}

let friends = isBestFriend(f1, f2);
console.log(friends);