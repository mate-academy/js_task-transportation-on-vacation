/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sumPaid = 0;
  const oneDay = 40;
  const returnMoneyThreeDays = 20;
  const returnMoneySevenDays = 50;
  const shortPeriod = 2;
  const longPeriod = 7;
  const threeDays = 3;

  if (days <= shortPeriod) {
    sumPaid = oneDay * days;
  } else if (days >= threeDays && days < longPeriod) {
    sumPaid = oneDay * days - returnMoneyThreeDays;
  } else if (days >= longPeriod) {
    sumPaid = oneDay * days - returnMoneySevenDays;
  }

  return sumPaid;
}

module.exports = calculateRentalCost;
