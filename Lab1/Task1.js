function WordsToArray(string){
    let demo = "";
    let arr = [];
    for(let i =0;i<string.length;i++){
        if(string[i]!==" ")
            demo+=string[i];
        else{
            arr.push(demo);
            demo="";
        }
    }
    arr.push(demo);
    console.log(arr);
}

WordsToArray("Hello World");
WordsToArray("Lviv Kyiv");
WordsToArray("Lviv Polytechnic National University");