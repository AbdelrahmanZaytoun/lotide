let assertEqual = function(actual, expected) {
    if (actual === expected){
        console.log(`Assertion Passed:${actual}  === ${expected}`)
    }
    else {console.log(`Assertion Failed:${actual}  !=== ${expected}`)}
 };
 
 // TEST CODE
 // assertEqual("Lighthouse Labs", "Bootcamp");
 // assertEqual(1, 1);
 // console.assert(assertEqual("Lighthouse Labs", "Bootcamp")=== "Lighthouse LabsBootcamp")
 assertEqual(1, 1)