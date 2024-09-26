/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carCost = 40;
  let discount;
  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  } else {
    discount = 0;
  }
  return carCost * days - discount;
}

module.exports = calculateRentalCost;
