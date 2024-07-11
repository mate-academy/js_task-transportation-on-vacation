/**
 * @param {number} days
 *
 * @return {number}
 */

const regularPrice = 40;
const amountOfDaysForFiftyOff = 7;
const amountOfDaysForTwenty = 3;

calculateRentalCost(3);

function calculateRentalCost(days) {
  const price = days * regularPrice;

  if (days >= amountOfDaysForFiftyOff) {
    return price - 50;
  }

  if (days >= amountOfDaysForTwenty) {
    return price - 20;
  }

  return price;
}

module.exports = calculateRentalCost;
