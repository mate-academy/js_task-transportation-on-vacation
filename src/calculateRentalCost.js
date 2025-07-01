/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  
  if (days < 3) {
return 80;
  }
  if (days === 3) {
return 100;
  }
  if (days > 3 && days <= 6) {
return 220;
  }
  else{
    return 230;
  }
}

module.exports = calculateRentalCost;
