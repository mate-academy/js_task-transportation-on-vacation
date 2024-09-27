/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let total = 0;
  const dayilyPay = 40;

  if (days < 3) {
    total = days * dayilyPay;
  } else if (days < 7) {
    total = (days * dayilyPay) - 20;
  } else {
    total = days * dayilyPay - 50;
  }

  return total;
}

module.exports = calculateRentalCost;
