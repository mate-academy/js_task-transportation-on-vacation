/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const priceForDay = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  let count = days * priceForDay;

  if (days >= 7) {
    count -= bigDiscount;

    return count;
  }

  if (days >= 3) {
    count -= smallDiscount;

    return count;
  }

  return count;
}

module.exports = calculateRentalCost;
