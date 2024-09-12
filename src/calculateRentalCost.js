/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const bigDiscount = 50;
  const everyDayPrice = 40;
  const minDiscount = 20;

  if (days < 3) {
    return days * everyDayPrice;
  } else if (days >= 3 & days < 7) {
    return days * everyDayPrice - minDiscount;
  } else if (days >= 7) {
    return days * everyDayPrice - bigDiscount;
  }
}

module.exports = calculateRentalCost;
