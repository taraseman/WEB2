function RandNumber(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function MixArray(arr){
    let size = arr.length;
    let arr2 = new Array(size);
    let check, demonumber;
    for(let i =0;i<size;i++){
        check = true;
        do{
            demonumber = RandNumber(size);
            if(arr2[demonumber]===undefined)
            {
                arr2[demonumber] = arr[i];
                check = false;
            }
        }while(check);
    }   
    console.log("First Array: ",arr);
    console.log("Mixed Array: ",arr2);
}

MixArray([2,5,6,8,9,4,0]);
MixArray([1,2,3,4,5,6,7,8,9,0]);