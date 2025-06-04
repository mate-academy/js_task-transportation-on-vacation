/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

let rent = days * 40;

if(days >= 3 && days < 7){

rent -= 20

}

if(days >= 7){

rent -= 50

}

return rent;

}

module.exports = calculateRentalCost;

calculateRentalCost(1);
calculateRentalCost(3);
calculateRentalCost(7);
