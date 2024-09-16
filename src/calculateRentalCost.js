/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCarCosts = 40;
  const threeDaysMoreDiscount = 20;
  const sevenDaysMoreDiscount = 50;

  if (days <= 0) {
    return 'Введите число бльше 0';
  }

  if (days <= 2) {
    return days * dayCarCosts;
  }

  if (days >= 3 && days <= 6) {
    return days * dayCarCosts - threeDaysMoreDiscount;
  }

  if (days >= 7) {
    return days * dayCarCosts - sevenDaysMoreDiscount;
  }
}

module.exports = calculateRentalCost;
