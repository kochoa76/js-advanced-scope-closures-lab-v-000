
function produceDrivingRange(givenRange){
    return function(startingBlock, endingBlock) {
      let start = parseInt(startingBlock)
      let end= parseInt(endingBlock)

      let blockDistance = Math.abs(end - start)
      let distance = givenRange - blockDistance
      if (distance > 0){
          return `within range by ${(distance)}`;
        }
        else {
          return `${Math.abs(distance)} blocks out of range`
        }
    }
}

function produceTipCalculator(tip) {
    return function(fare) {
        return fare * tip
    }
}

function createDriver() {
    let DriverId = 0
    return class {
      constructor(name){
          this.name = name
          this.id = ++DriverId
      }
    }
}
