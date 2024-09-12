/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRent = 40;
  const rent = days * dailyRent;
  const sevenDaysDiscount = 50;
  const threeDaysDiscount = 20;
  const sevenDaysDuration = 7;
  const threeDaysDuration = 3;

  if (days >= sevenDaysDuration) {
    return rent - sevenDaysDiscount;
  }

  if (days >= threeDaysDuration) {
    return rent - threeDaysDiscount;
  }

  return rent;
}

module.exports = calculateRentalCost;
