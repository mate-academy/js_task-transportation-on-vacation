/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let amount = 0;
  const price = 40;
  const discountDaysThree = 20;
  const discountDaysSeven = 50;

  if (days < 3) {
    amount = price * days;
  }

  if (days >= 3 && days < 7) {
    amount = price * days - discountDaysThree;
  }

  if (days >= 7) {
    amount = price * days - discountDaysSeven;
  }

  return amount;
}

module.exports = calculateRentalCost;
