
// //   var arr =[1, 2, 3, 4, 6,7,4,5,3,4];
  
// // //   var itisthemiddle = arr[Math.round((arr.length - 1) / 2)];
// //   var theMiddle = arr[Math.floor(arr.length / 2)];
// //   var prethemiddle=arr[Math.floor((arr.length / 2)-1)]
// // //   var theMiddle2 = arr[Math.floor(arr.length / 3)];


// // console.log(prethemiddle, theMiddle)
// // console.log("the length is :" + arr.length)


// var arr =[1, 2, 3, 4, 6, 2];


// if (arr.length===1 || arr.length===2 ){
//     arr=[]
//     console.log(arr)
// }

// else if (arr.length % 2 !== 0){
// var theMiddle = arr[Math.floor(arr.length / 2)];
// console.log(theMiddle)

// }

//     else if (arr.length % 2 ===0){
//         var theMiddle = arr[Math.floor(arr.length / 2)];
//         var prethemiddle=arr[Math.floor((arr.length / 2)-1)]
    
//       console.log(prethemiddle, theMiddle)
//     }






const eqArrays = function(...) {
    //...
  }
  
  const assertArraysEqual = function(actual, expected) {
    //...
  }
  


  // ACTUAL FUNCTION
  let middle = function(arr) {


    // var arr =[1, 2, 3, 4, 6, 2];

    result=[]
    if (arr.length===1 || arr.length===2 ){
        arr=[]
        // console.log(arr)
        result.push(arr)
    }
    
    else if (arr.length % 2 !== 0){
    var theMiddle = arr[Math.floor(arr.length / 2)];
    result.push(theMiddle)

    // console.log(theMiddle)
    
    }
    
        else if (arr.length % 2 ===0){
            var theMiddle = arr[Math.floor(arr.length / 2)];
            var prethemiddle=arr[Math.floor((arr.length / 2)-1)]
            result.push(prethemiddle, theMiddle)

        //   console.log(prethemiddle, theMiddle)
        }
    
    
        return result

    //...
  }

//   middle([1]) // => []
// //   middle([1, 2]) // => []
//   middle([1, 2, 3]) // => [2]
  middle([1, 2, 3, 4, 5]) // => [3]
  middle([1, 2, 3, 4]) // => [2, 3]
  middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

  

  // let person = {
  //   name: "Paul",
  //   address: {
  //     street: "310 W 95th",
  //     city: "New York",
  //     zipCode: 10027
  //   }
  // };


  // person["phoneNumbers"] instanceof Object



  var planetMoons = {
    mercury: 0,
    venus: 0,
    earth: 1,
    mars: 2,
    jupiter: 67,
    saturn: 62,
    uranus: 27,
    neptune: 14
  };


  for (var planet in planetMoons) {
    var numberOfMoons = planetMoons[planet];
    console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
  }