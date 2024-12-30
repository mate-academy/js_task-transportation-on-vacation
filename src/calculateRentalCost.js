/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const bigReduction = 50;
  const smallReduction = 20;
  const price = 40;
  let result = days * price;

  if (days >= 7) {
    result = result - bigReduction;
  } else if (days >= 3) {
    result = result - smallReduction;
  }

  return result;
}

module.exports = calculateRentalCost;
