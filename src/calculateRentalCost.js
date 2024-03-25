/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const withoutDiscount = days * 40;
  let RentalCost = withoutDiscount;

  if (days >= 3 && days < 7) {
    RentalCost -= 20;
  } else if (days >= 7) {
    RentalCost -= 50;
  }

  return RentalCost;
}

module.exports = calculateRentalCost;
