/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalAmount = 0;
  const znyzhka = 20;
  const vznyzhka = 50;


  if (days < 3) {
    totalAmount = days * 40;
  } else if (days >= 3 && days < 7) {
    totalAmount = 40 * days - znyzhka;
  } else if (days >= 7) {
    totalAmount = 40 * days - vznyzhka;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
