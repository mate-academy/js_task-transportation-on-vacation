/**
 * @param {number}
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const discountForWeek = 50;
  const discountForDays = 20;
  const minDaysForWeekDiscount = 7;
  const minDaysForDaysDiscount = 3;

  let totalCost = dailyRate * days;

  if (days >= minDaysForWeekDiscount) {
    totalCost -= discountForWeek;
  } else if (days >= minDaysForDaysDiscount) {
    totalCost -= discountForDays;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
