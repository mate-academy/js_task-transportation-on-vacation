/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const rent = 40;
  const discMin = 20;
  const discMax = 50;
  let discount = 0;

  if (days >= 7) {
    discount = discMax;
  } else if (days >= 3) {
    discount = discMin;
  }

  return days * rent - discount;
}

module.exports = calculateRentalCost;
