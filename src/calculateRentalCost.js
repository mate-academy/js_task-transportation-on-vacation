/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costFor1Day = 40;
  const costForAllDays = costFor1Day * days;
  const discountFor7Days = 50;
  const discountFor3Days = 20;

  if (days >= 7) {
    return costForAllDays - discountFor7Days;
  } else if (days >= 3) {
    return costForAllDays - discountFor3Days;
  }

  return costForAllDays;
}

module.exports = calculateRentalCost;
