function Sort(word1,word2,letter){
    if(word1[letter]<word2[letter])
        return word1;
    else if(word1[letter]>word2[letter])
        return word2;
    else if(word1.length>letter+1 && word2.length>letter+1 ){
       return Sort(word1,word2,letter+1);
    }
    else if(word1.length===letter+1){
        return word1;
    }
    else{
        return word2;
    }
}

const bubbleSort = arr => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (Sort(arr[j],arr[j+1],0) === arr[j+1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    console.log(arr);
};

bubbleSort(["Vasyl","Andriy","Vika","Vasylko","Viktoria","Anastasiya","Taras",]);