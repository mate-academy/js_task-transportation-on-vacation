/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const everyDayRent = 40;
  const maxDiscount = 50;
  const minDiscount = 20;

  if (days >= 7) {
    return everyDayRent * days - maxDiscount;
  }

  if (days >= 3) {
    return everyDayRent * days - minDiscount;
  }

  return everyDayRent * days;
}

module.exports = calculateRentalCost;
