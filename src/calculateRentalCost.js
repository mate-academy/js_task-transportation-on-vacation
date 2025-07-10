/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const everyDayRent = 40;
  const discountFor3To6Days = 20;
  const discountForMore7Days = 50;
  let totalCoast = days * everyDayRent;

  if (days >= 7) {
    totalCoast -= discountForMore7Days;
  } else if (days >= 3) {
    totalCoast -= discountFor3To6Days;
  }

  return totalCoast;
}

module.exports = calculateRentalCost;
