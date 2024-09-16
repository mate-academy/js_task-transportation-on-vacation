/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const perDay = 40;
  const amountWithoutDiscont = days * perDay;
  const discountForSeven = 50;
  const discountForThree = 20;

  if (days >= 7) {
    return amountWithoutDiscont - discountForSeven;
  }

  if (days >= 3) {
    return amountWithoutDiscont - discountForThree;
  }

  return amountWithoutDiscont;
}

module.exports = calculateRentalCost;
