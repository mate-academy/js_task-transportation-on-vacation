/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discountForThreeMoreDays = 20;
  const discountForSevenMoreDays = 50;

  if (days <= 2) {
    return 40 * days;
  }

  if (days <= 6) {
    return 40 * days - discountForThreeMoreDays;
  }

  if (days >= 7) {
    return 40 * days - discountForSevenMoreDays;
  }
}

module.exports = calculateRentalCost;
