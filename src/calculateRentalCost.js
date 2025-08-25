/**
 * @param {number} days
 *
 * @return {number}
 */

const dailyRate = 40;
const sevenDaysDiscount = 50;
const threeDaysDiscount = 20;
const minDaysBigDiscount = 7;
const minDaysSmallDiscount = 3;

function calculateRentalCost(days) {
  const rentalCost = days * dailyRate;

  if (days >= minDaysBigDiscount) {
    return rentalCost - sevenDaysDiscount;
  }

  if (days >= minDaysSmallDiscount) {
    return rentalCost - threeDaysDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
