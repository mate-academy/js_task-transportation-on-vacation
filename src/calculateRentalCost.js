/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  
  const rentCost = 40;
  const discountSevenMore = 50;
  const discountThreeMore = 20;
  
  if (days >= 7) {
    return days * rentCost - discountSevenMore;
  } else if (days >= 3) {
    return days * rentCost - discountThreeMore;
  } else {
    return days * rentCost;
  }
}

module.exports = calculateRentalCost;
