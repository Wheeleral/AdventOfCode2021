// const fs = require('fs')
// let input;
// fs.readFile("./data2.txt", (err, data) => {
// 	if (err) throw err;
//     input = data;
//     console.log(data)
// })

//   console.log(input)
// let data = input.split("/n")
// console.log(data)
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }
  // Read the file and print its contents.
  let input;
  var fs = require('fs')
    , filename = process.argv[2];
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);
    input =data.split("\n");
    console.log(input)
    x(input)
  });

//let data = input.split("/n")
//console.log(data)

  function x (string) {
      let fcount = 0;
      let ucount = 0;
      let dcount = 0
      let aim = 0;
      let depth =0;
      for (let i of string) {
        let dir = i.substring(0, i.indexOf(" "))
        let amt = +i.substring(i.indexOf(" ")+1, i.length-1);
        switch(dir) {
            case "up": {
                ucount+=amt;
                aim-=amt;
                break;}
            case "down": {
                dcount+=amt;
                aim+=amt;
                break;}
            case "forward": {
                fcount+=amt;
                depth +=amt*aim
                break;}
        }
        console.log(dir, "@"+amt+"@", fcount, ucount, dcount, aim, depth)

      }

      console.log("u", ucount,"d", dcount,"f", fcount)
      console.log(depth)
      console.log((depth+aim*9) * (fcount+9))
  }