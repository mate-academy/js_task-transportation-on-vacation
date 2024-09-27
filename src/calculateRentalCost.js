/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const minDays = 3;
  const minDiscount = 20;
  const maxDays = 7;
  const maxDiscount = 50;

  if (days > 0 && days < minDays) {
    return price * days;
  } if (days >= maxDays) {
    return price * days - maxDiscount;
  }
  return price * days - minDiscount;
}

module.exports = calculateRentalCost;
