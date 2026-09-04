/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const total = days * 40;
  const bigVacation = 7;
  const bigVacationDiscount = 50;
  const normVacation = 3;
  const normVacationDiscount = 20;
  const smallVacation = 1;

  if (days >= bigVacation) {
    return total - bigVacationDiscount;
  }

  if (days >= normVacation) {
    return total - normVacationDiscount;
  }

  if (days >= smallVacation) {
    return total;
  }
}

module.exports = calculateRentalCost;
