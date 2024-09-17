/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const disc3 = 20;
  const disc7 = 50;
  const price = 40;

  if (days >= 7) {
    return days * price - disc7;
  } else if (days >= 3) {
    return days * price - disc3;
  } else {
    return days * price;
  };
}

module.exports = calculateRentalCost;
