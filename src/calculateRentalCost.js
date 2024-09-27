/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (typeof days !== 'number' || !Number.isInteger(days) || days < 1) {
    throw new Error('The input parameter must be a positive integer');
  }

  const dailyCost = 40;
  const rentalCost = dailyCost * days;
  const shortTerm = 3;
  const longTerm = 7;
  const basicDiscount = 20;
  const extraDiscount = 50;

  if (days < shortTerm) {
    return rentalCost;
  }

  if (days < longTerm) {
    return rentalCost - basicDiscount;
  }

  return rentalCost - extraDiscount;
}

module.exports = calculateRentalCost;
