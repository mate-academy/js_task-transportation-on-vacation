/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentCosts = 40;
  let rentCostsSum = rentCosts * days;

  if (days >= 3 && days < 7) {
    rentCostsSum -= 20;
  }

  if (days >= 7) {
    rentCostsSum -= 50;
  }

  return rentCostsSum;
}

module.exports = calculateRentalCost;
