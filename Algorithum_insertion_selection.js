/*
Insertion Sort step-by-step
Insertion Sort works by comparing an element with the elements to its left, until it reaches an element that is smaller than it; the element is then inserted in front of the smaller element.


Pass the unsorted array [5, 2, 4, 6, 1, 3] into Insertion Sort.
Start at the second element (2) of the array and compare it with its neighbouring element to the left (5).
Is 2 < 5? Yes, so insert 2 into 5’s place => [2, 5, 4, 6, 1, 3]
Now move up to the 3rd element (4) and compare with the value to the left (5).
Is 4 < 5? Yes, so move to the next element on the left.
Is 4 < 2? No, so insert in front of 2 => [2, 4, 5, 6, 1, 3]. As you can see, the numbers in bold are in order.
Now move up to the 4th element (6) and compare with the value to the left (5).
Is 6 < 5? No, leave where it is => [2, 4, 5, 6, 1, 3].
Now move up to the 5th element (1) and compare with the value to the left (6).
Is 1 < 6? Yes.
Is 1 < 5? Yes.
Is 1 < 4? Yes.
Is 1 < 2? Yes. We have reached the beginning of the array, so insert at front => [1, 2, 4, 5, 6, 3].
Now move up to 5th element (3) and compare with the value to the left (6).
Is 3 < 6? Yes.
Is 3 < 5? Yes.
Is 3 < 4? Yes.
Is 3 < 2? No => Insert after 2 => [1, 2, 3, 4, 5, 6]. The array is now sorted!

*/

//time conplexity
//worst case =O(n^2)
//best case=O(n)when array is already sorted
//space = O(1) inplace


/*
How selection sort works?
 
Lets consider the following array as an example: arr[] = {64, 25, 12, 22, 11}

First pass:

For the first position in the sorted array, the whole array is traversed from index 0 to 4 sequentially. The first position where 64 is stored presently, after traversing whole array it is clear that 11 is the lowest value.
   64   	   25   	   12   	   22   	   11   
Thus, replace 64 with 11. After one iteration 11, which happens to be the least value in the array, tends to appear in the first position of the sorted list.
   11   	   25   	   12   	   22   	   64   
Second Pass:

For the second position, where 25 is present, again traverse the rest of the array in a sequential manner.
   11   	   25   	   12   	   22   	   64   
After traversing, we found that 12 is the second lowest value in the array and it should appear at the second place in the array, thus swap these values.
   11   	   12   	   25   	   22   	   64   
Third Pass:

Now, for third place, where 25 is present again traverse the rest of the array and find the third least value present in the array.
   11   	   12   	   25   	   22   	   64   
While traversing, 22 came out to be the third least value and it should appear at the third
place in the array, thus swap 22 with element present at third position.
   11   	   12   	   22   	   25   	   64   
Fourth pass:

Similarly, for fourth position traverse the rest of the array and find the fourth least element in the array 
As 25 is the 4th lowest value hence, it will place at the fourth position.
   11   	   12   	   22   	   25   	   64   
Fifth Pass:

At last the largest value present in the array automatically get placed at the last position in the array
The resulted array is the sorted array.
   11   	   12   	   22   	   25   	   64   
*/


/*

Complexity Analysis of Selection Sort:
Time Complexity: The time complexity of Selection Sort is O(N2) as there are two nested loops:

One loop to select an element of Array one by one = O(N)
Another loop to compare that element with every other Array element = O(N)
Therefore overall complexity = O(N)*O(N) = O(N*N) = O(N2)

Space: O(1) as the only extra memory used is for temporary variable while swapping two values in Array. The good thing about selection sort is it never makes more than
 O(n) swaps and can be useful when memory write is a costly operation. 
*/