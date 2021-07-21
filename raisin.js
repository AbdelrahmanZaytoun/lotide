

const raisinAlarmArray = function(cookie) {
    let result = [];
    for (let coo of cookie) {
      // console.log("ing = " + ing);
      if (coo.includes("🍇")) {
        result.push("Raisin Alert");
      } else {
        result.push("All Good!");
      }
    }
    return result;
  };
  
  
  console.log(raisinAlarmArray(
    [
      ["🍫", "🍫", "🍇", "🍫"],
      ["🍫", "🍇", "🍫", "🍫", "🍇"],
      ["🍫", "🍫", "🍫"]
    ]
  ));