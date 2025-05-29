/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days < 3) {
    return days * 40;
  } else if (days >= 3 && days < 7) {
    return days * 40 - 20;
  } else {
    return days * 40 - 50;
  }
}

calculateRentalCost(1); // 40
calculateRentalCost(3); // 100
calculateRentalCost(7); // 230

module.exports = calculateRentalCost;
