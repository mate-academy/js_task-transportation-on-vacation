/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const sumePrice = price * days;

  if (days >= 7) {
    return sumePrice - 50;
  } else if (days >= 3) {
    return sumePrice - 20;
  }

  return sumePrice;
}

module.exports = calculateRentalCost;
