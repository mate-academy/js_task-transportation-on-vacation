/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const discountKlein = 20;
  const discountGross = 50;

  if (days < 3) {
    return days * cost;
  } else if (days < 7) {
    return (days * cost) - discountKlein;
  } else {
    return (days * cost) - discountGross;
  }
}

module.exports = calculateRentalCost;
