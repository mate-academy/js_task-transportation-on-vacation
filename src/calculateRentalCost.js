/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const per_day = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const shortTerm = 3;
  const shortTermDiscount = 20;
  let total = days * per_day;

  if (days >= longTerm){
    total -= longTermDiscount;
  }

  else if (days >= shortTerm) {
    total -= shortTermDiscount;
  }
  return total;
}

module.exports = calculateRentalCost;
