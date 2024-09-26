/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayPrice = 40;
  const firstDiscount = 20;
  const secondDiscount = 50;

  if (days < 3) {
    return oneDayPrice * days;
  }

  if (days < 7) {
    return oneDayPrice * days - firstDiscount;
  }

  return oneDayPrice * days - secondDiscount;
}

module.exports = calculateRentalCost;
