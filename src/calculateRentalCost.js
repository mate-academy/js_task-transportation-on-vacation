/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const smallTermDiscount = 20;
  const longTermDiscount = 50;

  let rentalSum = 0;
  
  rentalSum = costPerDay * days;

  if (days >= 7) {
    return rentalSum - longTermDiscount;
  }

  if (days >= 3) {
    return rentalSum - smallTermDiscount;
  }

  return rentalSum;
}

module.exports = calculateRentalCost;
