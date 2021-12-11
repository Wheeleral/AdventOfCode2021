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
    let total =0;
    for (let i =0; i< s.length; i++){
        let line = s[i]
        //console.log(line.split("|"))
        let signals=(line.split("|")[0]).split(" ")
        let output=(line.split("|")[1]).split(" ")
        let nums = {}
        let unknownsFive = []
        let unknownsSix = []
        let segs = {}
        console.log(signals)
        for (let j =0; j < signals.length; j++) {
            let curr = signals[j].replace(" ", "")
            if (curr == "") continue;
            //console.log(output)
            if (curr.length == 2) {
                nums.one = signals[j].split("").sort().join("")
            } else if (curr.length == 3){
                nums.seven = signals[j].split("").sort().join("")

            } if (curr.length == 4) {
                nums.four = signals[j].split("").sort().join("")

            } else if (curr.length == 7) {
                nums.eight = signals[j].split("").sort().join("")
 
            } else{
                if (curr.length ==5){
                    unknownsFive.push(curr)
                } else if(curr.length==6){   
                    //console.log("pushing ", curr, curr.length) 
                    unknownsSix.push(curr)
                }
            }
        }
        /*   _     0
            | |    12
             _     3
            | |    45
             _     6

        */
        segs.zero = diff(nums.seven, nums.one)[0].split("").sort().join("")

        let d = notContain(nums.one, unknownsSix)
        //console.log(d)
        nums.six=d[0].split("").sort().join("")
        segs.two = diff(d[0], "abcdefg");
        segs.five = diff(segs.two, nums.one)
        nums.three = contain(nums.seven, unknownsFive)[0].split("").sort().join("")
        nums.five = notContain(segs.two, unknownsFive)[0].split("").sort().join("")
        nums.two = notContain(segs.five, unknownsFive)[0].split("").sort().join("")
        nums.zero = notContain(nums.five, unknownsSix)[0].split("").sort().join("")
        nums.nine = lastOne(signals, nums).split("").sort().join("")


        console.log(segs, nums)

        let overallnum = ""
        for (let j =0; j < output.length; j++) {
           let str = output[j].split("").sort().join("")
           console.log(str)
           for (let k in nums) {
               if (nums[k] == str){
                   if (k =="zero"){
                    overallnum+="0"
                   }else if(k =="one"){
                    overallnum+="1"
                   }
                   else if(k =="two"){
                    overallnum+="2"   
                    }
                    else if(k =="three"){
                        overallnum+="3" 
                    }
                    else if(k =="four"){
                        overallnum+="4" 
                    }
                    else if(k =="five"){
                        overallnum+="5" 
                    }
                    else if(k =="six"){
                        overallnum+="6"
                    }
                    else if(k =="seven"){
                        overallnum+="7"
                    }
                    else if(k =="eight"){
                        overallnum+="8"
                    }
                    else if(k =="nine"){
                        overallnum+="9"
                    }
               }
           }
        }

        total += +overallnum
        //console.log(output, total)
        console.log(overallnum, total)

    }
    return total;
}

function diff(a, b) {
    let diff = []
    for (let i =0; i < a.length; i ++){
        if (!b.includes(a[i])) diff.push(a[i])
    }
    for (let i =0; i < b.length; i ++){
        if (!a.includes(b[i])) diff.push(b[i])
    }
    return diff;
}

function notContain(base, numArr){
    let vals = [];
   // console.log("ncccc", base, numArr)
    for (let i=0; i<numArr.length; i++) {
        for (let j =0; j <base.length;j++) {
            if (!numArr[i].includes(base[j])) vals.push(numArr[i])
        }
    }
    //console.log(base, numArr, vals)

    return vals;
}
function contain(base, numArr){
    let vals = [];
    for (let i=0; i<numArr.length; i++) {
        let c = true;
        for (let j =0; j <base.length;j++) {
            if (!numArr[i].includes(base[j])) c=false;
        }
        if (c) vals.push(numArr[i])
    }
    //console.log(base, numArr, vals)

    return vals;
}

function lastOne(out, nums) {
    let vals =[];
    for (let c in nums) {
        vals.push(nums[c])
    }
    console.log("lassst ", vals, out)
    for (let i =0; i <out.length; i++) {
        let x =out[i].split("").sort().join("")
        if (!vals.includes(x)) return x
    }

}


//366 too high
//300 too low

//19095 low
//189389 low
//3338897 high
//3338897