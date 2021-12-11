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
    input =data.split("\r\n");
    console.log(input)
    let g = parseInt(t(input,0),2)
    let e = parseInt(t(input,1),2)
    console.log(g, e, g*e)

  });

  function t(s, n) {
      let ga = "011001010000"
      let o;
        for (let i=0; i <ga.length; i++){
            if (s.length == 1) {
                o =s;
                break;
            }
            ga = x(s)[n]

            o = s.filter(c => c[i] == ga[i])
            s = o;

            //console.log("ddd", ga, i, ga[i], s.map(c =>  c.substring(0, i)), s)
            console.log(o)
        }
      
      console.log(o)
        return o;
  }

  function x(s) {
    //  console.log(s)
    let fin =[0,0,0,0,0,0,0,0,0,0,0,0]
    let total = s.length;
    for (let i of s) {
        for (let j =0; j <i.length; j++) {
            let c =i[j]
            if (c ==1){
                fin[j] +=1
            }
        }
    }


    let ga =""
    let ep = ""
    for (let i =0; i <fin.length; i++) {
        fin[i] = fin[i]/total
        if (fin[i]>.5) {
            ga+="1"
            ep+="0"
        } else if(fin[i]== .5){
            ga+="1"
            ep+="0"
        }else {
            ga+="0"
            ep+="1" 
        }
    }
    // console.log(fin)
    // console.log("!!!!!!!!!!!!!", ga,ep)

    // console.log(parseInt(ga, 2), parseInt(ep,2))
    // console.log(parseInt(ga, 2)* parseInt(ep,2))
    return [ga, ep]; //

}


console.log("@@@@@@@@@@@@@@@@@@@@@@@", parseInt("011000110010", 2) *parseInt("111110110010",2))

//'011000110010'//o2
//'111110110010'