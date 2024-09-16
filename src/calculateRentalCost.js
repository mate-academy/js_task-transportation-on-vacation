/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRent = 40;
  const discountAfterThreeDays = 20;
  const discountAfterSevenDays = 50;
  let carCosts = days * dailyRent;

  if (days >= 7) {
    carCosts -= discountAfterSevenDays;
  } else if (days >= 3) {
    carCosts -= discountAfterThreeDays;
  }

  return carCosts;
}

module.exports = calculateRentalCost;
