/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let rentalCost = days * 40;
  const minDiscount = 20;
  const maxDiscount = 50;
  const timeMaxDiscount = 7;
  const timeMinDiscount = 3;

  if (days >= timeMinDiscount & days < timeMaxDiscount) {
    rentalCost -= minDiscount;
  }

  if (days >= timeMaxDiscount) {
    rentalCost -= maxDiscount;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
