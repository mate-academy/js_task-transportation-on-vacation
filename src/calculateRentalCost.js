/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseprice = 40;
  const basicTerm = 3;
  const basicDiscount = 20;
  const longTerm = 7;
  const longDiscount = 50;

  if (days < basicTerm) {
    return days * baseprice;
  }

  if (days < longTerm) {
    return days * baseprice - basicDiscount;
  }

  if (days >= longTerm) {
    return days * baseprice - longDiscount;
  }
}

module.exports = calculateRentalCost;
