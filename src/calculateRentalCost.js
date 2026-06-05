/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const shortTerm = 3;
  const longTerm = 7;
  const rent = 40;
  const basicDiscount = 20;
  const additionalDiscount = 50;
  let sum = 0;

  if (days < shortTerm) {
    sum = rent * days;
  }

  if (days >= shortTerm && days < longTerm) {
    sum = rent * days - basicDiscount;
  }

  if (days >= longTerm) {
    sum = rent * days - additionalDiscount;
  }

  return sum;
}
module.exports = calculateRentalCost;
