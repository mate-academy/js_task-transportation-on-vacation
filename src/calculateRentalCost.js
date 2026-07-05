/*
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  let rentDay = 40;

  if(days < 3){
    return (rentDay * days);
  }

  if(days >= 3 && days <= 6){
    return (rentDay * days) - 20;
  }

  if(days >= 7){
    return (rentDay * days) - 50;
  }


}

module.exports = calculateRentalCost;
