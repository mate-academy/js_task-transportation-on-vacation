/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = 0;
  const dailyRentalRate = 40;
  const discountForSevenDays = 50;
  const longTermRentalDays = 7;
  const discountForThreeDays = 20;
  const midTermRentalDays = 3;

  for (let i = 0; i < days; i++) {
    totalCost += dailyRentalRate;
  }

  if (days >= longTermRentalDays) {
    totalCost -= discountForSevenDays;
  } else if (days >= midTermRentalDays) {
    totalCost -= discountForThreeDays;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
