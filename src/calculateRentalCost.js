/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const threeDaysOff = 20;
  const sevenDaysOff = 50;

  const priceWithoutOff = days * price;

  if (days >= 3 && days < 7) {
    return priceWithoutOff - threeDaysOff;
  }

  if (days >= 7) {
    return priceWithoutOff - sevenDaysOff;
  }

  return priceWithoutOff;
}

module.exports = calculateRentalCost;
