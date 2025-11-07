/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = days * 40;
  let discount = 0;
  const daysOfDiscount = 3;
  const daysOfBiggerDiscount = 7;

  if (days >= daysOfDiscount) {
    discount = 20;
  }

  if (days >= daysOfBiggerDiscount) {
    discount = 50;
  }

  result -= discount;

  return result;
}

module.exports = calculateRentalCost;
