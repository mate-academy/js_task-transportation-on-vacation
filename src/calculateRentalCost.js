/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const everyDayCarRentCost = 40;
  let discount = 0;

  if (days >= 3 && days < 7) {
    discount = 20;
  }

  if (days >= 7) {
    discount = 50;
  }

  return days * everyDayCarRentCost - discount;
}

module.exports = calculateRentalCost;
