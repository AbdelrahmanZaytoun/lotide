

// var arr=['abracadabra']
// var str = arr.toString()

// let result = '';


// for (let letter of str) {
//   if (letter === "a"){
//       letter=4
//    }

//    else if (letter === "e"){
//     letter=3
//  }

//  else if (letter === "o"){
//     letter=0
//  }

//  else if (letter === "l"){
//     letter=1
//  }


//   result += letter
// }
// console.log(result)


//  wrong answer:

// let arr=process.argv.slice(2)
// let str=arr.toString()
// function obfuscate (str){

// let result= ""
// for (let letter of str) {
//     if (letter === "a"){
//         letter=4
//      }
  
//      else if (letter === "e"){
//       letter=3
//    }
  
//    else if (letter === "o"){
//       letter=0
//    }
  
//    else if (letter === "l"){
//       letter=1
//    }
//    else {result= str}
  
    
//   }
//   return result  += letter
// }

// obfuscate(str)



let arr=process.argv.slice(2)
let str=arr.toString()
function obfuscate (str){

let result= ""
for (let letter of str) {
    if (letter === "a"){
        letter=4
     }
  
     else if (letter === "e"){
      letter=3
   }
  
   else if (letter === "o"){
      letter=0
   }
  
   else if (letter === "l"){
      letter=1
   }
    {result+= letter}
  
    
  }
  console.log(result)
  return result  
}

obfuscate(str)