function TwoNumbers(first,second){
    let bigger = first > second ? first : second;
    let max;
    for(let i = 1; i <= bigger;i++)
        if(first%i===0 && second%i === 0)
            max = i;
        
    console.log("The largest number is: ",max);
}

TwoNumbers(2,6);
TwoNumbers(10,3);
TwoNumbers(15,5);
TwoNumbers(27,15);