/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days >= 3 && days < 7) {
    return days * 40 - 20;
    } else if (days >= 7) {
    return days * 40 - 50;
    }
    
  return days * 40;
}

module.exports = calculateRentalCost;
