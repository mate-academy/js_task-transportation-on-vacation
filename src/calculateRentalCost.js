/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const discount7 = 50;
  const discount3 = 20;
  let costs = price * days;

  if (days >= 7) {
    costs -= discount7;
  } else if (days >= 3) {
    costs -= discount3;
  }

  return costs;
}
module.exports = calculateRentalCost;
