/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let amount = 0;
  const rent = 40;
  const discountForWeek = 20;
  const discountMoreWeek = 50;

  if (days < 3) {
    amount = days * rent;

    return amount;
  }

  if (days < 7) {
    amount += days * rent - discountForWeek;

    return amount;
  }
  amount += days * rent - discountMoreWeek;

  return amount;
}

module.exports = calculateRentalCost;
