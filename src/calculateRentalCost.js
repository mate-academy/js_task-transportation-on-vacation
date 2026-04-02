/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceOfDay = 40;
  const basicDiscount = 20;
  const additionalDiscount = 50;

  if (days <= 2) {
    return days * priceOfDay;
  } else if (days < 7) {
    return days * priceOfDay - basicDiscount;
  } else {
    return days * priceOfDay - additionalDiscount;
  }
}

module.exports = calculateRentalCost;
