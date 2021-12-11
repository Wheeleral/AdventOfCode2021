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

function x(s) {
    let crabs =s;
    //getting max....
    let max =0;
     for (let i =0; i< crabs.length; i++) {
         if (+crabs[i]>max) max=+crabs[i]
     }
    // console.log(max)
    let fuels =Array.apply(null, Array(max+1)).map(Number.prototype.valueOf,0);
    //[].fill(0, 0, max)
    for (let i =0; i < crabs.length; i++) {
       // console.log(i, crabs[i])
        for (let j =0; j <= max; j ++) {
            let amt = Math.abs(j - (+crabs[i]))
          //  console.log("feul", j, amt)
            fuels[j]+= (amt*(amt+1))/2
        }
    }
console.log(fuels)
    let min = 999999999;
    for (let i =0; i< fuels.length; i++) {
        if (+fuels[i]<min) min=(+fuels[i])
    }
console.log(min)
}