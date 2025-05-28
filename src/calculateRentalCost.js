/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyCost = 40;
  const discount1 = 50;
  const discount2 = 20;
  let sum = dailyCost * days;

  if (days >= 7) {
    sum -= discount1;
  } else if (days >= 3) {
    sum -= discount2;
  }

  return sum;
}

module.exports = calculateRentalCost;
