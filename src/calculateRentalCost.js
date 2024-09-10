/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const everyDayCarRentCost = 40;
  const minNumberOfDaysforDiscount = 3;
  const maxNumberOfDaysforDiscount = 7;

  if (days >= minNumberOfDaysforDiscount && days < maxNumberOfDaysforDiscount) {
    return days * everyDayCarRentCost - 20;
  }

  if (days >= maxNumberOfDaysforDiscount) {
    return days * everyDayCarRentCost - 50;
  }

  return days * everyDayCarRentCost;
}

module.exports = calculateRentalCost;
