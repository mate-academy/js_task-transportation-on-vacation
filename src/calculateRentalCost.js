/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalAmount = 0;
  const pricePerOneDay = 40;

  if (days >= 7) {
    totalAmount += days * pricePerOneDay - 50;

    return totalAmount;
  }

  if (days >= 3) {
    totalAmount += days * pricePerOneDay - 20;

    return totalAmount;
  }

  return days * pricePerOneDay;
}

module.exports = calculateRentalCost;
