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

const number = radianToDegree(199);
console.log(""+number)