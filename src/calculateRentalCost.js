/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;
  const shortTermThreshold = 3;
  const longTermThreshold = 7;

  if (days < shortTermThreshold) {
    return baseCost * days;
  }

  if (days >= shortTermThreshold && days < longTermThreshold) {
    return baseCost * days - shortTermDiscount;
  }

  if (days >= longTermThreshold) {
    return baseCost * days - longTermDiscount;
  }
}

module.exports = calculateRentalCost;
