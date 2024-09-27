/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const shortRental = 3;
  const shortRentalDiscount = 20;
  const longRental = 7;
  const longRentalDiscount = 50;

  const baseCost = days * pricePerDay;

  if (days >= longRental) {
    return baseCost - longRentalDiscount;
  }

  if (days >= shortRental) {
    return baseCost - shortRentalDiscount;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
