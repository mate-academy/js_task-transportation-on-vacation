/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let finalPrice = 0;
  const price = 40 * days;
  const longVacation = 7;
  const shotVacation = 3;

  if (days >= longVacation) {
    finalPrice = price - 50;
  }

  if (days >= shotVacation && days < longVacation) {
    finalPrice = price - 20;
  }

  if (days < shotVacation) {
    finalPrice = price;
  }

  return finalPrice;
}

module.exports = calculateRentalCost;
