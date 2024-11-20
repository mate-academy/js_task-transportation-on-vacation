/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  let rentalCost = 0;

  if (days >= 7) {
    rentalCost = days * rent - 50;
  } else if (days >= 3 && days <= 7) {
    rentalCost = days * rent - 20;
  } else {
    rentalCost = rent * days;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
