/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basicDays = 3;
  const weekDays = 7;
  const dayRent = 40;
  const basicDiscount = 20;
  const weekDiscount = 50;

  const rentalCost = days * dayRent;

  if (days >= basicDays && days < weekDays) {
    return rentalCost - basicDiscount;
  }

  if (days >= weekDays) {
    return rentalCost - weekDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
