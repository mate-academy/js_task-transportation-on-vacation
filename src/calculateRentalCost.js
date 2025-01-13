/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costRent = days * 40;
  let getDiscount;

  if (days >= 7) {
    getDiscount = costRent - 50;

    return getDiscount;
  }

  if (days >= 3) {
    getDiscount = costRent - 20;

    return getDiscount;
  }
  
  return costRent;
}

module.exports = calculateRentalCost;
