/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let amount = 0;

  for (let i = 0; i <= days - 1; i++) {
    amount += 40;
  }

  if (days >= 7) {
    return amount - 50;
  }

  if (days >= 3) {
    return amount - 20;
  }

  return amount;
}

module.exports = calculateRentalCost;
