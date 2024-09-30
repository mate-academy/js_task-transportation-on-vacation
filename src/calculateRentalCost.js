/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let costOfrent = 40 * days;
  const longTermThreshold = 7;
  const midTermThreshold = 3;
  const longTermDiscount = 50;
  const midTermDiscount = 20;

  if (days >= longTermThreshold) {
    costOfrent = costOfrent - longTermDiscount;

    return costOfrent;
  }

  if (days >= midTermThreshold) {
    costOfrent = costOfrent - midTermDiscount;

    return costOfrent;
  }

  return costOfrent;
}

module.exports = calculateRentalCost;
