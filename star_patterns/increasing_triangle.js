let n = 5;
let string = "";

// 中間呢個n，決定左row number
for(let i=0; i<n; i++){
    // 中間呢個j決定左column print幾多粒
    // 第一行，一粒; 第二行，兩粒; 第三行，三粒
    // 所以將佢改成跟住row既數目就得
    for(j=0; j<=i; j++){
        string +="# ";
    }
    string +="\n";
}
console.log(string);


