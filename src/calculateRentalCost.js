/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carRent = 40;
  const maxDiscount = 50;
  const minDiscount = 20;

  switch (days) {
    case 1:
    case 2:
      return days * carRent;
    case 3:
    case 4:
    case 5:
    case 6:
      return days * carRent - minDiscount;
    default:
      return days * carRent - maxDiscount;
  }
}

module.exports = calculateRentalCost;
