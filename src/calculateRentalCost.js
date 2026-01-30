/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const discountFor7Days = 50;
  const discountFor3Days = 20;
  const daysFor7DayDiscount = 7;
  const daysFor3DayDiscount = 3;
  const totalPrice = days * costPerDay;

  if (days >= daysFor7DayDiscount) {
    return totalPrice - discountFor7Days;
  }

  if (days >= daysFor3DayDiscount) {
    return totalPrice - discountFor3Days;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
