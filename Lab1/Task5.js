function GetDays(month,year){
    if(month === 1 || month ===3 || month ===5||month ===7||month ===8||month ===10||month ===12)
        console.log("This month has 31 days");
    else if(month!==2)
        console.log("This month has 30 days");
    else if((year-1924)%4===0)
        console.log("This month has 29 days");
    else console.log("This month has 28 days");
}

GetDays(2,2020);
GetDays(2,2021);
GetDays(8,2016);
GetDays(9,2019);
GetDays(7,2020);