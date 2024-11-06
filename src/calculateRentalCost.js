/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const payment = 40;

  if (days >= 7) {
    return days * payment - 50;
  }

  if (days >= 3 && days <= 7) {
    return days * payment - 20;
  }

  if (days <= 2) {
    return days * payment;
  }
}

calculateRentalCost();

module.exports = calculateRentalCost;
