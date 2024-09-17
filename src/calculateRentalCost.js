/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const firstDiscount = 20;
  const secondDiscount = 50;
  const priseForDays = price * days;

  if (days <= 2) {
    return (priseForDays);
  }

  if (days < 7) {
    return (priseForDays) - firstDiscount;
  }

  if (days >= 7) {
    return (priseForDays) - secondDiscount;
  }
}

module.exports = calculateRentalCost;
