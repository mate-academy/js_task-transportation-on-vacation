/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carRent = 40;
  const shortTerm = 3;
  const longTerm = 7;
  const threeDaysDiscount = 20;
  const sevenDaysDiscount = 50;

  let total = days * carRent;

  if (days >= longTerm) {
    return (total -= sevenDaysDiscount);
  }

  if (days >= shortTerm) {
    return (total -= threeDaysDiscount);
  }

  return total;
}

module.exports = calculateRentalCost;
