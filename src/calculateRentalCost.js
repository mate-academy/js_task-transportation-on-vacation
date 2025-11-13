/**
 * @param {number} days
 *
 * @return {number}
 */

const calculateRentalCost = (days) => {
  const oneDay = 40;
  const sumDays = days * oneDay;

  if (days >= 7) {
    return sumDays - 50;
  }

  if (days >= 3) {
    return sumDays - 20;
  }

  return sumDays;
};

module.exports = calculateRentalCost;
