// function hey (arr){

// //     for (let i=arr.length-1;i>=arr.length;i--){
// //         console.log(arr[i])

// //     }


// // }

// // hey(["121",11213,121])


// // function reverseArray () {
// //     let arrayr= process.argv.slice(2)
// //     var newArr = "";
// //     for (var i = arrayr.length - 1; i >= 0; i--) { 
// //         newArr += arrayr[i]; // or newString = newString + str[i];
// //     }

// //     return newArr;
// // }
// // console.log(reverseArray());



// // for (var i = arrayr.length - 1; i >= 0; i--) { 
// //     newArr += arrayr[i]; // or newString = newString + str[i];
// // }


// // function reverseString() {
// //     let arrayr= process.argv.slice(2)

// //     // Step 1. Create an empty string that will host the new created string
// //     var newString = "";
 
// //     // Step 2. Create the FOR loop
// //     /* The starting point of the loop will be (str.length - 1) which corresponds to the 
// //        last character of the string, "o"
// //        As long as i is greater than or equals 0, the loop will go on
// //        We decrement i after each iteration */
// //     for (var i = arrayr.length-1 ; i >= 0; i--) { 
// //         newString += arrayr[i]; // or newString = newString + str[i];
// //     }
// //     /* Here hello's length equals 5
// //         For each iteration: i = str.length - 1 and newString = newString + str[i]
// //         First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
// //         Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
// //         Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
// //         Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
// //         Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
// //     End of the FOR Loop*/
 
// //     // Step 3. Return the reversed string
// //     return newString; // "olleh"
// // }
 
// // console.log(reverseString());



// function reverse(){  
//     let hey= process.argv.slice(2)
//     let reversed = "";      
//      for (var i = hey.length - 1; i >= 0; i--){         
//        reversed += hey[i];  
//      }     
//     return reversed; 
//   }

//   console.log(reverse())



// let array=[1,2,3,4,5,6]
//   let randomElement = array[Math.floor(Math.random() * array.length)];

// let manyTimes=[];
// let roller=3;


//   for (let i=0;i<roller;i++){
//       console.log(i)
//       manyTimes+=  randomElement +","
//   }


  let arg= process.argv
  function theDice (argv){

    // let array=[1,2,3,4,5,6]

    let manyTimes="";   

    for (let i=0; i<arg;i++){
        let randomElement=""
         randomElement = Math.floor((Math.random() * 6) + 1)

        console.log(i)
        manyTimes+=  randomElement +","
    }
    let lastComma= manyTimes.lastIndexOf(",")
    manyTimes = manyTimes.slice(0,lastComma)
    return manyTimes

  }

  theDice(arg)