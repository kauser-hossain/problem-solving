
function findPeakelement(array, n) {
  if (n == 1) return 0;
  if (array[0] >= array[1]) return 0;
  if (array[n - 1] == array[n - 2]) return n - 1;
  for (let i = 0; i < n - 1; i++) {
    if (array[i] >= array[i + 1] && array[i] >= array[i - 1]) return i;
  }
}
let array = [23, 25, 53, 232, 2321, 462, 3421, 21, 1323];
let n = array.length;
let result=findPeakelement(array,n);
console.log(result)
