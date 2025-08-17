/**
 * @param {number} days
 *
 * @return {number}
 */
const dailyRate = 40;
const discountFor7Days = 50;
const discountFor3Days = 20;
const treeDayThreshold = 3;
const sevenDayThreshold = 7;

function calculateRentalCost(days) {
  let rentalCost = days * dailyRate;

  if (days >= treeDayThreshold && days <= 6) {
    rentalCost = rentalCost - discountFor3Days;
  } else if (days >= sevenDayThreshold) {
    rentalCost = rentalCost - discountFor7Days;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
