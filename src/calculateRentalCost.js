/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const discount = 20;
  const bigDiscount = 50;

  if (days < 3) {
    return days * price;
  } else if (days <= 6) {
    return (days * price) - discount;
  } else {
    return (days * price) - bigDiscount;
  }
}

module.exports = calculateRentalCost;
