/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40 * days;
  const daysForBasicDiscount = 3;
  const daysForProDiscount = 7;
  const basicDiscount = 20;
  const proDiscount = 50;

  if (days >= daysForBasicDiscount ) {
    return rentalCost - basicDiscount
  }

  if (days >= daysForProDiscount) {
    return rentalCost - proDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
