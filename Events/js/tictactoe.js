const myTable = document.getElementById("board");

const myRow1 = document.getElementById("row1");
const myRow2 = document.getElementById("row2");
const myRow3 = document.getElementById("row3");

const myCell1 = document.getElementById("1");
const myCell2 = document.getElementById("2");
const myCell3 = document.getElementById("3");
const myCell4 = document.getElementById("4");
const myCell5 = document.getElementById("5");
const myCell6 = document.getElementById("6");
const myCell7 = document.getElementById("7");
const myCell8 = document.getElementById("8");
const myCell9 = document.getElementById("9");

let myFirstIcon = "X";
let xIcon = "X";
let oIcon = "O";
let counter = 0;
let xCount = 0;
let oCount = 0;
let xTargets = [];
let oTargets = [];
let totalTargetIDCount = 45;

myCell1.addEventListener("click", addIcon);
myCell2.addEventListener("click", addIcon);
myCell3.addEventListener("click", addIcon);
myCell4.addEventListener("click", addIcon);
myCell5.addEventListener("click", addIcon);
myCell6.addEventListener("click", addIcon);
myCell7.addEventListener("click", addIcon);
myCell8.addEventListener("click", addIcon);
myCell9.addEventListener("click", addIcon);

function addIcon(e){
    const targetID = e.target.id;
    const myCell = document.getElementById(targetID);
    if(myCell.innerText === ""){
        counter += 1;
        if((counter) % 2 === 0){
            myCell.classList.add("O");
            myCell.innerText = oIcon;
            oCount += parseInt(targetID);
            oTargets.push(parseInt(targetID));
        } else{
            myCell.classList.add("X");
            myCell.innerText = xIcon;
            xCount += parseInt(targetID);                       
            xTargets.push(parseInt(targetID));
        }
    }
    if((oCount+xCount) < totalTargetIDCount){
        let xWon = whoWon(xTargets);
        let oWon = whoWon(oTargets);
        if(oWon){
            setTimeout(() => {
                alert("O has won!");
                document.location.reload();
            },300);
        }
        if(xWon){
            setTimeout(() => {
                alert("X has won!");
                document.location.reload();
            },300);
        }
    }else{
        setTimeout(() => {
            alert("Cats game!");
            document.location.reload();
        },300);
    }
}
function whoWon(Targts){
    let sortedVal = Targts.sort();
    if(sortedVal.length >= 3){
        for(let i = 0; i < sortedVal.length ; i++){
            if(sortedVal[i] == 1){
                if((sortedVal.includes(2) && sortedVal.includes(3)) || (sortedVal.includes(4) && sortedVal.includes(7)) || (sortedVal.includes(5) && sortedVal.includes(9))){
                    return true;
                }
            } else if(sortedVal[i] === 2){
                if((sortedVal.includes(5) && sortedVal.includes(8))){
                    return true;
                }
            } else if(sortedVal[i] === 3){
                if((sortedVal.includes(5) && sortedVal.includes(7)) || (sortedVal.includes(6) && sortedVal.includes(9))){
                    return true;
                }
            } else if(sortedVal[i] === 4){
                if((sortedVal.includes(5) && sortedVal.includes(6))){
                    return true;
                }
            } else if(sortedVal[i] === 7){
                if((sortedVal.includes(8) && sortedVal.includes(9))){
                    return true;
                }
            }
        }    
    }
}
