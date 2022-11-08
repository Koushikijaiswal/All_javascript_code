
     
   
    function diagonalBoundarySum(arr){
        let requiredSum = 0;
       
        for (let i = 0; i < N; i++) {
     
            for (let j = 0; j < N; j++) {
     
              
                if (i == j || (i + j) == N - 1) {
                    requiredSum += arr[i][j];
                }
     
                else if (i == 0 || j == 0 || i == N - 1|| j == N - 1) {
                    requiredSum += arr[i][j];
                }
            }
        }
     
        
        console.log(requiredSum);
    }
  
     
        let arr = [[1,2,3,4,1],
        [5,6,7,8,2],
        [9,10,11,12,13],
        [13,14,15,16,15],
        [11,12,15,19,15],];
        let N = 5;
        diagonalBoundarySum(arr);
     