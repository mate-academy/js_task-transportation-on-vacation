/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const everyDayRent = 40;
  const discountFor7Days = 50;
  const discountFor3Days = 20;
  const minDaysFor7DayDiscount = 7;
  const minDaysFor3DayDiscount = 3;
  let totalSum = everyDayRent * days;

  if (days >= minDaysFor7DayDiscount) {
    totalSum = everyDayRent * days - discountFor7Days;
  } else if (days >= minDaysFor3DayDiscount) {
    totalSum = everyDayRent * days - discountFor3Days;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
