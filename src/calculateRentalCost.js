/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let cash = 0;
  const amount = days * 40;

  if (days > 6) {
    cash = amount - 50;
  } else if (days >= 3) {
    cash = amount - 20;
  } else {
    cash = amount;
  }

  return cash;
}

module.exports = calculateRentalCost;
