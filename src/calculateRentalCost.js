/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rent = 40;
  let amount = rent * days;

  if (days > 6) {
    amount -= 50;
  } else if (days >= 3) {
    amount -= 20;
  }

  return amount;
}

module.exports = calculateRentalCost;
