/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const basicDiscount = 20;
  const bestDiscount = 50;
  const basicCost = pricePerDay * days;
  const discountedCost = basicCost - basicDiscount;
  const bestCost = basicCost - bestDiscount;
  const shortTermRent = 3;
  const longTermRent = 7;

  if (days < shortTermRent) {
    return basicCost;
  }

  if (days >= shortTermRent && days < longTermRent) {
    return discountedCost;
  }

  if (days >= longTermRent) {
    return bestCost;
  }
}

module.exports = calculateRentalCost;
