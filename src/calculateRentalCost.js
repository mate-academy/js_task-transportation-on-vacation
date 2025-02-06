/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const discountForSevenDays = 50;
  const discountForThreeDays = 20;
  let totalSum = 0;

  if (days >= 7) {
    totalSum = dayRent * days - discountForSevenDays;
  } else if (days >= 3) {
    totalSum = dayRent * days - discountForThreeDays;
  } else {
    totalSum = dayRent * days;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
