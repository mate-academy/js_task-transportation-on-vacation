/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let dailyrate = 40;
  let threeDayD = 20;
  let sevenDayD = 50;

  if(days < 3){
    return days*dailyrate
  }else if(days >= 3 || days < 7){
    return days*dailyrate-threeDayD
  }else{
    return days*dailyrate-sevenDayD
  }
}

module.exports = calculateRentalCost;
