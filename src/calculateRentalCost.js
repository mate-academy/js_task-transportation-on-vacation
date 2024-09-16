/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalValue = 40;
  const firstDiscount = 20;
  const secondDiscount = 50;
  if (days >= 7) {
    return days * rentalValue - secondDiscount;
  } else if (days >= 3 && days < 7) {
    return days * rentalValue - firstDiscount;
  }
  return days * rentalValue;
};

module.exports = calculateRentalCost;
