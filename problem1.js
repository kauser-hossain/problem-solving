const findPeckElement = (arr, n) => {
  if (n == 1) return 0;
  if (arr[0] >= arr[1]) return 0;
  if (arr[n - 1] >= arr[n - 2]) return n - 1;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] >= arr[i + 1] && arr[i] > arr[i - 1]) return i;
  }
};
const arr=[3,34,2323,444444444,23322,4545];
const n=arr.length
const result=findPeckElement(arr,n)
console.log(result)