/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPricePerDay = 40;
  const smallSale = 20;
  const bigSale = 50;
  const amountCost = days * rentPricePerDay;

  if (days >= 7) {
    return amountCost - bigSale;
  }

  if (days >= 3) {
    return amountCost - smallSale;
  }

  return amountCost;
}

module.exports = calculateRentalCost;
