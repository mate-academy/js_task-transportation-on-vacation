/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentalCost = 40;
  const discountForLongRental = 50;
  const discountForMediumRental = 20;
  const minimumDaysForLongRental = 7;
  const minimumDaysForMediumRental = 3;

  let cost = dailyRentalCost * days;

  if (days >= minimumDaysForLongRental) {
    cost -= discountForLongRental;
  } else if (days >= minimumDaysForMediumRental) {
    cost -= discountForMediumRental;
  }

  return cost;
}

module.exports = calculateRentalCost;
