/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const week = 7;
  const lessThenWeek = 3;
  const weekDiscount = 50;
  const simpleDiscount = 20;

  const dayPrice = 40;
  const total = dayPrice * days;

  if (days >= week) {
    return total - weekDiscount;
  } else if (days >= lessThenWeek) {
    return total - simpleDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
