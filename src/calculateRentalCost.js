/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const cost = 40;
  const discountAfter7 = 50;
  const discountAfter3 = 20;
  let result = 0;
  if(days < 3){
    result += days * cost;
  }
  if(days < 7){
    result += (days * cost) - discountAfter7;
  }
  if(days >= 7){
    result += (days * cost) - discountAfter3;
  }
  return result
}

module.exports = calculateRentalCost;
