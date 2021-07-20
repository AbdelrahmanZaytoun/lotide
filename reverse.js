

let  args= process.argv

function hey (){

    var newString = "";
    for (var i = args.length - 1; i >= 0; i--) {
        newString += args[i];
    }
    return newString;

 } console.log(hey())