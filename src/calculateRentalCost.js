/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const threeDaysMore = 20;
  const sevenDaysMore = 50;

  if (days < 3) {
    return days * rentPrice;
  }

  if (days < 7) {
    return days * rentPrice - threeDaysMore;
  }

  return days * rentPrice - sevenDaysMore;
}

module.exports = calculateRentalCost;
