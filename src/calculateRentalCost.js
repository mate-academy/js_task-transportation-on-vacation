/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const threePlusDaysOff = 20;
  const sevenPlusDaysOff = 50;

  if (days > 6) {
    return dayPrice * days - sevenPlusDaysOff;
  }

  if (days > 2) {
    return dayPrice * days - threePlusDaysOff;
  }

  return dayPrice * days;
}

module.exports = calculateRentalCost;
