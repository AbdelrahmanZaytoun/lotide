// const joinList = function(conceptList) {
//   let addStrings = "";
//   for (let i = 0; i < conceptList.length; i++) {
//     const word = conceptList[i];
//     console.log(i, conceptList.length);
//     if (i < conceptList.length - 1) {
//       addStrings += word.toString() + ", ";
//     } else {
//       addStrings += word.toString() + "";
//     }
//   }
//   return addStrings;
// };

// // Test / Driver Code below...
// const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
// const concepts = joinList(conceptList);
// console.log(`Today I learned about ${concepts}.`);





function average(list) {
    var sum = 0;
  
    for (var num of list) {
      sum += num;
    }

  
    return sum / list.length;
}
  console.log(average([3, 5, 7]));



  var input = process.argv.slice(2);

if (input)
    console.log(reverse(input));

function reverse(original) {
    return orignal.split('').reverseList().join('');
}