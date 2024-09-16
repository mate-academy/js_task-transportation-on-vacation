/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const everyDayRent = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const totalRent = everyDayRent * days;

  if (days >= 7) {
    return totalRent - bigDiscount;
  } else if (days >= 3) {
    return totalRent - smallDiscount;
  }

  return totalRent;
}

module.exports = calculateRentalCost;
