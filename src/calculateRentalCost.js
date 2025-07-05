/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  
  const everyDayRent = 40;
  const longDays = 7;
  const longDaysDiscount = 50;
  const fewDays = 3;
  const fewDaysDiscount = 20;

  let totalPrice = days * everyDayRent;

  if (days >= longDays) {
    return totalPrice - longDaysDiscount;
  }

  if (days >= fewDays) {
    return totalPrice - fewDaysDiscount;
  }

  return totalPrice;
}

