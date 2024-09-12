/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carRent = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  let costRent = 0;

  if (days < 3) {
    costRent = carRent * days;
  } else if (days <= 6) {
    costRent = (carRent * days) - smallDiscount;
  } else if (days >= 7) {
    costRent = (carRent * days) - bigDiscount;
  }

  return costRent;
}

module.exports = calculateRentalCost;
