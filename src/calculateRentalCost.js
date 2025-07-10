/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let discount = 0;
  const rentPayment = 40 * days;

  if (days >= 3 && days < 7) {
    discount = 20;
  } else if (days >= 7) {
    discount = 50;
  }

  return rentPayment - discount;
}

module.exports = calculateRentalCost;
