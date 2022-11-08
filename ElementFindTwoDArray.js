// any value find in two D array when each row of an element is in sorted order


let TwoDsortedArray =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];

function Findelement(Array , element){
    for(let i=0; i<Array.length;i++){
        for(let j=0 ;j<Array[i].length;j++)
         {
            if(Array[i][j] === element){
                return true ;
            }
         }
    }
    return false;
}
let element = 112;
if(Findelement(TwoDsortedArray,element))
console.log(` ${element} is found within 2D Array`);
else
console.log(`${element} is not found in the 2d array`);



// second method very complecated but complexiti is very good no any use offor loop
var M = 3;
var N = 4;


function binarySearch(arr, K)
{
	var low = 0;
	var high = N - 1;
	while (low <= high) {
		var mid = low + parseInt((high - low) / 2);


		if (arr[mid] == K)
			return true;

	
		if (arr[mid] < K)
			low = mid + 1;
		else
			high = mid - 1;
	}


	return false;
}


function searchMatrix(matrix, K)
{
	var low = 0;
	var high = M - 1;
	while (low <= high) {
		var mid = low + parseInt((high - low) / 2);


		if (K >= matrix[mid][0]
			&& K <= matrix[mid][N - 1])
			return binarySearch(matrix[mid], K);


		if (K < matrix[mid][0])
			high = mid - 1;
		else
			low = mid + 1;
	}


	return false;
}

var matrix = [ [ 1, 3, 5, 7 ],
					[ 10, 11, 16, 20 ],
					[ 23, 30, 34, 50 ] ];
var K = 13;
if (searchMatrix(matrix, K))
    console.log( "Found" );
else
	console.log( "Not found" );
