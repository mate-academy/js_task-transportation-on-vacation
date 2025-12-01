/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carCost = 40;
  let discount = 0;
  let total = 0;

  if (days <= 2) {
    discount = 0;
  } else if (days <= 6) {
    discount = 20;
  } else {
    discount = 50;
  }

  total = carCost * days - discount;

  return total;
}

module.exports = calculateRentalCost;
