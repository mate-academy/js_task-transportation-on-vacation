/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentalCost = 40;
  const rabatAfterOneWeek = 50;
  const rabatAfterThreeDays = 20;

  if(days < 3){
    return days * dailyRentalCost;
  }
  if(days >= 3 && days < 7){
    return days * dailyRentalCost - rabatAfterThreeDays;
  }
  if(days >= 7){
    return days * dailyRentalCost - rabatAfterOneWeek;
  }
}

module.exports = calculateRentalCost;
