/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentalCost = 40;
  const rabatAfterOneWeek = 50;
  const rabatAfterThreeDays = 20;
  const minDaysForMediumDiscount = 3;
  const minDaysForWeeklyDiscount = 7;
  const maxDaysForMediumDiscount = 6;

  if (days < minDaysForMediumDiscount) {
    return days * dailyRentalCost;
  }

  if (days >= minDaysForMediumDiscount && days <= maxDaysForMediumDiscount) {
    return days * dailyRentalCost - rabatAfterThreeDays;
  }

  if (days >= minDaysForWeeklyDiscount) {
    return days * dailyRentalCost - rabatAfterOneWeek;
  }
}

module.exports = calculateRentalCost;
