/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;
  let total;

  if (days < 3) {
    total = price * days;
  } else if (days >= 3 && days <= 6) {
    total = price * days - 20;
  } else if (days >= 7) {
    total = price * days - 50;
  }

  return total;
}

module.exports = calculateRentalCost;
