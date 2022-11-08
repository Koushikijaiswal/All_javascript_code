const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`please input a string `, name => {
    console.log(excelcolumntonumber(name));
    readline.close();
  });

  function excelcolumntonumber(comb){
    let result =0;
    for(let i=comb.length-1;i>=0;i--){
        let multi =Math.pow(26, comb.length-i-1);
        result = result +(comb[i].charCodeAt(0)-'A'.charCodeAt(0)+1)*multi;
    }
    return result;
  }




//   function excelColumnToNumber(comb) {
//     let result = 0;
    
//     for(let i=comb.length-1;i>=0;i--) {
//         let multiplier = Math.pow(26, comb.length-i-1);
//         result = result + (comb[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1) * multiplier;
//     }
//     return result;
// }
