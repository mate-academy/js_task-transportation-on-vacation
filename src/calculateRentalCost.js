/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayTax = 40;

  if (days > 6) {
    return days * dayTax - 50;
  }

  if (days > 2) {
    return days * dayTax - 20;
  }

  return days * dayTax;
}

module.exports = calculateRentalCost;
