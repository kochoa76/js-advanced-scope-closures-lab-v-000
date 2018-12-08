
function produceDrivingRange(givenRange) {
  return function(startRange, endRange){
    let startNumRange = parseInt(startRange)
    let endNumRange= parseInt(endRange)

    let distance = Math.abs(endNumRange - startNumRange)
    let rangeDistance = givenRange -distance
    if( rangeDistance > 0) {
      return `within range by ${(rangeDistance)}`
    }
    else {
      return `${Math.abs(rangeDistance)} blocks out of range`
    }
  }
}

function produceTipCalculator(fare) {
  return function(tip) {
    return fare * tip
  }
}


function createDriver(name){
  let driverId = 0
  return class Driver {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
