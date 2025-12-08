/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const everyDayPrice = 40;

  if (days >= 7) {
    return everyDayPrice * days - 50;
  }

  if (days >= 3 && days <= 6) {
    return everyDayPrice * days - 20;
  }

  return everyDayPrice * days;
}

module.exports = calculateRentalCost;
