/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let discount = 0;

  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  }

  return 40 * days - discount;
}

module.exports = calculateRentalCost;
