/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let rental = days * 40;

  if (days >= 3 && days < 7) {
    rental = rental - 20;
  }

  if (days >= 7) {
    rental = rental - 50;
  }

  return rental;
}

module.exports = calculateRentalCost;
