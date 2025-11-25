/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const discountFor3To6Days = 20;
  const discountFor7OrMoreDays = 50;
  const noDiscount = 2;
  const minTwentyDiscount = 3;
  const maxTwentyDiscount = 6;

  if (days <= noDiscount) {
    return dailyRate * days;
  }

  if (days >= minTwentyDiscount && days <= maxTwentyDiscount) {
    return dailyRate * days - discountFor3To6Days;
  }

  return dailyRate * days - discountFor7OrMoreDays;
}

module.exports = calculateRentalCost;
