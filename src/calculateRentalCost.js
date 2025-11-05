/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_FEE = 40;
  const totalCost = days * DAILY_FEE;

  // discounts based on rented days [min day : discount amount]
  const daysDiscount = {
    3: 20,
    7: 50,
  };

  // find the maximum applicable discount
  const discount =
    daysDiscount[Object.keys(daysDiscount).findLast((dd) => days >= dd)] || 0;

  return totalCost - discount;
}

module.exports = calculateRentalCost;
