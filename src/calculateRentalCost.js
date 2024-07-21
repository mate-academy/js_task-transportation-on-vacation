/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const perDay = 40;
  let total = days * perDay;

  if (days >= 7) {
    total = total - 50;
  } else if (days >= 3) {
    total = total - 20;
  }

  return total;
}

console.log(calculateRentalCost(0));

module.exports = calculateRentalCost;
