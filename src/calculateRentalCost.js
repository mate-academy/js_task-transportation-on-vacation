/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const smallDiscount = 20;
  const largeDiscount = 50;
  const priceOfRent = 40;

  if (days >= 3 && days < 7) {
    return days * priceOfRent - smallDiscount;
  } else if (days >= 7) {
    return days * priceOfRent - largeDiscount;
  }

  return days * priceOfRent;
}

module.exports = calculateRentalCost;
