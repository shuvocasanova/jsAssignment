// feetToMile
function feetToMile(feet) {
  var mile = feet / 5280;
  if (feet <= 0) {
      return ("feet can't be a negative or null value");
  }
  return mile;
}



// woodCalculator
function woodCalculator(numOfChair, numOfTable, numOfBed) {
  var totalWood;
  if (numOfChair <= 0 || numOfTable <= 0 || numOfBed <= 0) {
      return ("Negative or null value is not accepted");
  } else {
      totalWood = numOfChair * 1 + numOfTable * 3 + numOfBed * 5;
      return Math.round(totalWood);
  }
}



// brickCalculator
function brickCalculator(storyOfBuilding) {
  let totalBrickOfFirstTenStorey;
  let totalBrickOfSecondTenStorey;
  let totalBrickOfRestStorey;
  const brick = 1000;
  const perHeightOfFirstTenStorey = 15;
  const perHeightOfSecondTenStorey = 12;
  const perHeightOfRestStorey = 10;
  if (storeyOfBuilding <= 0) {
      return ("Negative or null value is not accepted");
  } else if (storeyOfBuilding >= 1 && storeyOfBuilding <= 10) {
      totalBrickOfFirstTenStorey = storeyOfBuilding * perHeightOfFirstTenStorey * brick;
      return Math.round(totalBrickOfFirstTenStorey);
  } else if (storeyOfBuilding > 10 && storeyOfBuilding <= 20) {
      totalBrickOfSecondTenStorey = (storeyOfBuilding * perHeightOfSecondTenStorey * brick) + (3 * 10 * brick);
      return Math.round(totalBrickOfSecondTenStorey);
  } else {
      totalBrickOfRestStorey = (storeyOfBuilding * perHeightOfRestStorey * brick) + ((2 * 10 * brick) + (5 * 10 * brick));
      return Math.round(totalBrickOfRestStorey);
  }
}



// tinyFriend
function tinyFriend(names) {
  var shortestName = names[0];
  for (var i = 0; i < names.length; i++) {
      if (names[i] === "" || names.length == 0) {
          return ("Empty array or string is not accepted");
      } else if (names[i].length < shortestName.length) {
          shortestName = names[i];
      }
  }
  return shortestName;
}