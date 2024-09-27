/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const costWithoutDiscount = costPerDay * days;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const maxDayDiscount = 7;
  const minDayDiscount = 3;

  if (days >= maxDayDiscount) {
    return costWithoutDiscount - bigDiscount;
  }

  if (days >= minDayDiscount) {
    return costWithoutDiscount - smallDiscount;
  }

  return costWithoutDiscount;
}

module.exports = calculateRentalCost;
