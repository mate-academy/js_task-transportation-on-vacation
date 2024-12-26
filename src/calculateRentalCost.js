/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  let discount = 0;
  const carCost = 40;
  const rent = carCost * days;

  if (days >= 3) {
    discount = 20;
  }

  if (days >= 7) {
    discount = 50;
  }

  return rent - discount;
}

module.exports = calculateRentalCost;
