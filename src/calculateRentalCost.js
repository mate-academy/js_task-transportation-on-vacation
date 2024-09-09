/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const total = days * dayPrice;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days < 3) {
    return total;
  } 
  
  if (days < 7) {
    return total - smallDiscount;
  }

  return total - bigDiscount;
}

module.exports = calculateRentalCost;
