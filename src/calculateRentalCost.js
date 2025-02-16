/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const threeDayDiscount = 3;
  const sevenDayDiscount = 7;

  if (days < threeDayDiscount) {
    return cost * days;
  } else if (days >= sevenDayDiscount) {
    return cost * days - 50;
  }

  return cost * days - 20;
}

module.exports = calculateRentalCost;
