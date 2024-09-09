/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;

  const totalCost = days * costPerDay;

  const discountLongRental = 50;

  const discountShortRental = 20;

  const numberOfDaysForLongRental = 7;

  const numberOfDaysForShortRental = 3;

  if (days >= numberOfDaysForLongRental) {
    const newTotalCost = totalCost - discountLongRental;

    return newTotalCost;
  }

  if (days >= numberOfDaysForShortRental) {
    const newTotalCost = totalCost - discountShortRental;

    return newTotalCost;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
