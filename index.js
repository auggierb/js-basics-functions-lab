// Code your solution in this file!
const block = 264
function distanceFromHqInBlocks(value){
if(42 < value){return value - 42}
else{return 42 - value} 
}

function distanceFromHqInFeet(value){
    return distanceFromHqInBlocks(value) * block
} 

function distanceTravelledInFeet(a, b){
    if(a < b){return (b - a) * block}
    else{return (a - b) * block}
}

function calculatesFarePrice(start , destination) {
    let length = distanceTravelledInFeet(start, destination)
    if (length < 401) {return 0}
    else if(length > 401 && length  <= 2000) {return (length - 400) * 0.02}
    else if(length > 2500) {return 'cannot travel that far'}
    else {return 25}
}
    