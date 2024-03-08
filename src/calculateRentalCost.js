/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPayment = 40;
  const shortTerm = 3;
  const longTerm = 7;
  const longTermDicount = 20;
  const longlongTermDicount = 50;

  if (days < shortTerm) {
    return days * dailyPayment;
  }

  if (days < longTerm) {
    return days * dailyPayment - longTermDicount;
  }

  return days * dailyPayment - longlongTermDicount;
}

module.exports = calculateRentalCost;
