/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPerDay = 40;
  const amountPerAll = rentPerDay * days;
  const saleOfMinDays = amountPerAll - 20;
  const saleOfMaxDays = amountPerAll - 50;

  if (days < 3) {
    return amountPerAll;
  }

  if (days >= 3 && days < 7) {
    return saleOfMinDays;
  }

  if (days > 6) {
    return saleOfMaxDays;
  }
}

module.exports = calculateRentalCost;
