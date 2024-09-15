/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const defCost = 40;
  let res = days * defCost;
  const costDiscont = 20;
  const costMoreDiscont = 50;

  if (days < 7 && days >= 3) {
    res -= costDiscont;
  } else if (days >= 7) {
    res -= costMoreDiscont;
  }

  return res;
}

module.exports = calculateRentalCost;
