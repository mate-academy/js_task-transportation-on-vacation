/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costRent = days * 40;
  let discount;

  if (days >= 7) {
    discount = costRent - 50;

    return discount;
  }

  if (days >= 3) {
    discount = costRent - 20;

    return discount;
  }

  return costRent;
}

module.exports = calculateRentalCost;
