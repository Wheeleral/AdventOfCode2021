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


function x(t){
    let scores = [];
    for (let i =0; i < t.length; i++) {
        let score = 0;
        let row = t[i].split("");
        let level = [];
        let closing =  [")", "}", "]", ">"]
        for (let j =0; j < row.length; j++) {
            let char = row[j];
            if (closing.includes(char)) {
                let match = ""
                if (char == ")") match = "("
                if (char == "}") match = "{"
                if (char == "]") match = "["
                if (char == ">") match = "<"

                if (level[level.length -1] == match) {
                    level.pop()
                } else {
                    level = [];
                    break;
                }

            } else {
                level.push(char)
            }

        }
        if (level != []) console.log(level)
        for (let j = level.length -1; j >-1; j--) {
            let char = level[j]
            score = score*5
            if (char == "(") score +=1
            if (char == "{") score+=3
            if (char == "[") score+=2
            if (char == "<") score+=4
            console.log(char, score)
        }
        if (score!= 0) scores.push(score)


    }
console.log(scores)
    scores.sort(function(a, b) {
        return a - b;
      })
    console.log(scores.length, scores)
    

    return scores[(scores.length/2)-.5];
}

//3290510916

function x2(t){
    let score = 0;
    for (let i =0; i < t.length; i++) {
        let row = t[i].split("");
        let level = [];
        let corrupted = "";
        let closing =  [")", "}", "]", ">"]
        for (let j =0; j < row.length; j++) {
            let char = row[j];
            if (closing.includes(char)) {
                let match = ""
                if (char == ")") match = "("
                if (char == "}") match = "{"
                if (char == "]") match = "["
                if (char == ">") match = "<"

                if (level[level.length -1] == match) {
                    level.pop()
                } else {
                    corrupted = char;
                    break;
                }

            } else {
                level.push(char)
            }


        }
        

        if (corrupted != "") {
            if (corrupted == ")") score+=3;
            if (corrupted == "]") score+=57
            if (corrupted == "}") score+=1197
            if (corrupted==">")score +=25137
        }


    }


    return score;
}