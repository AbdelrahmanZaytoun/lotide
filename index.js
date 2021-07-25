
      function sum(fromN, toN) {
        let total=0
        if (fromN<toN){
            ++fromN
            sum(total+=fromN)
        }
      // Sum all the values from fromN up to toN
    }
    
    console.log(sum(3, 7));