/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = 40 * days;

  if (days >= 7) {
    total = total - 50;
  } else if (days >= 3 && days < 7) {
    total = total - 20;
  }
  return total;
}







module.exports = calculateRentalCost;
