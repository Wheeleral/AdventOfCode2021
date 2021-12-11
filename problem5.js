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
    let lines = s;//.split("\n");
   // let board = [1000][1000];
    let board = zeros([1000,1000])

    for (let i =0; i < lines.length; i++) {
        let line = lines[i].replace(" ","");
        if (line == undefined) continue;
        let fp = line.split("->")[0]
        let sp = line.split("->")[1]
        let fp1 = +fp.split(",")[0]
        let fp2 = +fp.split(",")[1]
        let sp1 = +sp.split(",")[0]
        let sp2 = +sp.split(",")[1]

        //check if horizontal or vertical
        if (!(fp1 ==sp1 ||fp2 == sp2)) {
           //diagonal
           let slopex = (sp1 -fp1)/Math.abs(fp1-sp1)
           let amtx = Math.abs(sp1-fp1)
           let slopey = (sp2 -fp2)/Math.abs(fp2-sp2)
           let amty = Math.abs(sp2-fp2)
        let total = (amtx> amty)? amtx:amty
            for (let j =0; j<=total; j++) {
              board[fp1+ (j*slopex)][fp2+(j*slopey)]++;
            }

        } else  if (fp1===sp1) {
            let slope = (sp2 -fp2)/Math.abs(fp2-sp2)
            let amt = Math.abs(sp2-fp2)
         //   console.log("point ", fp, sp)

            for (let j =0; j <=amt; j++){
                 //  console.log(fp1,(fp2+(j*slope)))
                board[fp1][fp2+(j*slope)]++;
            }
        } else {//vertical
            let slope = (sp1 -fp1)/Math.abs(fp1-sp1)
            let amt = Math.abs(sp1-fp1)
           // console.log("point ", fp, sp, slope, amt)
           
            for (let j =0; j <=amt; j++){
                //console.log(fp1+(j*slope), fp2)
               // console.log(fp1+(j*slope), fp2)
                board[fp1+(j*slope)][fp2]++;
            }
        }
    }
    let score = 0;
    for (let i =0; i < 1000; i++) {
        for(let j =0; j <1000; j++) {
            if (board[i][j] > 1) score++
        }
    }

return score;


//3428 too low
}

function zeros(dimensions) {
    var array = [];

    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }

    return array;
}