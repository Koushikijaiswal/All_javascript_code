/* pattern printing
*
**
***
****
*****
*/

for(let i=1 ;i<=5;i++){
    let str ='';
    for(let j=1;j<=i;j++){
        str =str+'*';
    }
    console.log(str);
}

// anoher patern trinagle

for(i=1;i<=4;i++){
    let ans ="";
    let space ="";
    for(j=1;j<=7;j++){
        if(j>=5-i&& j<=3+i ){
           ans = ans + "*" +" ";
            //p ++;
        }
        else {
           space = space +" "; 
        }
       
    }
     ans = space +ans;
      console.log(ans);
  
}
console.log("------------------------");

//another pattern
/*
    #######
    ### ###
    ##   ##
    #     #
 */
for(i=1;i<=4;i++){
    let ans1 ="";
    let space1 ="";
    for(j=1;j<=7;j++){
        if(j>=1 && j<=5-i || j>=3+i&& j<=7){
            ans1 = ans1 + "*";
        }
     else 
        {
            ans1 = ans1+space1+" ";
        }
    }
  console.log(ans1);
}

