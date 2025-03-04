/**
 * @param {number} days
 *
 * @return {number}
 */
const dailyRentalCost = 40;
const discountFor3MoreDays = 20;
const discountFor7MoreDays = 50;
const minDaysFor3Discount = 3;
const minDaysFor7Discount = 7;

function calculateRentalCost(numberOfDays) {
  if (numberOfDays >= minDaysFor7Discount) {
    return numberOfDays * dailyRentalCost - discountFor7MoreDays;
  }

  if (numberOfDays >= minDaysFor3Discount) {
    return numberOfDays * dailyRentalCost - discountFor3MoreDays;
  }

  // write code here
  return numberOfDays * dailyRentalCost;
}

module.exports = calculateRentalCost;
