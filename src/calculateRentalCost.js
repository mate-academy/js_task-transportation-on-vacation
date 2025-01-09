/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentPerDay = 40;

  if (days < 3) {
    return days * rentPerDay;
  }

  if (days >= 3 && days < 7) {
    return days * rentPerDay - 20;
  }

  if (days >= 7) {
    return days * rentPerDay - 50;
  }
}

module.exports = calculateRentalCost;
