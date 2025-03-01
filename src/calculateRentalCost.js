/**
 * @param {number} days
 *
 * @return {number}
 */
const rentDay = 40;

function calculateRentalCost(days) {
  // write code here
  if (days >= 7) {
    return days * rentDay - 50;
  }

  if (days >= 3) {
    return days * rentDay - 20;
  }

  return days * rentDay;
}

module.exports = calculateRentalCost;
