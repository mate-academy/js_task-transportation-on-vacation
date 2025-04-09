/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basicPrice = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;

  if (days >= 7) {
    return days * basicPrice - longTermDiscount;
  }

  if (days >= 3) {
    return days * basicPrice - shortTermDiscount;
  } 

  return days * basicPrice;
}

module.exports = calculateRentalCost;
