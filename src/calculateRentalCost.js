/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40;
  let result = days * rentalCost;

  if (days >= 7) {
    return (result -= 50);
  }

  if (days >= 3) {
    return (result -= 20);
  }

  return result;
}

module.exports = calculateRentalCost;
