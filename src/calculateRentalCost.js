/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceRent = 40;
  const manyDays = 50;
  const fewDays = 20;
  const totalSum = days * priceRent;

  if (days >= 3 && days < 7) {
    return totalSum - fewDays;
  } else if (days >= 7) {
    return totalSum - manyDays;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
