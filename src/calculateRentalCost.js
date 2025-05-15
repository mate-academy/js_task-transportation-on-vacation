/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const flatRent = 40 * days;
  let discount = 0;

  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  }

  return flatRent - discount;
}

module.exports = calculateRentalCost;
