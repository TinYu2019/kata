let shape = "";
// 你想要棵樹幾高？
let totalLines = 5;
// 用黎計第幾行有幾多粒星星
let currentLineNumber = 1;

for(let row = 0; row<totalLines; row++){
    // print空白格
    for(let i=0; i<totalLines-currentLineNumber; i++){
        shape +=" ";
    }
    // print星星
    for(let k=0; k<currentLineNumber*2-1; k++){
        shape +="*";
    }
    currentLineNumber++;
    shape +="\n";
};

console.log(shape);
