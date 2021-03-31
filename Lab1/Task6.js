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

const BubbleSort = arr => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (Sort(arr[j].name,arr[j+1].name,0) === arr[j+1].name) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    console.log(arr);
};
function User(name,age){
    this.name = name;
    this.age = age;
}
let user1 = new User("Sasha",19);
let user2 = new User("Oleh",17);
let user3 = new User("Andriy",21);
let user4 = new User("Olena",21);
let ArrUser = [user1,user2,user3,user4];
BubbleSort(ArrUser);