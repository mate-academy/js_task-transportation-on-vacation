/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRentalCost = 40;
  const longTermDiscount = 50;
  const shortTermDiscount = 20;
  let rentalCost = 0;

  if (days >= 7) {
    rentalCost = dayRentalCost * days - longTermDiscount;

    return rentalCost;
  }

  if (days >= 3) {
    rentalCost = dayRentalCost * days - shortTermDiscount;

    return rentalCost;
  }

  return dayRentalCost * days;
}

module.exports = calculateRentalCost;
