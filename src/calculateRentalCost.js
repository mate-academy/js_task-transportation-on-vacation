/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priseForDay = 40;
  const bigDiscont = 50;
  const smallDiscont = 20;
  const longTerm = 7;
  const shortTerm = 3;

  if (days >= longTerm) {
    return days * priseForDay - bigDiscont;
  } else if (days >= shortTerm && days < longTerm) {
    return days * priseForDay - smallDiscont;
  }

  return days * priseForDay;
}

module.exports = calculateRentalCost;
