/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basicCost = days * 40;
  const smallDiscount = 20;
  const largeDiscount = 50;
  const shortDiscountBreakpoint = 3;
  const longDiscountBreakpoint = 7;
  let finalCost = basicCost;

  if (days >= longDiscountBreakpoint) {
    finalCost -= largeDiscount;
  } else if (days >= shortDiscountBreakpoint) {
    finalCost -= smallDiscount;
  }

  return finalCost;
}

module.exports = calculateRentalCost;
