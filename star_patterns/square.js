let n = 5;
let string = "";

// it tells us the number of the row is printing
// print the row
for(let i=0; i<n; i++){
    // it tells us the number of the column
    // print the column star
    for(j=0; j<n; j++){
        string +="# ";
    }
    // print the column "next line"
    string +="\n";
}
console.log(string);


