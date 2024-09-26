/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const calculate = days * price;
  const smallTotal = 20;
  const bigTotal = 50;

  let total = 0;

  if (days < 3) {
    total = calculate;
  } else if (days < 7 && days >= 3) {
    total = calculate - smallTotal;
  } else if (days >= 7) {
    total = calculate - bigTotal;
  }

  return total;
}

module.exports = calculateRentalCost;
