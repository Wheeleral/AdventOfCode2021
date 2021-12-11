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
    console.log(947*44)
  });

  function x (s) {
    let bingoNums = s[0].split(",");
    let boards = [];
    let score = 0;
    //build boards
    let currBoard = [];
    for (let i=2; i <s.length; i++) {
        if (s[i] == ""){
            boards.push(currBoard)
            currBoard = [];
        } else {
            //gets a line of 5 nums
            let nums = s[i].split(" ")
            //console.log(nums)
            let tnums = [];
            for (let j =0; j <nums.length; j++) {
                if (nums[j] !== "") tnums.push(nums[j])
            }
            currBoard.push(tnums)
        }
    }
    console.log(boards)
    let winnum;
    //boards built! Now to mark things
    for (let i =0; i < bingoNums.length; i++) {
        if (boards.length ==1) {
            winnum = bingoNums[i-1]
            break;
        }
        let num = bingoNums[i];
        if (score !==0) break;
        console.log(num, boards)
        let newBoards = []
        for (let j=0; j < boards.length; j++) {
            let board = boards[j]
            let contained = false;
            for (let row = 0; row < 5; row++) {
                if (board[row].includes(num)) {
                    //mark it
                    let index = board[row].findIndex((e)=> e== num);
                    board[row][index] = ""
                    contained = true;
                    break;
                }
            }
            if (contained) {
                //check for bingo
                let bingo = false;
                for (let row = 0; row < 5; row++) {
                    //rows
                 //   console.log(board[row], board[row].every((e)=>e == ""))
                    if (board[row].every((e)=>e == "")){
                        //winner!
                        // console.log(num, board)
                        // for (let k = 0; k<5; k++) {
                        //     if (board[k][0]!== "") {
                        //         board[k].forEach((e)=>{score+=+e})
                        //     }
                        // }
                   //     console.log("row ", board)

                       // boards.shift(j, 1);
                        bingo = true;
                        break;
                    } 
                    
                }
                //cols
                if (board[0].includes("") ){
                    let index = board[0].findIndex((e)=> e== "");
                    let won = true;
                   // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",board, index)
                    for (let row = 0; row<5; row++) {
                        if (board[row][index] !== "") {won =false; break}
                    }
                    if (won) {
                        // console.log(num, board)
                        // for (let k = 0; k<5; k++) {
                        //         board[k].forEach((e)=>{if (e!== "")score+=+e})
                        
                        // }
                 //       console.log("col ", board)
                        //boards.shift(j, 1);
                        bingo = true;
                    }

                }
                if (bingo == false) newBoards.push(board)
            } else {
                newBoards.push(board)
            }

        }
        boards = newBoards

    }
    //10585 toohigh
//8004 too low
    console.log("FFF", winnum, boards)
   for (let k = 0; k<5; k++) {
        boards[0][k].forEach((e)=>{if (e!== "")score+=+e})
                        
    }
    return score*winnum;
  }