/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const number = days * 40;
  let discount = 0;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;

  if (days >= longTerm) {
    discount = longTermDiscount;
  } else if (days >= shortTerm) {
    discount = shortTermDiscount;
  }

  return number - discount;
}

module.exports = calculateRentalCost;
