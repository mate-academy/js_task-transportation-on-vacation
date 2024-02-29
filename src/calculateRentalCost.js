/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const generalDiscount = 20;
  const wideDiscount = 50;

  if (days < 3) {
    return days * dayRent;
  } else if (days < 7) {
    return days * dayRent - generalDiscount;
  }

  return days * dayRent - wideDiscount;
}

module.exports = calculateRentalCost;
