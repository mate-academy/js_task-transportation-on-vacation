/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const baseCost = days * 40;
  const weekRental = 7;
  const minDaysDiscount = 3;

  // Aplica desconto baseado nos dias
  if (days >= weekRental) {
    return baseCost - 50;
  } else if (days >= minDaysDiscount) {
    return baseCost - 20;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
