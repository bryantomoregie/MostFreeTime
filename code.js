function MostFreeTime(strArr) {
    const arr = []
    strArr.forEach(str => {
        arr.push(GetTimeInMinutes(str))
    })
    const largestBreak = LargestBreakInt(arr)
    return ConvertIntToTimeFormat(largestBreak)
}


function GetTimeInMinutes(str){
    let stringFirstHours = str[0] + str[1]
    let stringFirstMinutes = str[3] + str[4]
    let stringSecondHours = str[8] + str[9]
    let stringSecondMinutes = str[11] + str[12]

    let arr = []

    if(str[5] == 'P' && parseInt(stringFirstHours) != 12){
        let totalMinutes = (parseInt(stringFirstHours) * 60) + parseInt(stringFirstMinutes) + 720
        arr.push(totalMinutes)
    }else{
        let totalMinutes = (parseInt(stringFirstHours) * 60) + parseInt(stringFirstMinutes)
        arr.push(totalMinutes)
    }

    if(str[13] == 'P' && parseInt(stringSecondHours) != 12){
        let totalMinutes = (parseInt(stringSecondHours) * 60) + parseInt(stringSecondMinutes) + 720
        arr.push(totalMinutes)
    }
    if(str[13] == 'A' && parseInt(stringSecondHours) == 12){
        let totalMinutes = parseInt(stringSecondMinutes)
        arr.push(totalMinutes)
    }
    else if(str[13] == 'P' && parseInt(stringSecondHours) == 12){
        let totalMinutes = (parseInt(stringSecondHours) * 60) + parseInt(stringSecondMinutes)
        arr.push(totalMinutes)
    }
    else if (str[13] == 'A' && parseInt(stringSecondHours) != 12){
        let totalMinutes = (parseInt(stringSecondHours) * 60) + parseInt(stringSecondMinutes)
        arr.push(totalMinutes)
    }
    return arr
}


function LargestBreakInt(arr){
    let largestTime = 0
    let index = arr.length - 2;
    
    arr.sort( (a, b) => {
        return a[0] - b[0]
    });

    for(let i = arr.length - 1; i > 0; i--){
        let breakTime = arr[i][0] - arr[index][1]
        if ( breakTime > largestTime){
            largestTime = breakTime
        }
        index--;
    }
    
    return largestTime    

}

function ConvertIntToTimeFormat(int){
    let hours = Math.floor(int/60).toString()
    let minutes = (int % 60).toString()
    
    if(hours < 10){
        hours = "0" + hours
    }
    if(minutes < 10){
        minutes = "0" + minutes
    }
    
    return `${hours}:${minutes}`
}

let arr1 = ["10:00AM-12:30PM","02:00PM-02:45PM","09:10AM-09:50AM"]
let arr2 = ["07:00AM-08:00AM","09:00AM-10:00AM","10:00PM-11:00PM"]
let arr3 = ["11:30AM-01:00PM","07:00AM-08:15AM","01:50PM-05:00PM","08:30AM-11:10AM"]
let arr4 = ["06:00AM-08:00PM","09:09PM-09:11PM","08:02PM-08:04PM","08:10PM-09:00PM"]


MostFreeTime(arr3)