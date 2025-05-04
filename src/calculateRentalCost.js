/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days < 3) {
    return days * 40;
  }

  if (days >= 3 && days < 7) {
    return days * 40 - 20;
  }

  if (days >= 7) {
    return days * 40 - 50;
  }
}

calculateRentalCost(1);
calculateRentalCost(3);
calculateRentalCost(7);

module.exports = calculateRentalCost;
