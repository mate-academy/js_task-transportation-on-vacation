/**
 * @param {number} days
 *
 * @return {number}
 */
calculateRentalCost(1);
calculateRentalCost(3);
calculateRentalCost(7);

function calculateRentalCost(days) {
  let total = days * 40;

  if (days >= 7) {
    total -= 50;
  } else if (days >= 3) {
    total -= 20;
  }

  return total;
}

module.exports = calculateRentalCost;
