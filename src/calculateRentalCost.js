/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentOneDay = 40;
  const rentSevenDays = 50;
  const rentThreeDays = 20;
  let rentFullPrice = 0;

  for (let i = 0; i < days; i++) {
    rentFullPrice += rentOneDay;
  }

  if (days > 2 && days < 7) {
    rentFullPrice -= rentThreeDays;
  }

  if (days >= 7) {
    rentFullPrice -= rentSevenDays;
  }

  return rentFullPrice;
}

module.exports = calculateRentalCost;
