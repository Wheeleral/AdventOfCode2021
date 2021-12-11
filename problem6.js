if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }
  // Read the file and print its contents.
  let input;
  var fs = require('fs'), filename = process.argv[2];
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    input =data.split(",");
    //console.log(input)
    console.log(x(input))
});

function x(fish) {
    let days = 256;
    let fishTotal=[0,0,0,0,0,0,0,0,0]

    // for (let i =0; i < days; i++) {
    //     let newFish = 0;
    //     for (let j =0; j < fish.length; j++) {
    //         if (fish[j] == 0) {
    //             fish[j] =6; newFish++;
    //         } else {
    //             fish[j]--
    //         }
    //     }
    //     for(let j =0; j<newFish; j++) {
    //         fish.push(8)
    //     }

    // }
    for(let i=0; i<fish.length; i++) {
        fishTotal[+fish[i]]++
    }
    for (let i =0; i < days; i++) {
        let newFish =[];
        //for (let j =0; j < 9; j++) {
            let news = fishTotal[0];
            fishTotal.shift()
            fishTotal[8] = news
            fishTotal[6] += news
        //}
      //  console.log(fishTotal)

    }

    let total =0;
    for(let i =0; i < fishTotal.length; i++){
        total+=fishTotal[i]
    }

    return total


}