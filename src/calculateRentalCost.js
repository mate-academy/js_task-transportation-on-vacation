/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const additionalDiscount = 50;
  const baseDiscount = 20;
  const shortTerm = 3;
  const longTerm = 7;

  if (days >= longTerm) {
    return days * pricePerDay - additionalDiscount;
  }

  if (days >= shortTerm) {
    return days * pricePerDay - baseDiscount;
  }

  return days * pricePerDay;
}

module.exports = calculateRentalCost;
