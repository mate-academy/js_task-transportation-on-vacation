/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalPay = 40;
  const longTermDiscount = 50;
  const longTerm = 7;
  const shortTermDiscount = 20;
  const shortTerm = 3;

  if (days >= longTerm) {
    return rentalPay * days - longTermDiscount;
  } else if (days >= shortTerm) {
    return rentalPay * days - shortTermDiscount;
  }

  return rentalPay * days;
}
module.exports = calculateRentalCost;
