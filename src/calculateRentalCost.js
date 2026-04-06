/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceForDay = 40;
  const fullPrice = days * priceForDay;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  let resultPrice = fullPrice;

  if (days >= shortTerm) {
    resultPrice = fullPrice - shortTermDiscount;
  }

  if (days >= longTerm) {
    resultPrice = fullPrice - longTermDiscount;
  }

  return resultPrice;
}

module.exports = calculateRentalCost;
