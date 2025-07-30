/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costOfRent = 40;
  let discount = 0;

  if (days >= 7) {
    discount = 50;
  } else if (days >= 3) {
    discount = 20;
  }

  return days * costOfRent - discount;
}

module.exports = calculateRentalCost;
