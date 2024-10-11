/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const oneDayRent = 40;
  const discountForWeek = 50;
  const discountFor3Days = 20;
  const payWithoutDiscount = oneDayRent * days;

  if (days >= 3 && days < 7) {
    return payWithoutDiscount - discountFor3Days;
  }

  if (days >= 7) {
    return payWithoutDiscount - discountForWeek;
  }

  return payWithoutDiscount;
}

module.exports = calculateRentalCost;
