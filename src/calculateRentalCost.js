/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discontSmall = 20;
  const daysMin = 3;
  const discontBig = 50;
  const daysMax = 7;
  const basicPrice = 40;

  const totalCost = basicPrice * days;

  if (days >= daysMin && days < daysMax) {
    return totalCost - discontSmall;
  }

  if (days >= daysMax) {
    return totalCost - discontBig;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
