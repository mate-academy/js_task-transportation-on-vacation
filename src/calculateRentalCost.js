/**
 * @param {number} days
 *
 * @return {number}
 */
const discountSmall = 20;

const discountBig = 50;

const rent = 40;

function calculateRentalCost(days) {
  if (days < 3) {
    return rent * days;
  }

  if (days < 7) {
    return rent * days - discountSmall;
  }

  return rent * days - discountBig;
}

module.exports = calculateRentalCost;
