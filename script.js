



const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const divide = (arr, n) => {
  let i=0;
  let s=0;
  let arr1=[];
  let curr=[];
  while(i<arr.length) {
    s += arr[i];
    if(s > n) {
      s = arr[i]; // Reset sum to current array element
      arr1.push(curr);
      curr = [];
    }
    curr.push(arr[i]); // Push array element, not sum
    i++;
  }
  if(curr.length > 0) {
    arr1.push(curr);
  }
  return arr1;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
