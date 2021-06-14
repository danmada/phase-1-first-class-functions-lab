// Code your solution in this file!



const returnFirstTwoDrivers = function(array) {
    
    return array.slice(0,2)
}


const returnLastTwoDrivers = function(array) {
    
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

selectingDrivers[0]()

function createFareMultiplier(multiNum) {

    return function multiplier(fare) {
        return multiNum * fare}
}

function fareDoubler(fare) {
    let timesTwo = fare * 2
    return timesTwo
}

function fareTripler(fare) {
    let timesThree = fare * 3
    return timesThree
}

function selectDifferentDrivers(array, returnFunc) {

    if (returnFunc === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array)
    } else {
        return returnLastTwoDrivers(array)
    }

}