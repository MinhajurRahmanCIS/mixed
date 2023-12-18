// Problem:2  isJavaScriptFile Start

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

// Problem:2  isJavaScriptFile End

let file = isJavaScriptFile("app.js");
console.log(file);

