/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const basePrice = 40;
  const totalAmount = days * basePrice;
  const longTermDays = 7;
  const longTermDiscount = 50;
  const midTermDays = 3;
  const midTermDiscount = 20;

  if (days >= longTermDays) {
    return totalAmount - longTermDiscount;
  } else if (days >= midTermDays) {
    return totalAmount - midTermDiscount;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
