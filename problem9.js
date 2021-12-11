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
    input =data.split("\n");
    //console.log(input)
    console.log(x(input))
});


function x(s) {
    let map =[]
    for (let i =0; i< s.length; i++){
        let row = s[i].split("")
        map.push(row)
    }

    let score =0;
    let height = map.length;
    let width = map[0].length;
    let lowpts = [];
    for (let i = 0; i < width; i++) {
        for (let j = 0; j <height; j++) {
            let cell = map[j][i]
            if (i > 0 ) {
                if (cell >= map[j][i-1]) continue;
            }
            if (i < width -1 ) {
                if (cell >= map[j][i+1]) continue;
            }
            if (j > 0 ) {
                if (cell >= map[j-1][i]) continue;
            }
            if (j < height -1 ) {
                if (cell >= map[j+1][i]) continue;
            }


            lowpts.push(cell)
        }
    }


    for (let t of lowpts) {
        score+=+t+1
    }

    return score
}