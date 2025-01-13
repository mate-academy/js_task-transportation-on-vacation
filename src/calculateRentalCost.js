/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const fullAmmount = days * pricePerDay;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 3 && days < 7) {
    return fullAmmount - smallDiscount;
  } else if (days >= 7) {
    return fullAmmount - bigDiscount;
  }

  return fullAmmount;
}

module.exports = calculateRentalCost;
