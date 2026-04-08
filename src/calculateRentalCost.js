/**
 * @param {number} days
 *$40 7
 $20 3
 * @return {number}
 */

function calculateRentalCost(days) {
let desc = 0;

  const COST_PER_DAY = 40;
   const DESC_3 = 20;
   const DESC_7 = 50;
  
if(days<3){
 desc = days * COST_PER_DAY;
}

  
if(days>=3 && days<=6){
 desc = days * COST_PER_DAY - DESC_3;
}



if(days>=7){

  desc = days * COST_PER_DAY - DESC_7;

}


return desc ;



  
  // write code here
}

module.exports = calculateRentalCost;
