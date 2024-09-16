/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  let sum = days * pricePerDay;

  if (days >= 7) {
    sum -= bigDiscount;
  } else if (days >= 3) {
    sum -= smallDiscount;
  }

  return sum;
}

module.exports = calculateRentalCost;
