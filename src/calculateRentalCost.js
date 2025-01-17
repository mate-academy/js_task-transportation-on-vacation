// /**
//  * @param {number} days
//  *
//  * @return {number}
//  */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;

  let totalCost = days * DAILY_RATE;

  if (days >= 7) {
    totalCost -= 50;
  } else if (days >= 3) {
    totalCost -= 20;
  }

  return totalCost;
}

calculateRentalCost(1);
calculateRentalCost(3);
calculateRentalCost(7);

module.exports = calculateRentalCost;
